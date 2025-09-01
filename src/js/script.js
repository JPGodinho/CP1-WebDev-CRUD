let jogadoras = [
    {
        "nome": "Andressa Alves",
        "posicao": "Meio-campo",
        "clube": "Corinthians",
        "foto": "andressa.jpg",
        "gols": 15,
        "assistencias": 10,
        "jogos": 28,
        "favorita": false
    },
    {
        "nome": "Dayana Rodríguez",
        "posicao": "Meio-campo",
        "clube": "Corinthians",
        "foto": "dayana.png",
        "gols": 5,
        "assistencias": 12,
        "jogos": 30,
        "favorita": false
    },
    {
        "nome": "Mariza",
        "posicao": "Zagueira",
        "clube": "Corinthians",
        "foto": "mariza.png",
        "gols": 2,
        "assistencias": 1,
        "jogos": 32,
        "favorita": false
    },
    {
        "nome": "Thaís Regina",
        "posicao": "Zagueira",
        "clube": "Corinthians",
        "foto": "thais.png",
        "gols": 1,
        "assistencias": 2,
        "jogos": 25,
        "favorita": false
    },
    {
        "nome": "Letícia Teles",
        "posicao": "Zagueira",
        "clube": "Corinthians",
        "foto": "leticia.png",
        "gols": 0,
        "assistencias": 0,
        "jogos": 18,
        "favorita": false
    }
]

window.onload = function() {
    carregarPosts();
    displayPosts();

    document.querySelector('#postJogadoras').addEventListener('submit', addJogadoras);
};

function displayPosts() {
    const postCadastradas = document.getElementById('postCadastradas');
    postCadastradas.innerHTML = '';

    jogadoras.forEach((pegaPost, index) => {
            const postElement = document.createElement('div');
            postElement.classList.add('card-post');

            let fotoSrc = '';
                if (pegaPost.foto) {
                    if (pegaPost.foto.startsWith('data:image')) {
                        fotoSrc = pegaPost.foto;
                    } else {
                        fotoSrc = `src/img/${pegaPost.foto}`;
                    }
                }
  
            postElement.innerHTML = `
                <p>Nome: ${pegaPost.nome}</p>
                ${fotoSrc ? `<img src="${fotoSrc}" 
                alt="${pegaPost.nome}" style="max-width:200px; max-height:200px; border-radius: 10%;">` : ''}

                <p><em>Posição: ${pegaPost.posicao}</em></p> <p><em>Gols: ${pegaPost.gols}</em></p> <p><em>Assistências: ${pegaPost.assistencias}</em></p>
                <p><em>Clube: ${pegaPost.clube}</em></p> <p><em>Jogos: ${pegaPost.jogos}</em></p>
                <p>Favorita: ${pegaPost.favorita ? 'Sim' : 'Não'}</p>
                <button data-action="Editar" data-index="${index}"><i class="fa-solid fa-pen-to-square"></i> Editar</button>
                <button data-action="Apagar" data-index="${index}"><i class="fa-solid fa-eraser"></i> Apagar</button>
                <hr style="margin:30px;">`;
               
            postCadastradas.append(postElement);
        });
}

function carregarPosts(){
    const postGuardados = localStorage.getItem("jogadoras")
    if(postGuardados){
        jogadoras = JSON.parse(postGuardados)
    }
}

function addJogadoras(event){
    event.preventDefault();

    const postNome = document.getElementById('postNome').value.trim();
    const postPosicao = document.getElementById('postPosicao').value;
    const postImage = document.getElementById('postImage').files[0]
    const postClube = document.getElementById('postClube').value.trim();
    const postGol = document.getElementById('postGol').value.trim();
    const postAssist = document.getElementById('postAssist').value.trim();
    const postJogos = document.getElementById('postJogos').value.trim();
    const postFavorita = document.getElementById('postFavorita')?.checked || false;
    const postDate = new Date().toLocaleString();

    if(!postNome || !postPosicao || !postClube || !postGol || !postAssist || !postJogos){
        mostrarMensagem("Por favor, preencha todos os campos obrigatórios.", "erro");
        return;
    }

    if (postImage) {
        const reader = new FileReader();
        reader.onload = function (e) {
            salvarJogadora(e.target.result);
        };
        reader.readAsDataURL(postImage);
    } else {
        salvarJogadora(null);
    }

    function salvarJogadora(fotoBase64) {
        const novaJogadora = {
            nome: postNome,
            clube: postClube,
            foto: fotoBase64,
            gols: postGol,
            assistencias: postAssist,
            jogos: postJogos,
            posicao: postPosicao,
            favorita: postFavorita,
            date: postDate
        };

        jogadoras.unshift(novaJogadora);
        salvarPosts();
        document.querySelector('#postJogadoras').reset();
        displayPosts();
        mostrarMensagem("Jogadora cadastrada com sucesso!", "sucesso");
    }
}

function mostrarMensagem(texto, tipo){
    const mensagem = document.getElementById('mensagem');
    mensagem.textContent = texto;
    mensagem.className = tipo; 
    mensagem.style.display = 'block';

    setTimeout(() => {
        mensagem.style.display = 'none';
    }, 3000);
}

function salvarPosts(){
    localStorage.setItem("jogadoras", JSON.stringify(jogadoras))
}