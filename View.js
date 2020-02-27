class View {
    
    constructor(elemento) {

        this._elemento = elemento;
    }
    
    template() {
        
        throw new Error('O método template nao deve ser implementado');
    }
    
    update(model) {

        console.log(this._elemento);

        console.log(this.template(model));
        
        this._elemento.innerHTML = this.template(model);
    }
}