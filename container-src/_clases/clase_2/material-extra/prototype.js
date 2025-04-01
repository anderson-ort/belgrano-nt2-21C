// Cuando accedemos a una propiedad o método en un objeto:

// JavaScript busca primero en el propio objeto.

// Si no lo encuentra, busca en su prototype (su prototipo).

// Si tampoco está allí, sigue subiendo en la cadena de prototipos (Prototype Chain) hasta Object.prototype.

// Si no lo encuentra en ningún nivel, devuelve undefined.

// ✔ prototype permite compartir métodos entre instancias sin duplicarlos.
// ✔ Si un método no está en un objeto, JavaScript lo busca en su prototype.
// ✔ Se puede usar Object.create() para heredar manualmente o class para una sintaxis más moderna.
// ✔ __proto__ es el enlace interno que conecta un objeto con su prototipo.


const obj = {
    nombre: "Juan"
};

console.log(obj.nombre);  // ✅ "Juan" (está en el objeto)
console.log(obj.toString()); // ✅ Método heredado de Object.prototype
console.log(obj.edad);  // ❌ undefined (no existe en la cadena)


console.log(obj.__proto__); // ✅ Muestra Object.prototype
console.log(obj.__proto__.__proto__); // ✅ null (fin de la cadena)
