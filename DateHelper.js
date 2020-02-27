class DateHelper {

    Constructor() {
        throw new console.error("Esta classe nao pode ser instanciada");
    }

    static dataParaTexto(data){
        
        return `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}` 
    }

    static textoParaData(texto) {

        console.log(texto);

        if (! /\d{4}-\d{2}-\d{2}/ .test(texto))
        throw new Error ( 'Deve estar no formato aaaa-mm-dd' );
        return new Date (...texto.split( '-' ).map((item, indice) => item - 0 ));
        }

}