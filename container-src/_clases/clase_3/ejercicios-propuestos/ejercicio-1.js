const obtenerUsuario  = async () => {
    try {
        const respuesta = await fetch('https://randomuser.me/api/');
        const data = await respuesta.json();
        return data.results[0];
    } catch(e) {
        console.error(e);
    }

}

const obtenerUsuarios = async () => {

    const promises = [];
    for(let i = 0; i < 10; i++) {
        promises.push(await obtenerUsuario());
    }

    // const data = await Promise.all(promises);

    const mujeres = [];
    const hombres = [];
    promises.forEach((user) => {
        if (user.gender === 'male') {
            hombres.push(user.name.first)
        } else {
            mujeres.push(user.name.first)
        }
    })


    return {hombres, mujeres}
}

async function funcionPadre(){

    const {hombres, mujeres} = await obtenerUsuarios();

    console.log(hombres, mujeres);
}

funcionPadre()