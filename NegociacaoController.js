
class NegociacaoController {
    
    constructor () {

        let $ = document.querySelector.bind(document);
       
        this._inputData         = $('#data');
        this._inputQuantidade   = $('#quantidade');
        this._inputValor        = $('#valor');
       
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoesView')); 
        this._negociacoesView.update(this._listaNegociacoes);

        this._buttonView = new ButtonView($('#buttonView'));

    
    }

    verificaRadio() {

        if (document.getElementById("radioSemana").checked)
            this._opcaoRadio = "semana";

        if (document.getElementById("radioAnterior").checked)
            this._opcaoRadio = "anterior";
    
        if (document.getElementById("radioRetrasada").checked)
            this._opcaoRadio = "retrasada";

        console.log(this._opcaoRadio);
        return this._opcaoRadio;
    }


    apaga() {
        this._listaNegociacoes.esvazia();
        this._negociacoesView.update(this._listaNegociacoes);
        document.getElementById("radioSemana").checked = true;
     /*     this._mensagem.texto = 'Negociacoes apagadas com sucesso';
            this._mensagemView.update(this._mensagem);                      */
    }

    adiciona(event) {

        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);

        this._limpaFormulario(); 
    }

    _limpaFormulario() {
        this._inputData.value = '' ;
        this._inputQuantidade.value = 1 ;
        this._inputValor.value = 0.0 ;
        this._inputData.focus();
        }

    _criaNegociacao() {
        
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }    

    importaNegociacoes() {
        
        let service = new NegociacaoService();
        service.obterNegociacoes(this.verificaRadio()).then (
            negociacoes => {
                negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
                console.log("negociacoes da semana obtida com sucesso");
                this._negociacoesView.update(this._listaNegociacoes);
            })   
            .catch (erro => console.log(erro));

    };       


    importaTodasNegociacoes (){

        let service = new NegociacaoService();

        Promise.all( [
            service.obterNegociacoesDaSemana(), 
            service.obterNegociacoesAnterior(),
            service.obterNegociacoesRetrasada()
        ]
        ).then ( negociacoes => {
            negociacoes.reduce((arrayAchatado, array) => arrayAchatado.concat(array), [] )
            .forEach( negociacao => this._listaNegociacoes.adiciona(negociacao));
            console.log("Negociacoes importadas com sucesso");
            this._negociacoesView.update(this._listaNegociacoes);

        }).catch(erro => console.log(erro));
    }

}