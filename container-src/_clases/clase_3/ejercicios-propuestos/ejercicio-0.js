const obtenerUsuarios = () => {

    const respuesta = fetch('https://randomuser.me/api/')

    // Tienen que devolver 10 personas

    //array hombres y array mujeres

    return {hombres, mujeres}
}

function funcionPadre(){

    const {hombres, mujeres} = obtenerUsuarios();

    console.log(hombres, mujeres);
}