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

let editIndex = null;

window.onload = function() {
    carregarPosts();
    displayJogadoras();

    document.querySelector('#postJogadoras').addEventListener('submit', addJogadoras);
    document.querySelector('#postCadastradas').addEventListener('click', handleClick);
};

function handleClick(event){
    const action = event.target.dataset.action;
    const index = event.target.dataset.index;

    if(action === "Apagar"){
        apagarCadastradas(index);
    }else if(action === "Editar"){
        editarPost(index);
    }else if (action === "Favoritar") {
        toggleFavorita(index);
    }
}

function toggleFavorita(index) {
    jogadoras[index].favorita = !jogadoras[index].favorita;
    
    salvarCadastradas();
    displayJogadoras();
}


function displayJogadoras() {
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
                    <i 
                        class="fa-star ${pegaPost.favorita ? 'fa-solid' : 'fa-regular'}" 
                        data-action="Favoritar" 
                        data-index="${index}"
                        title="${pegaPost.favorita ? 'Desfavoritar' : 'Favoritar'}"
                    ></i>
            
                    <p>Nome: ${pegaPost.nome}</p>
                    ${fotoSrc ? `<img src="${fotoSrc}" 
                    alt="${pegaPost.nome}" style="max-width:300px; max-height:200px; border-radius: 10%;">` : ''}

                    <p><em>Posição: ${pegaPost.posicao}</em></p> <p><em>Gols: ${pegaPost.gols}</em></p> <p><em>Assistências: ${pegaPost.assistencias}</em></p>
                    <p><em>Clube: ${pegaPost.clube}</em></p> <p><em>Jogos: ${pegaPost.jogos}</em></p>
            
                    <div class="card-actions">
                        <button data-action="Editar" data-index="${index}"><i class="fa-solid fa-pen-to-square"></i> Editar</button>
                        <button data-action="Apagar" data-index="${index}"><i class="fa-solid fa-eraser"></i> Apagar</button>
                    </div>
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
    const postImageInput = document.getElementById('postImage');
    const postImage = postImageInput.files[0];
    const postClube = document.getElementById('postClube').value.trim();
    const postGol = document.getElementById('postGol').value.trim();
    const postAssist = document.getElementById('postAssist').value.trim();
    const postJogos = document.getElementById('postJogos').value.trim();
    const postDate = new Date().toLocaleString();

    if(!postNome || !postPosicao || !postClube || !postGol || !postAssist || !postJogos){
        mostrarMensagem("Por favor, preencha todos os campos obrigatórios.", "erro");
        return;
    }

    const salvarJogadora = (fotoBase64) => {
        let fotoFinal = fotoBase64;
        if (editIndex !== null && !fotoBase64) {
            fotoFinal = jogadoras[editIndex].foto;
        }

        const jogadoraData = {
            nome: postNome,
            clube: postClube,
            foto: fotoFinal,
            gols: postGol,
            assistencias: postAssist,
            jogos: postJogos,
            posicao: postPosicao,
            favorita: false,
            date: postDate
        };

        if (editIndex !== null) {
            jogadoraData.favorita = jogadoras[editIndex].favorita;
            jogadoras[editIndex] = jogadoraData;
            mostrarMensagem("Jogadora atualizada com sucesso!", "sucesso");
            
            document.getElementById('btnSalvar').innerHTML = '<i class="fa-solid fa-bullhorn"></i> Cadastrar Jogadora';
            editIndex = null;
        } else {
            jogadoras.unshift(jogadoraData);
            mostrarMensagem("Jogadora cadastrada com sucesso!", "sucesso");
        }

        salvarCadastradas();
        document.querySelector('#postJogadoras').reset();
        displayJogadoras();
    };

    if (postImage) {
        const reader = new FileReader();
        reader.onload = function (e) {
            salvarJogadora(e.target.result);
        };
        reader.readAsDataURL(postImage);
    } else {
        salvarJogadora(null);
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


function editarPost(index){
    const jogadora = jogadoras[index];

    document.getElementById('postNome').value = jogadora.nome;
    document.getElementById('postClube').value = jogadora.clube;
    document.getElementById('postPosicao').value = jogadora.posicao;
    document.getElementById('postGol').value = jogadora.gols; 
    document.getElementById('postAssist').value = jogadora.assistencias;
    document.getElementById('postJogos').value = jogadora.jogos;
    document.getElementById('postImage').value = '';

    editIndex = index;

    document.getElementById('btnSalvar').innerHTML = '<i class="fa-solid fa-save"></i> Salvar Edição';
    
    window.scrollTo(0, 0);
}



function apagarCadastradas(index){
    const confirmar = confirm("Tem certeza que deseja apagar esta jogadora?");
    if(confirmar){
        jogadoras.splice(index, 1);
        salvarCadastradas();
        displayJogadoras(); 
        
        mostrarMensagem("Jogadora removida com sucesso!", "sucesso");
    }
}

function salvarCadastradas(){
    localStorage.setItem("jogadoras", JSON.stringify(jogadoras))
}