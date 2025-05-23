// // agregado solo para jugar un poco con js y animations

const looperAnimation = (className) => {
    const element = document.querySelector(className);
    element.style.animation = 'none';

    void element.offsetWidth;
    element.style.animation = 'typing 2s steps(13), blink .5s step-end infinite alternate';
}

const timeSet = 0.25 * 60 * 1000

setInterval(looperAnimation, timeSet, ".typing-demo")

// functions

/*
function counterBy10(counterInit = 10) {
    //  estado inicial
    let counter = counterInit;

    return function () {
        counter += 10;
        return counter
    }
}

const contadorMagico = counterBy10();
const contadorDesde100 = counterBy10(100);
const contadorDesdeMenos100 = counterBy10(-100);
console.log("contador standard");

console.log(contadorMagico());
console.log(contadorMagico());

console.log("contador desde 100");
console.log(contadorDesde100());
console.log(contadorDesde100());

console.log("contador desde - 100");
console.log(contadorDesdeMenos100());
console.log(contadorDesdeMenos100());




// upper class

const htmlTemplate = `
  <div data-container="1" id="container">
    <p id="counter1">Contador 0</p>
    <button data-action="inc">➕ Incrementar</button>
    <button data-action="dec">➖ Decrementar</button>
  </div>
`;

const main = document.getElementById("main")
main.innerHTML = htmlTemplate;


const clickerCounter = (elementId) => {
    let initialState = 100

    const renderContent = () => {
        document
            .getElementById(elementId)
            .innerText = `🐥 ${initialState}`
    }


    return {
        inc: () => {
            initialState++;
            // console.log(initialState)
            renderContent()
        },
        dec: () => {
            initialState--;
            renderContent()
            //  console.log(initialState) 
        }
    }
}

const handlers = clickerCounter("counter1")

document
    .getElementById("container")
    .addEventListener(
        "click",
        (e) => {
            const action = e.target.dataset.action

            if (!action) return;

            handlers[action]()

        }
    )
*/



const htmlTemplateDebounce = `
<br>
<div >
<textarea id="editor" placeholder="Escribí algo..."></textarea>
<p id="status">Estado: ✍️ Escribiendo...</p>
</div>
`


const debounceSample = document.createElement("div")
debounceSample.innerHTML = htmlTemplateDebounce
document.getElementById("main").appendChild(debounceSample)



const autoSaverDebounce = (delay = 1500) => {
    let timer;

    const saveToServer = (content) => {
        console.log("💾 Auto-saving:", content);
        document.getElementById("status").innerText = "Estado: 💾 Guardado automático";
    }

    return (content) => {
        clearTimeout(timer); //se resetea el intento anterior
        document
            .getElementById("status")
            .innerText = "Estado: 🕒 Esperando para guardar...";

        timer = setTimeout(() => saveToServer(content), delay)
    }
}


const autoSave = autoSaverDebounce(1000)

document.getElementById("editor").addEventListener(
    "input",
    (e) => {
        const text = e.target.value
        autoSave(text)
    }
)












