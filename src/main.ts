import { Controller } from "./controller/controller";
import { View } from "./view/view";

const ctrl = new Controller();
const view = new View();

view.exibirTitulo();
const cliente = ctrl.cadastrarCliente(1, "Gustavo Witt", "17-08-2026", "+55 (051) 98123-3214", "gustavo@senacrs.edu");
const livro = ctrl.cadastrarLivro(1, "Harry Potter- o Prisioneiro de Askaban", 65, 3);
const venda = ctrl.registrarVenda(1, cliente, livro, 65, "17-08-2026", 1);

view.exibirCliente(cliente);
ctrl.atualizarEstoque();
view.exibirLivro(livro);
view.exibirVenda(venda);
