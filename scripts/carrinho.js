const botaoInicio = document.querySelector(".fa-house");

console.log(botaoInicio)

botaoInicio.addEventListener("click", () => {
    window.location.href = "index.html"
})

function deletarItem(nomeProduto) {
    let valor = localStorage.getItem(nomeProduto)
    let listaOriginal = JSON.parse(valor)

    listaOriginal["quantidade"] = 0

    localStorage.setItem(listaOriginal["nomeProduto"], JSON.stringify(listaOriginal))

    mostrarProdutosTela()
}

function mostrarProdutosTela(){
    for (let i = 0; i < localStorage.length; i++) {
        let listaOriginal = JSON.parse(localStorage.getItem(localStorage.key(i)))

        
        if(listaOriginal["quantidade"] > 0){
            
            console.log(listaOriginal["nomeProduto"])

        }
        
    }
}


mostrarProdutosTela()