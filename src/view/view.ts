import { Livro } from "../model/livro";
import { Cliente } from "../model/cliente";
import { Venda } from "../model/venda";

export class View{
    exibirMensagem(mensagem: string){
        console.log(mensagem)
    };

    exibirTitulo(){
        console.log("==================================");
        console.log("   📚 Biblioteca");
        console.log("==================================");
    };

    exibirCliente(cliente: Cliente){
        console.log("--------CLIENTE--------");
        console.log(`Nome: ${cliente.nome}`);
        console.log(`CPF: ${cliente.cpf}`);
        console.log(`Telefone: ${cliente.telefone}`);
        console.log(`Email: ${cliente.email}`);
        console.log("==================================");
    };

    exibirLivro(livro: Livro){
        console.log("--------LIVRO--------");
        console.log(`Nome: ${livro.nome}`);
        console.log(`Valor: ${livro.valor}`);
        console.log(`Estoque: ${livro.estoque}`);
        console.log("==================================");
    };

    exibirVenda(venda: Venda){
        console.log("--------VENDA--------");
        console.log(`Cliente: ${venda.cliente.nome}`);
        console.log(`Livro: ${venda.livro.nome}`);
        console.log(`Valor: ${venda.valor}`);
        console.log(`Data: ${venda.data}`);
        console.log("==================================");
    };
}