class ButtonView extends View {
    constructor (elemento) {
        super(elemento) ; 
      }
    template(model) {
        return `
        <button onclick = "negociacaoController.importaNegociacoes()" class = "btn btn-primary text-center" type = "button">
            Importar Todas Negociações   
        </button>
        ` ;
    }

}