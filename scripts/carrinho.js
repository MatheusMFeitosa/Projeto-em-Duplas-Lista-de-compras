const botaoInicio = document.querySelector(".fa-house");

botaoInicio.addEventListener("click", () => {
    window.location.href = "index.html";
});

function mostrarProdutosTela() {
    const listaProdutosCarrinho = document.querySelector(".lista-produtos-carrinho");
    const botaoFinalizarCompra = document.querySelector(".finalizar-compra");

    listaProdutosCarrinho.replaceChildren();

    for (let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i);
        const listaOriginal = JSON.parse(localStorage.getItem(chave));

        if (listaOriginal["quantidade"] > 0) {
            adicionarElementosHtml(listaOriginal);
        }
    }

    botaoFinalizarCompra.addEventListener("click", () => {
        let carrinhoVazio = true;
        for (let i = 0; i < localStorage.length; i++) {
            const chave = localStorage.key(i);
            const produto = JSON.parse(localStorage.getItem(chave));

            if (produto["quantidade"] > 0) {
                carrinhoVazio = false;
                break;
            }
        }
        if (carrinhoVazio) {
            alert("Seu carrinho está vazio! Adicione produtos antes de finalizar a compra.");
            return;
        }
        alert("Compra finalizada!");

        for (let i = 0; i < localStorage.length; i++) {
            const chave = localStorage.key(i);
            const produto = JSON.parse(localStorage.getItem(chave));

            if (produto["quantidade"] > 0) {
                produto["quantidade"] = 0;
                localStorage.setItem(chave, JSON.stringify(produto));
            }
        }
        mostrarProdutosTela();
    });

    mostrarMensagemCarrinhoVazio();
    atualizarTotalCarrinho();
}

function atualizarTotalCarrinho() {
    let total = 0;

    for (let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i);
        const produto = JSON.parse(localStorage.getItem(chave));

        if (produto["quantidade"] > 0) {
            total += produto["precoProduto"] * produto["quantidade"];
        }
    }

    const elementoTotal = document.getElementById("valor-total");
    elementoTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
}

function adicionarElementosHtml(listaOriginal){
    const listaProdutosCarrinho = document.querySelector(".lista-produtos-carrinho");

    const liProduto = document.createElement("li");
    const divProduto = document.createElement("div");
    const imgProduto = document.createElement("img");
    const h4Produto = document.createElement("h4");
    const precoProduto = document.createElement("p");
    const quantidadeProduto = document.createElement("p");
    const spanQuantidadeProduto = document.createElement("span");
    const divAcoesCarrinho = document.createElement("div");
    const buttonDeletarItem = document.createElement("button");
    const iconeDeletar = document.createElement("i");

    divProduto.classList.add("info-produto");
    divAcoesCarrinho.classList.add("acoes-carrinho");
    iconeDeletar.classList.add("fa-solid", "fa-trash");
    buttonDeletarItem.classList.add("botao-deletar-item");

    imgProduto.src = `../img/${listaOriginal["nomeProduto"]}.jpg`;
    h4Produto.textContent = listaOriginal["nomeProduto"];

    precoProduto.textContent = `R$ ${listaOriginal["precoProduto"].toFixed(2)}`;

    spanQuantidadeProduto.textContent = listaOriginal["quantidade"];
    quantidadeProduto.textContent = "Quantidade: ";

    quantidadeProduto.append(spanQuantidadeProduto);

    buttonDeletarItem.addEventListener("click", () => {
        deletarItem(listaOriginal["nomeProduto"]);
    });

    listaProdutosCarrinho.append(liProduto);

    liProduto.append(divProduto);
    divProduto.append(imgProduto);
    divProduto.append(h4Produto);
    divProduto.append(precoProduto);
    divProduto.append(quantidadeProduto);

    liProduto.append(divAcoesCarrinho);
    divAcoesCarrinho.append(buttonDeletarItem);
    buttonDeletarItem.append(iconeDeletar);
}

function deletarItem(nomeProduto) {
    const valor = localStorage.getItem(nomeProduto);

    if (!valor) {
        return;
    }

    const listaOriginal = JSON.parse(valor);
    listaOriginal["quantidade"] = 0;

    localStorage.setItem(
        listaOriginal["nomeProduto"],
        JSON.stringify(listaOriginal)
    );

    mostrarProdutosTela();
}

function mostrarMensagemCarrinhoVazio(){
    const listaProdutosCarrinho = document.querySelector(".lista-produtos-carrinho");
    const mensagemExistente = document.querySelector(".mensagem-carrinho-vazio");

    if (listaProdutosCarrinho.children.length === 0) {
        if (!mensagemExistente) {
            const liMensagemVazia = document.createElement("li");
            const h4MensagemVazia = document.createElement("h4");

            liMensagemVazia.classList.add("mensagem-carrinho-vazio");
            liMensagemVazia.style.justifyContent = "center";

            h4MensagemVazia.textContent = "Nenhum item adicionado ao carrinho no momento...";

            liMensagemVazia.append(h4MensagemVazia);
            listaProdutosCarrinho.append(liMensagemVazia);
        }
    } else {
        if (mensagemExistente) {
            mensagemExistente.remove();
        }
    }
}

mostrarProdutosTela();