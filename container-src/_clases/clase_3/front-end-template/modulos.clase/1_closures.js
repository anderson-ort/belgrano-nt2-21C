// en pocas palabras  --> que hacen los closures: 
// Un closure es cuando una función “recuerda” su contexto.

// Te permite encapsular estado sin exponerlo, como una especie de mini módulo.


// Se usa muchísimo en handlers, hooks, factories y lógica modular.

// En frontend, nos da la capacidad de crear comportamientos aislados, sin ensuciar el global o el scope del componente.


// Primer ejemplo --> un contador con estado no localStorage
const htmlTemplate = `
  <div data-container="1" id="container">
    <p id="counter1">Contador 0</p>
    <button data-action="inc">➕ Incrementar</button>
    <button data-action="dec">➖ Decrementar</button>
  </div>
`;

document.getElementById("main").innerHTML = htmlTemplate;

// Creamos los closures UNA VEZ por contenedor
const handlers = {
    1: clickCounter("counter1"),
};



function clickCounter(elementId) {
    let counter = 0;

    const updateContent = () =>
        document.getElementById(elementId).innerText = `Contador ${counter}`;

    return {
        inc: () => { counter++; updateContent(); },
        dec: () => { counter--; updateContent(); },
    };
}

// Delegación del evento desde el body
document.body.addEventListener("click", (e) => {
    const action = e.target.dataset.action;
    const parent = e.target.closest("[data-container]");

    if (!action || !parent) return;

    const containerId = parent.dataset.container;
    const handler = handlers[containerId]; // usamos el closure ya creado

    if (handler && handler[action]) {
        handler[action]();
    }
});


document.getElementById("container").addEventListener("click", () => {
    console.log("🔥 Click capturado en el contenedor (bubbling)");
});

// otro ejemplo es cuando necesitamos hacer un debounce --> mas que nada cuando necesitamos que sun cambio se vea reflejado no en cada momento que estamos tipeando algo, si no mas bien cuando terminamos de ingresar un dato en el input

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
        document.getElementById("status").innerText = "Estado: 🕒 Esperando para guardar...";

        timer = setTimeout(() => saveToServer(content), delay)

    }
}


const autoSave = autoSaverDebounce()


document.getElementById("editor").addEventListener("input", e => {
    const text = e.target.value
    autoSave(text)
})