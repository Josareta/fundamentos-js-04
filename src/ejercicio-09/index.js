// Uso de "this" en Clases

// Creando una clase
class Person {
    constructor(name, age) {
      this.nombre = name
      this.edad = age
    }
// Creando un método
    introduce() {
      console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`)
    }
  }
// Creando una instancia
  const person = new Person('Alice', 28)
//Llamando al método
  person.introduce()
  person.introduce()
  
