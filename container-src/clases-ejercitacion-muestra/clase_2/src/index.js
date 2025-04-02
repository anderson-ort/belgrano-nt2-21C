const main = document.getElementById("app");
let p = document.createElement("p")
p = "Soy un elemento creado por JS"

main.append(p)


function displayTruthy(valoresEntrada) {

    valoresEntrada.forEach(element => {
        if (Boolean(element)) {
            let list = document.createElement("li")
            list.innerText = element
            // console.log(element);
            main.appendChild(list)
        }
    });

}

const listDisplay = [0, "Hola mundo :)", {}, -0, null, undefined]

displayTruthy(listDisplay)

Array.prototype.similMap = function (idLabel) {

    const labelId = document.getElementById(idLabel)
    const arrayReturn = []

    for (let e of this) {
        let div = document.createElement("div")
        div.innerText = e
        labelId.appendChild(div)

        arrayReturn.push(div)
    }

    return arrayReturn
}


const listaNombres = [
    "Adela",
    "Adriana",
    "Ágata",
    "Almudena",
    "Amanda",
    "Amelia",
    "Amparo",
    "Aroa",
    "Astrid",
    "Bárbara",
    "Beatriz",
    "Belén"]



const listDiv = listaNombres.similMap("render")

console.log(listDiv);


// closure

// arrow function
// const logger = function () {
//     const idError = "[Desde el controller]"

//     return function (msgError) {
//         alert(idError + msgError)
//     }

// }


const logger = () => {
    const idError = "[8761782361-controller]"
    return msgError => alert(idError + msgError)
}


const controllerTrackingFront = logger();

controllerTrackingFront("Fallo al entrar a la API")

console.log(idError);

