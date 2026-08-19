const botaoCarrinho = document.querySelector(".fa-cart-shopping");

botaoCarrinho.addEventListener("click", ()=>{
    window.location.href = "carrinho.html"
})

function adicionarCarrinho (nome, preco){

    // utilizando um dicionario, para guardar os valores (nome, preco) e utilizando do metodo do JASON.stringify 
    // para transformar em String e guardando na variavel nome para salvar em objetos diferentes
    let lista = {"nomeProduto": nome, "precoProduto": preco}
    localStorage.setItem(nome, JSON.stringify(lista))
}


// function verifica