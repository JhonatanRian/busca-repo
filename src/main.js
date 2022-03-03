class App{
    // construtor
    construtor(){
        // lista de repositórios
        this.repositories = [];

        // form
        this.form = document.querySelector('form');

        // método para registrar eventos do formulario
        this.registerEvent();
    }

    registerEvent(){
        this.formulario.onsubmit = event => this.addRepository(event);
    }

    addRepository(event){
        // Evita que o formulário recarregue a página
        event.preventDefault();

        // Adiciona o repositório na lista
        this.repositories.push({
            name: '',
            description: '',
            avatar_url: '',
            link: '',
        });

        // Renderizar a Tela
    }

}