const LISTA_PRODUTOS = [
    { nomeProduto: "Tomate", precoProduto: 3.50, categoria: "alimentos", quantidade: 0 },
    { nomeProduto: "Feijao", precoProduto: 10.00, categoria: "alimentos", quantidade: 0 },
    { nomeProduto: "Farinha", precoProduto: 5.00, categoria: "alimentos", quantidade: 0 },
    { nomeProduto: "Arroz", precoProduto: 5.00, categoria: "alimentos", quantidade: 0 }
];

const botaoCarrinho = document.querySelector(".fa-cart-shopping");

botaoCarrinho.addEventListener("click", () => {
    window.location.href = "carrinho.html"
})

// Inicializa todos os produtos a disposição simulando um banco de dados local
function inicializarProdutos() {
    if (localStorage.length == 0) {
        for (let i = 0; i < LISTA_PRODUTOS.length; i++) {
            localStorage.setItem(LISTA_PRODUTOS[i].nomeProduto, JSON.stringify(LISTA_PRODUTOS[i]))
        }
    }
}

// funcao que adiciona quantidade a um produto a partir de um input, tirando-o de texto para acessar a chave do dicionario e depois retransformo para adicionar 
// a nova linha
function adcionarQuantidadeProduto(nomeProduto) {
    let inputQuantidade = document.getElementById(nomeProduto)

    let valor = localStorage.getItem(nomeProduto)
    let listaOriginal = JSON.parse(valor)

    listaOriginal["quantidade"] = inputQuantidade.value

    localStorage.setItem(listaOriginal["nomeProduto"], JSON.stringify(listaOriginal))
}

function filtrarProdutos(){
    let inputRadioFiltro = document.getElementsByName("filtros")

    for (let i = 0; i < inputRadioFiltro.length; i++) {
        if(inputRadioFiltro[i].checked == true){
            let categoria = inputRadioFiltro[i].id
        }
    }

    
    //console.log(inputRadioFiltro)
}

let inputRadioFiltro = document.querySelectorAll(`#Alimentos`)
inputRadioFiltro[0].addEventListener('change', filtrarProdutos())

function removerFiltros(){
    let inputRadioFiltro = document.getElementsByName("filtros")

    for (let i = 0; i < inputRadioFiltro.length; i++) {
        inputRadioFiltro[i].checked = false
    }
}

removerFiltros()

inicializarProdutos()


//pegarFiltro()
