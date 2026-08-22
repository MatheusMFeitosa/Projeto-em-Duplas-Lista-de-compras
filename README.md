# Mercadão Brothers

Um sistema simples de catálogo de produtos e carrinho de compras feito puramente com HTML, CSS e JavaScript. 

O projeto simula uma loja virtual onde o usuário pode visualizar produtos divididos por categorias, filtrar os itens, escolher quantidades e gerenciar o seu carrinho de compras de forma dinâmica. Tudo isso salvando os dados no navegador, para que o usuário não perca o carrinho ao mudar de página.

## Funcionalidades

- **Catálogo Dinâmico:** Os produtos são gerados na tela via JavaScript e agrupados automaticamente por categoria (Alimentos, Limpeza, Brinquedos, etc.).
- **Filtro de Categorias:** Um menu lateral permite filtrar os produtos exibidos na tela de forma rápida.
- **Adição Customizada:** É possível digitar a quantidade exata do produto antes de adicioná-lo ao carrinho.
- **Carrinho Inteligente:** Uma página dedicada ao carrinho que lista os itens escolhidos, permite excluir produtos, exibe o valor total calculado em tempo real e possui a opção de finalizar a compra.
- **Persistência de Dados:** Uso do `localStorage` para simular um banco de dados local. Os produtos adicionados continuam no carrinho mesmo se você fechar a aba ou recarregar a página.

## Tecnologias Utilizadas

- **HTML5:** Estrutura semântica das páginas.
- **CSS3:** Estilização responsiva, animações de entrada e layout com Flexbox.
- **JavaScript:** Toda a lógica de manipulação do DOM, cálculos e uso do LocalStorage.
- **FontAwesome:** Biblioteca utilizada para os ícones da interface.
- **Google Fonts:** Fonte "Poppins" para a tipografia do site.

## Estrutura básica do projeto

- `index.html` -> Página principal com a vitrine de produtos e filtros.
- `carrinho.html` -> Página de checkout listando os itens e o total.
- `css/style.css` -> Arquivo único contendo todo o estilo visual da loja.
- `scripts/index.js` -> Lógica da página principal (renderização e filtros).
- `scripts/carrinho.js` -> Lógica exclusiva da página do carrinho (cálculos, deleção e finalização).
- `img/` -> Pasta onde ficam as imagens dos produtos.
