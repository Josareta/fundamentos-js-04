// Métodos getters
const print = console.log;

class producto {
    constructor(nombre,precio,cantidad) {
        this.n = nombre
        this.p = precio
        this.c = cantidad
    }

    get precioTotal(){
        return this.p * this.c
    }
}

const product = new producto ("Camisa", 25.99, 3)

print("Precio total: ", product.precioTotal)