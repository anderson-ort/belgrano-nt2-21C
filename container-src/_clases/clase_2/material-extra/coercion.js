console.log("En JavaScript, la coerción de tipos es el proceso en el que el lenguaje convierte automáticamente un tipo de dato en otro cuando es necesario.Puede ser implícita(automática) o explícita(manual)")

console.log("📌 Ejemplo de coerción implícita")

console.log("5" - 2);   // 3 (JS convierte "5" en número)
console.log("5" + 2);   // "52" (JS convierte 2 en string y concatena)
console.log(5 * "2");   // 10 (JS convierte "2" en número)
console.log(5 == "5");  // true (JS convierte "5" en número antes de comparar)


console.log(
    "📌 Ejemplo de coerción explícita"
);

console.log(Number("5") + 2);  // 7 (Convierte "5" en número)
console.log(String(5) + 2);    // "52" (Convierte 5 en string)
console.log(Boolean(0));       // false (0 se convierte a false)
console.log(Boolean(1));       // true (1 se convierte a true)

console.log(
    `
    👉 Regla importante  
    - Con el operador "+", si hay un string, se hace concatenación.  
    - Con "-", "*", "/", "==", JavaScript intenta convertir los valores en números.
`
)
