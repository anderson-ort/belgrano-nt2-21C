// Función que simula la carga de datos desde un servidor

const USERS = [
    { id: 1, nombre: "Ana García", email: "ana@ejemplo.com", rol: "admin" },
    { id: 2, nombre: "Carlos Rodríguez", email: "carlos@ejemplo.com", rol: "usuario" },
    { id: 3, nombre: "Elena Martínez", email: "elena@ejemplo.com", rol: "editor" },
    { id: 4, nombre: "David López", email: "david@ejemplo.com", rol: "usuario" },
    { id: 5, nombre: "Sofía Pérez", email: "sofia@ejemplo.com", rol: "admin" }
];


const RESPONSE_MS = 1_000

function cargarDatos() {
    const users = USERS

    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(users), RESPONSE_MS)
    });
}

async function ejecutarCarga() {
    console.log("Iniciando carga de datos...");

    try {
        let datos = await cargarDatos();
        console.log("Usuarios cargados:", { ...{ status: "Ok", }, datos });
    } catch (error) {
        console.error("Error:", { ...{ status: "Error" }, ...{ msg: error.message } });
    }
}

// Ejecutamos la función
ejecutarCarga();