console.log("Hello world");
console.log("Que onda con los otros objetos??");

const hello = Array.from("Hello world")
console.log(hello);

const thor = [
    {},
    "aguatne loki",
    function () { return 1 },
    Symbol("ola kase")
]


// thor.forEach(
//     function (dato) { console.log(dato) }
// )

Array.prototype.imprir = function () {
    this.forEach(function (dato) {
        console.log(dato)
    })
}


thor.imprir()