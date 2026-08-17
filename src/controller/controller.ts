import { Cliente } from "../model/cliente";
import { Livro } from "../model/livro";
import { Venda } from "../model/venda";

export class Controller{
   private cliente: Cliente | null = null;
   private livro: Livro | null = null;
   private venda: Venda | null = null;

   cadastrarCliente(
    id: number,
    nome: string,
    cpf: string,
    telefone: string,
    email: string
    ): Cliente{
    this.cliente = new Cliente(
           id,
           nome,    
           cpf,
           telefone,
           email
        );
       return this.cliente;
    };

    cadastrarLivro(
        id: number,
        nome: string,
        valor: number,
        estoque: number
    ): Livro {
        this.livro = new Livro(
            id,
            nome,
            valor, 
            estoque
        );
        return this.livro;
    };

    registrarVenda(
        id: number,
        cliente: Cliente,
        livro: Livro,
        valor: number,
        data: string,
        quantidade: number
    ): Venda{
        this.venda = new Venda(
            id,
            cliente,
            livro,
            valor,
            data,
            quantidade
        )
        return this.venda;
    };

    consultarEstoque(livro: Livro): number{
        return livro.consultarEstoque()
    };

    atualizarEstoque(){
        return this.venda?.atualizaEstoque()
    };
}