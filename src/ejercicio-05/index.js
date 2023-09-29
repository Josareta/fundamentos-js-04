// Definiendo clase y métodos
class rectangulo {
    constructor(ancho, alto){
        this.ancho = ancho
        this.alto = alto
    }
    calculaArea(){
        return this.ancho * this.alto
    }
}

const Rectangulo = new rectangulo(5,20)

const print = console.log
print("Area: ", Rectangulo.calculaArea())
// Detalle a tener en cuenta: El nombre de la clase, no puede estar escrito igual que el nombre de la variable
