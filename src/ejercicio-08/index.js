// Métodos Setters

const print = console.log;

class producto {
    constructor(nombre,precio,cantidad) {
        this.n = nombre
        this.p = precio
        this.c = cantidad
    }

    get cantidad(){
        return this.c
    }

    set cantidad(nuevaCantidad){
        this.c = nuevaCantidad
    }

    get precioTotal(){
        return this.p * this.c
    }
}

const product = new producto ("Sombrero", 19.99, 2)

print("Precio total: ", product.precioTotal)

product.cantidad = 5
print ("Precio actualizado, para " + product.cantidad +  " unidades: ", product.precioTotal)

// Observación: Un método no es necesario concatenarlo con el signo +. js lo reconoce separándolo con una coma.
