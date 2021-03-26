export default class Lancamento{
    constructor( tipo, valor, data, descricao ){
        this.tipo = tipo;
        this.valor = valor;
        this.data = data;
        this.descricao = descricao;
        this.id = new Date().getTime();
    }
}