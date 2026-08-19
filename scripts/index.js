const botaoCarrinho = document.querySelector(".fa-cart-shopping");

botaoCarrinho.addEventListener("click", ()=>{
    window.location.href = "carrinho.html"
})

function adicionarCarrinho (nome, preco){
    localStorage.setItem(nomeProduto, nome)
    localStorage.setItem(precoProduto, preco)    

    console.log(localStorage.getItem(nomeProduto), localStorage.getItem(precoProduto))
}

