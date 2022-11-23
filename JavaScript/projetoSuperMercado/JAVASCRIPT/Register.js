
const form = document.querySelector('form');
const input = document.querySelectorAll("#form input")
const products = []

form.addEventListener('submit', e => {
    e.preventDefault();
    const obj = {}

    obj.nameProduct = input[0].value;
    obj.codeProduct = input[1].value;
    obj.priceProduct = input[2].value;
    obj.quantityProduct = input[3].value;
    products.push(obj);
    
    const jsonProducts = JSON.stringify(products)

    localStorage.setItem("products", jsonProducts);

    console.log(obj);
   
})

