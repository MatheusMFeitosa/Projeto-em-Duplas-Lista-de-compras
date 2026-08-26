const LISTA_PRODUTOS = [
    { nomeProduto: "Tomate", precoProduto: 3.50, categoria: "alimentos", quantidade: 0 },
    { nomeProduto: "Feijao", precoProduto: 10.00, categoria: "alimentos", quantidade: 0 },
    { nomeProduto: "Farinha", precoProduto: 5.00, categoria: "alimentos", quantidade: 0 },
    { nomeProduto: "Arroz", precoProduto: 5.00, categoria: "alimentos", quantidade: 0 },
    { nomeProduto: "Detergente", precoProduto: 2.50, categoria: "limpeza", quantidade: 0 },
    { nomeProduto: "Sabao", precoProduto: 8.00, categoria: "limpeza", quantidade: 0 }
];

const botaoCarrinho = document.querySelector(".fa-cart-shopping");

botaoCarrinho.addEventListener("click", () => {
    window.location.href = "carrinho.html"
});

function inicializarProdutos() {
    for (let i = 0; i < LISTA_PRODUTOS.length; i++) {
        let nomeDoProduto = LISTA_PRODUTOS[i].nomeProduto;

        if (localStorage.getItem(nomeDoProduto) === null) {
            localStorage.setItem(nomeDoProduto, JSON.stringify(LISTA_PRODUTOS[i]));
        }
    }
}

function adicionarQuantidadeProduto(nomeProduto) {
    let inputQuantidade = document.getElementById(nomeProduto);

    if (inputQuantidade.value === "" || inputQuantidade.value <= 0) {
        alert("Por favor, digite uma quantidade válida.");
        return;
    }

    let valor = localStorage.getItem(nomeProduto);

    if (valor) {
        let listaOriginal = JSON.parse(valor);

        listaOriginal["quantidade"] = parseInt(inputQuantidade.value);

        localStorage.setItem(listaOriginal["nomeProduto"], JSON.stringify(listaOriginal));

        alert(`${nomeProduto} adicionado ao carrinho!`);
    }
}

function adicionarQuantidadeProduto(nomeProduto) {
    let inputQuantidade = document.getElementById(nomeProduto);
    if (inputQuantidade.value === "" || inputQuantidade.value <= 0) {
        alert("Por favor, digite uma quantidade válida.");
        return;
    }

    let valor = localStorage.getItem(nomeProduto);

    if (valor) {
        let listaOriginal = JSON.parse(valor);

        listaOriginal["quantidade"] = parseInt(inputQuantidade.value);

        localStorage.setItem(listaOriginal["nomeProduto"], JSON.stringify(listaOriginal));

        alert(`${nomeProduto} adicionado ao carrinho!`);
        inputQuantidade.value = "";
    }
}

function mostrarProdutosTela() {
    const main = document.querySelector("main");
    main.replaceChildren();

    let categorias = [];
    for (let i = 0; i < LISTA_PRODUTOS.length; i++) {
        let categoriaAtual = LISTA_PRODUTOS[i].categoria;
        if (!categorias.includes(categoriaAtual)) {
            categorias.push(categoriaAtual);
        }
    }

    for (let i = 0; i < categorias.length; i++) {
        let categoria = categorias[i];

        const secaoCategoria = document.createElement("section");
        const tituloCategoria = document.createElement("h2");
        const divListaProdutos = document.createElement("div");

        secaoCategoria.classList.add("conteiner-categoria");
        secaoCategoria.dataset.categoria = categoria;
        divListaProdutos.classList.add("conteiner-produtos");

        tituloCategoria.textContent = categoria.charAt(0).toUpperCase() + categoria.slice(1);

        secaoCategoria.append(tituloCategoria);
        secaoCategoria.append(divListaProdutos);

        for (let j = 0; j < LISTA_PRODUTOS.length; j++) {
            if (LISTA_PRODUTOS[j].categoria === categoria) {
                adicionarProdutoHTML(LISTA_PRODUTOS[j], divListaProdutos);
            }
        }

        main.append(secaoCategoria);
    }
}

function adicionarProdutoHTML(produto, containerDestino) {
    const divProduto = document.createElement("div");
    const imgProduto = document.createElement("img");
    const h4Produto = document.createElement("h4");
    const descricaoProduto = document.createElement("p");
    const divCompra = document.createElement("div");
    const precoProduto = document.createElement("p");
    const inputQuantidade = document.createElement("input");
    const botaoAdicionar = document.createElement("button");
    const iconeCarrinho = document.createElement("i");

    divProduto.classList.add("produto");
    divProduto.classList.add(produto.categoria);
    divCompra.classList.add("compra");
    inputQuantidade.classList.add("inputQuantidade");
    botaoAdicionar.classList.add("botaoAdicionarCarrinho");
    iconeCarrinho.classList.add("fa-solid", "fa-cart-plus");

    imgProduto.src = `../img/${produto.nomeProduto}.jpg`;
    imgProduto.alt = produto.nomeProduto;

    h4Produto.classList.add("nomeProduto");
    h4Produto.textContent = produto.nomeProduto;

    descricaoProduto.textContent = "Teste Descrição";

    precoProduto.textContent = `R$ ${produto.precoProduto.toFixed(2)}`;

    inputQuantidade.type = "number";
    inputQuantidade.id = produto.nomeProduto;
    inputQuantidade.placeholder = "Qtd";
    inputQuantidade.min = "1";
    inputQuantidade.max = "10"
    inputQuantidade.required = true;

    botaoAdicionar.classList.add("botaoAdicionarCarrinho");
    botaoAdicionar.textContent = " Adicionar";
    botaoAdicionar.addEventListener("click", () => {
        adicionarQuantidadeProduto(produto.nomeProduto);
    });

    containerDestino.append(divProduto);
    divProduto.append(imgProduto);
    divProduto.append(h4Produto);
    divProduto.append(descricaoProduto);
    divProduto.append(divCompra);
    divCompra.append(precoProduto);
    divCompra.append(inputQuantidade);
    divCompra.append(botaoAdicionar);
    botaoAdicionar.prepend(iconeCarrinho);
}

function filtrarProdutos() {
    const radioSelecionado = document.querySelector('input[name="filtros"]:checked');
    if (!radioSelecionado) return;

    const categoriaSelecionada = radioSelecionado.value;
    const secoes = document.querySelectorAll(".conteiner-categoria");

    secoes.forEach((secao) => {
        if (secao.dataset.categoria === categoriaSelecionada) {
            secao.style.display = "flex";
        } else {
            secao.style.display = "none";
        }
    });
}

function removerFiltros() {
    const radios = document.querySelectorAll('input[name="filtros"]');
    radios.forEach((radio) => radio.checked = false);

    const secoes = document.querySelectorAll(".conteiner-categoria");
    secoes.forEach((secao) => secao.style.display = "flex");
}

const botaoAlternarMenuLateral = document.querySelector("#botao_menu");
const menuLateral = document.querySelector(".menu-lateral");

function iniciarMenuLateralFechado(){
    menuLateral.classList.toggle("fechado");

    botaoAlternarMenuLateral.classList.remove("fa-xmark");
    botaoAlternarMenuLateral.classList.add("fa-sort-down");
}

botaoAlternarMenuLateral.addEventListener("click", ()=>{
    menuLateral.classList.toggle("fechado");

    if(menuLateral.classList.contains("fechado")){
        botaoAlternarMenuLateral.classList.remove("fa-xmark");
        botaoAlternarMenuLateral.classList.add("fa-sort-down");
    }else {
        botaoAlternarMenuLateral.classList.remove("fa-sort-down");
        botaoAlternarMenuLateral.classList.add("fa-xmark");
    }
});

iniciarMenuLateralFechado();
inicializarProdutos();
mostrarProdutosTela();