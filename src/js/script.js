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
};

function displayPosts() {
    const postCadastradas = document.getElementById('postCadastradas');
    postCadastradas.innerHTML = '';

    jogadoras.forEach((pegaPost, index) => {
            const postElement = document.createElement('div');
            postElement.classList.add('card-post');
  
            postElement.innerHTML = `
                <p>Nome: ${pegaPost.nome}</p>
                ${pegaPost.foto ? `<img src="src/img/${pegaPost.foto}" alt="${pegaPost.nome}" style="width:150px; object-fit:cover; border-radius:8px;">` : ''}

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