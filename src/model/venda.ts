import { Cliente } from "./cliente";
import { Livro } from "./livro";

export class Venda{
    constructor(
        public id: number,
        public cliente: Cliente,
        public livro: Livro,
        public valor: number,
        public data: string,
        public quantidade: number
    ){}

    atualizaEstoque(){
        this.livro.estoque -= this.quantidade
    };
}