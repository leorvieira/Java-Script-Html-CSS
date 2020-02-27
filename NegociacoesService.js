
class NegociacaoService {

    constructor(){
        
        this._http = new HttpService();

    }
        
    montaEndPoint(opcao) {

        var endPointAux1 = "http://localhost:3000/negociacoes/";
        var endPoint = endPointAux1.concat(opcao);
        return endPoint;
    }
    
    obterNegociacoes(opcao) {
    
        return new Promise ( ( resolve , reject ) => {
        this._http.get(this.montaEndPoint(opcao)).then 
                ( negociacoes => {
                    resolve( negociacoes.map(objeto => new Negociacao ( new Date (objeto.data), objeto.quantidade, objeto.valor))); 
                    console.log("Negociacoes importadas com sucesso.");
                    /*   this._mensagem.texto = 'Negociações importadas com sucesso.' ; 
                    this._negociacoesView.update( this._listaNegociacoes);
                    this._mensagemView.update( this._mensagem); */
                }).catch (
                    erro => { console.error(erro)
                    reject('Nao foi possivel obter as negociacoes');
                    });
                /*    this._mensagem.texto = 'Não foi possível obter as negociações.' ; */
                });
            }

    obterNegociacoesDaSemana() {

        return new Promise ( ( resolve , reject ) => {
                this._http.get('http://localhost:3000/negociacoes/semana').then 
                    ( negociacoes => {
                    resolve( negociacoes.map(objeto => new Negociacao ( new Date (objeto.data), objeto.quantidade, objeto.valor))); 
                    console.log("Negociacoes importadas com sucesso.");
                                /*   this._mensagem.texto = 'Negociações importadas com sucesso.' ; 
                                this._negociacoesView.update( this._listaNegociacoes);
                                this._mensagemView.update( this._mensagem); */
                    }).catch (
                    erro => { console.error(erro)
                    reject('Nao foi possivel obter as negociacoes');
                    });
                            /*    this._mensagem.texto = 'Não foi possível obter as negociações.' ; */
        });
        
    }

    obterNegociacoesAnterior() {

        return new Promise ( ( resolve , reject ) => {
            this._http.get('http://localhost:3000/negociacoes/anterior').then 
                    ( negociacoes => {
                        resolve( negociacoes.map(objeto => new Negociacao ( new Date (objeto.data), objeto.quantidade, objeto.valor))); 
                        console.log("Negociacoes importadas com sucesso.");
                        /*   this._mensagem.texto = 'Negociações importadas com sucesso.' ; 
                        this._negociacoesView.update( this._listaNegociacoes);
                        this._mensagemView.update( this._mensagem); */
                    }).catch (
                        erro => { console.error(erro)
                        reject('Nao foi possivel obter as negociacoes');
                        });
                    /*    this._mensagem.texto = 'Não foi possível obter as negociações.' ; */
                    });

    }

    obterNegociacoesRetrasada() {
       
        return new Promise ( ( resolve , reject ) => {
            this._http.get('http://localhost:3000/negociacoes/retrasada').then 
                    ( negociacoes => {
                        resolve( negociacoes.map(objeto => new Negociacao ( new Date (objeto.data), objeto.quantidade, objeto.valor))); 
                        console.log("Negociacoes importadas com sucesso.");
                        /*   this._mensagem.texto = 'Negociações importadas com sucesso.' ; 
                        this._negociacoesView.update( this._listaNegociacoes);
                        this._mensagemView.update( this._mensagem); */
                    }).catch (
                        erro => { console.error(erro)
                        reject('Nao foi possivel obter as negociacoes');
                        });
                    /*    this._mensagem.texto = 'Não foi possível obter as negociações.' ; */
                    });

    }
}