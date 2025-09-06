# ⚽ Cadastro de Jogadoras de Futebol

## 📄 Descrição do Projeto

Este projeto é uma aplicação web front-end para o cadastro e gerenciamento de jogadoras de futebol. A aplicação permite ao usuário realizar operações de CRUD (Criar, Ler, Atualizar e Deletar) de forma simples e intuitiva. Todos os dados são salvos localmente no navegador utilizando `localStorage`, o que garante que as informações não sejam perdidas ao recarregar a página.

Este é um projeto focado em praticar e demonstrar habilidades de manipulação do DOM com JavaScript puro, além de boas práticas de desenvolvimento front-end.

## ✨ Funcionalidades

- **`[✅]` Cadastrar Novas Jogadoras:** Adicionar jogadoras através de um formulário completo, incluindo nome, posição, clube, estatísticas (gols, assistências, jogos) e uma imagem.
- **`[✅]` Visualizar Lista de Jogadoras:** Todas as jogadoras cadastradas são exibidas em formato de cards, mostrando suas informações e foto.
- **`[✅]` Editar Jogadoras:** Alterar qualquer informação de uma jogadora já cadastrada. O formulário é preenchido automaticamente com os dados atuais para facilitar a edição.
- **`[✅]` Apagar Jogadoras:** Remover uma jogadora da lista de forma permanente (após uma janela de confirmação).
- **`[✅]` Persistência de Dados:** As informações são salvas no `localStorage` do navegador, mantendo os dados mesmo após fechar a aba ou o navegador.
- **`[✅]` Favoritar Jogadoras:** Marcar ou desmarcar uma jogadora como favorita com um clique em um ícone de estrela no card.
- **`[✅]` Busca Dinâmica:** Um campo de busca permite filtrar as jogadoras em tempo real, buscando por **nome** ou **posição**.
- **`[✅]` Feedback ao Usuário:** Mensagens de sucesso ou erro são exibidas para confirmar as ações realizadas (cadastro, edição, remoção).

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica do conteúdo.
- **CSS3:** Estilização dos componentes, layout e responsividade (básica).
- **JavaScript:** Toda a lógica da aplicação, incluindo:
  - Manipulação do DOM (criação e atualização de elementos).
  - Gerenciamento de eventos (clicks, envio de formulário, digitação).
  - Lógica de CRUD.
  - Armazenamento de dados no `localStorage`.
- **Font Awesome:** Biblioteca de ícones utilizada para melhorar a interface do usuário (estrelas, canetas, lixeiras, etc.).

## 🚀 Como Rodar o Projeto

Este é um projeto puramente front-end e não requer instalação de dependências ou um servidor complexo.

1.  **Clone o repositório** (ou simplesmente baixe os arquivos para o seu computador):
    ```bash
    git clone https://github.com/JPGodinho/CP1-WebDev-CRUD.git
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd CP1-WebDev-CRUD
    ```

3.  **Abra o arquivo `index.html`** no seu navegador de preferência (Google Chrome, Firefox, etc.).

E pronto! A aplicação estará funcionando.

> **Dica:** Para uma melhor experiência de desenvolvimento, você pode usar a extensão **Live Server** no Visual Studio Code, que atualiza a página automaticamente sempre que você salva uma alteração nos arquivos.

## 📁 Estrutura de Arquivos

/projeto-cadastro-jogadoras
|
|-- 📄 index.html         # Arquivo principal da aplicação
|-- 📄 README.md          # Documentação do projeto
|
|-- 📁 src/
    |-- 📁 css/
    |   |-- 📄 style.css  # Folha de estilos
    |
    |-- 📁 js/
    |   |-- 📄 script.js # Lógica principal em JavaScript
    |
    |-- 📁 img/
        |-- 🖼️ andressa.jpg
        |-- 🖼️ dayana.png
        |-- ... (outras imagens das jogadoras)

## Equipe
* Vítor Silva Borsato RM:561805
* João Pedro Godinho Passiani RM:561602
* Gabriel Molinari Droppa RM:562082