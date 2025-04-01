import crypto from "crypto"

function Persona(nombre) {
    this.nombre = nombre
    this.id = crypto.randomUUID().toString()
}

Persona.prototype.getValues = function () {
    console.table(this);
}

const juanUsers = new Persona("Juan");
juanUsers.getValues(); // ✅ Muestra la tabla con los valores de la instancia


function Estudiante(nombre, curso) {
    Persona.call(this, nombre)
    this.curso = (curso)
}

Estudiante.prototype = Object.create(Persona.prototype);
Estudiante.prototype.constructor = Estudiante;


Estudiante.prototype.badgeDisplay = function () {
    console.warn("Metodo inherente")
    console.table(this)
}

const franco = new Estudiante("Franco", "Python Advanced")

console.table(franco.badgeDisplay())
console.table(franco.getValues())

//Syntatic Sugar


// Clase Padre
class PersonaBase {
    constructor(nombre) {
        this.nombre = nombre;
        this.id = crypto.randomUUID().toString();
    }

    getValues() {
        console.table(this);
    }
}

// Clase Hija
class EstudianteHerencia extends PersonaBase {
    constructor(nombre, curso) {
        super(nombre); // Llama al constructor de Persona
        this.curso = curso;
    }

    badgeDisplay() {
        console.warn("Metodo inherente");
        console.table(this);
    }
}

// Crear instancias y probar métodos
const marceloUser = new PersonaBase("Marcelo");
marceloUser.getValues(); // ✅ Muestra la tabla con los valores de Juan

const roger = new EstudianteHerencia("Roger", "Ruby Advanced");
roger.badgeDisplay(); // ✅ Muestra la tabla con los valores de Franco
roger.getValues();    // ✅ Heredado de Persona
