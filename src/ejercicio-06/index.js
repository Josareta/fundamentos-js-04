// Herencia de clases

class rectangulo {
    constructor(ancho, alto){
        this.ancho = ancho
        this.alto = alto
    }
    calculaArea(){
        return this.ancho * this.alto
    }
}
class cuadrado extends rectangulo{
    constructor(caraLarga) {
        super(caraLarga, caraLarga)
    }
}

const Cuadrado = new cuadrado(9)

const print = console.log

print("Area del cuadrado:",Cuadrado.calculaArea())