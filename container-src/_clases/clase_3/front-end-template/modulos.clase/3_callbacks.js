// Casos de uso de los callbacks

// APIs del navegador (event listeners, setTimeout, etc)

// Funciones reutilizables

// Lógica de composición y control

// Modularización de comportamiento

// Ejemplo muy simple:
const htmlTemplate = `

  <button id="toggle-theme" class="toggle-theme">🌙</button>

  <form id="formulario">
    <h2>Formulario Validado</h2>

    <div class="input-group">
      <label for="nombre">Nombre</label>
      <input id="nombre" type="text" />
      <p class="mensaje" id="mensaje-nombre"></p>
    </div>

    <div class="input-group">
      <label for="email">Email</label>
      <input id="email" type="text" />
      <p class="mensaje" id="mensaje-email"></p>
    </div>

    <button id="enviar" class="toggle-theme">Enviar</button>
  </form>

`



const formulario = document.createElement("div")
formulario.innerHTML = htmlTemplate
formulario.classList.add("form-wrapper")
document.getElementById("main").appendChild(formulario)


// const validarCampo = (valor, onSuccess, onError) => {
//     if (valor.trim().length >= 3) {
//         onSuccess("Campo válido ✅");
//     } else {
//         onError("El campo debe tener al menos 3 caracteres ❌");
//     }
// }


// const input = document.getElementById("nombre");
// const mensaje = document.getElementById("mensaje");

// input.addEventListener("blur", () => {
//     validarCampo(
//         input.value,
//         (msg) => mensaje.innerText = msg,
//         (err) => mensaje.innerText = err
//     );
// });





// Reglas base --> teniendo en cuenta que esto es un closure
const required = (msg = "Campo requerido") => value => ({
    valid: value.trim().length > 0,
    message: msg
});

const minLength = (length, msg) => value => ({
    valid: value.trim().length >= length,
    message: msg || `Debe tener al menos ${length} caracteres`
});

const isEmail = (msg = "Formato de email inválido") => value => ({
    valid: /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value.trim()),
    message: msg
});



const isName = (msg = "Nombre inválido (solo letras, espacios y acentos)") => value => {
    const limpio = value.trim();
    const regex = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s]{2,}$/;

    return {
        valid: regex.test(limpio),
        message: msg
    };
};



// Validador base --> si nos damos cuenta que estamos injectando en estas reglas son las funciones de validacidones

function validateField({ inputId, messageId, rules }) {
    const input = document.getElementById(inputId);
    const message = document.getElementById(messageId);

    const value = input.value;


    const noValidateRule = rules
        .map(rule => rule(value))
        .find(result => !result.valid)

    console.log(noValidateRule);


    if (noValidateRule) {
        message.innerText = noValidateRule.message
        message.className = "error"
        return false;
    }

    message.innerText = "✔️ OK";
    message.className = "success";
    return true;
}


const validateFormCallBackFunctionBascio = (e) => {

    e.preventDefault()

    const nombreValido = validateField({
        inputId: "nombre",
        messageId: "mensaje-nombre",
        rules: [required(), minLength(3)]
    });

    const emailValido = validateField({
        inputId: "email",
        messageId: "mensaje-email",
        rules: [required(), isEmail()]
    });

    if (nombreValido && emailValido) {
        alert("Formulario válido y listo para enviar 🚀");
    }
}
const validateFormCallBackFunctionAdvanced = (e) => {

    e.preventDefault()


    const nombreValido = validateField({
        inputId: "nombre",
        messageId: "mensaje-nombre",
        rules: [required(), minLength(3), isName()]
    });

    const emailValido = validateField({
        inputId: "email",
        messageId: "mensaje-email",
        rules: [required(), isEmail()]
    });

    if (nombreValido && emailValido) {
        alert("Formulario válido avanzadamente y listo para enviar 🚀");
    }
}




// Uso declarativo en múltiples campos
document
    .getElementById("enviar")
    .addEventListener("click", (e) => validateFormCallBackFunctionAdvanced(e));




const toggle = document.getElementById("toggle-theme");
const form = document.getElementById("formulario");

toggle.addEventListener("click", () => {
    form.classList.toggle("dark");

    toggle.innerText = form.classList.contains("dark")
        ? "🌞"
        : "🌙";
});
