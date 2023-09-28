// Creación de Constructor de objetos

function Product(name,price,quantity) {
    this.nombre = name
    this.precio = price
    this.cantidad = quantity
}


const product1 = new Product('Laptop', 999.99, 5)
const product2 = new Product('Phone', 599.99, 10)

const print = console.log
print(product1)
print(product2)