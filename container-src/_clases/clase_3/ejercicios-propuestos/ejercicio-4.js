const obtenerUsuarios = async () => {
    
    // Crear un array de 10 promesas para obtener 10 usuarios en paralelo
    const promesas = Array(10).fill(fetch('https://randomuser.me/api/0.8/?results=5').then(res => res.json()));
    // Esperar a que todas las promesas se resuelvan
    const resultados = await Promise.all(promesas);
    // console.log('resultadoss: ', resultados);
    // Separar los usuarios en arrays de hombres y mujeres
    let hombres = [];
    let mujeres = [];

    // console.log('Resultados: ', resultados[0].results);

    resultados[0].results.forEach((usuario) => {
        // console.log('usuario: ', usuario.user);

        const user = usuario.user;

        if (user.gender === 'male') {
            hombres.push(user.name.first);
        } else if (user.gender === 'female') {
            mujeres.push(user.name.first);
        }
    });
    return { hombres, mujeres };
};
async function funcionPadre() {
    try {
        const { hombres, mujeres } = await obtenerUsuarios();
        console.log(hombres, mujeres);
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
    }
}

funcionPadre();
console.log("Prueba");