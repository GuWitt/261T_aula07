export class Livro{
    constructor(
        public id: number,
        public nome: string,
        public valor: number,
        public estoque: number
    ){}

    aumentarEstoque(etq: number){
        this.estoque += etq
    };

    removerEstoque(etq: number){
        this.estoque -= etq
    };

    consultarEstoque(){
        return this.estoque
    };

    consultarValor(){
        return this.valor
    };
}