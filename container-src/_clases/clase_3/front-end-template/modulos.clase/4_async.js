const htmlTemplate = `
<button id="load" class="toggle-theme">Load</button>
<div id="result"></div>
`
const loaderRecetas = document.createElement("div")
loaderRecetas.innerHTML = htmlTemplate

document.getElementById("main").appendChild(loaderRecetas)


const useAsync = (asyncFn, options = {}) => {
    //le indico el estado en la se encuentra el proceso
    const state = {
        loading: false,
        error: null,
        data: null,
    }

    // para que no se rompa se sugiere una opcion adicional de carga y estatus
    const listeners = {
        onLoading: options.onLoading || (() => { }),
        onSuccess: options.onSuccess || (() => { }),
        onError: options.onError || (() => { }),
    }

    const run = async (...args) => {
        state.loading = true
        state.error = null
        state.data = null
        listeners.onLoading()

        try {
            const result = await asyncFn(...args)
            state.data = result
            listeners.onSuccess(result)
        } catch (err) {
            state.error = err
            listeners.onError(err)
        } finally {
            state.loading = false
        }
    }

    return {
        run,
        getState: () => ({ ...state }),
    }
}


// esto por que quiero que demore un poquito para que se vea el loader
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const fetchUsers = async () => {
    await sleep(1500); // simula una demora de 1.5 segundos
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
};


const ui = {
    result: document.getElementById("result"),
    button: document.getElementById("load"),
}

const asyncUserLoader = useAsync(fetchUsers, {

    onLoading: () => {
        ui.result.innerHTML = `
        <span>⏳ Cargando usuarios...</span>
        <span class="loader"></span>
      `
        ui.button.disabled = true
    },

    onSuccess: (users) => {
        ui.result.innerHTML = users.map(u => `<p>👤 ${u.name}</p>`).join("")
        ui.button.disabled = false
    },

    onError: (err) => {
        ui.result.innerHTML = `❌ Error: ${err.message}`
        ui.button.disabled = false
    }
})


ui.button.addEventListener("click", () => {
    asyncUserLoader.run()
})



const url = "https://api.escuelajs.co/api/v1/products"

// const response = fetch(url, {})
//     .then(res => res.json())
//     .then(res =>  console.log(res))


const getData = async () => {
    try {
        const response = await fetch(url, {})

        const data = await response.json()
        console.log(data)
    }
    catch (error) {
        console.error({ error });

    }
}


getData()
