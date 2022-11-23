const list = document.querySelector('#list')

const products = localStorage.getItem('products')

const product = JSON.parse(products)

list.innerHTML = product.map(product =>{
    return (
        `<li key="${product.codeProduct}">
        <span class="listBox">Nome do produto: ${product.nameProduct}</span><br/>
        <span class="listBox">Codigo do produto: ${product.codeProduct}</span><br/>
        <span class="listBox">Preço do produto: ${product.priceProduct}</span><br/>
        <span class="listBox">Quantidade deste Produto: ${product.quantityProduct}</span><br/>
        
        </li>`
    )
})