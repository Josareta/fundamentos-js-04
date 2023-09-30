// Herencia con "this" en Clases
// Creando clase
const print = console.log
class Person {
    constructor(name, age) {
      this.nombre = name
      this.edad = age
    }
// Creando método
    introduce() {
        print(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`)
      }
  }
// Creando heredero
  class Student extends Person {
    constructor(name, age, grade) {
      super(name, age)
      this.grade = grade
    }
// Creando método a heredero
    introduce() {
      print(`Hola, soy ${this.nombre}, tengo ${this.edad} años y estoy en el grado ${this.grade}.`)
    }
  }
// Creando instancia
const student = new Student ("Bob", 19, 12)
// Llamando al método
student.introduce()