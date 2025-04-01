var nombre;   // Hoisting (declaración elevada)
console.log(nombre); // undefined (nombre ya existe, pero aún no tiene valor)
nombre = "Juan"; // Asignación en su lugar original
console.log(nombre); // "Juan"


console.table([
    { Elemento: "var", "Se eleva la declaración": "✅ Sí", "Se inicializa automáticamente": "⚠️ No (queda undefined)" },
    { Elemento: "let / const", "Se eleva la declaración": "✅ Sí", "Se inicializa automáticamente": "❌ No (TDZ: Error si se accede antes)" },
    { Elemento: "function (declaración)", "Se eleva la declaración": "✅ Sí", "Se inicializa automáticamente": "✅ Sí (se puede usar antes de su definición)" },
    { Elemento: "function (en variable)", "Se eleva la declaración": "✅ Solo la variable", "Se inicializa automáticamente": "❌ No (Error si se usa antes)" }
]);
