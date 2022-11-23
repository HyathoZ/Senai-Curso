const form = document.querySelector('form');
const input = document.querySelectorAll("#form input")

const products = localStorage.getItem('products')

const product = JSON.parse(products)

console.log(product)