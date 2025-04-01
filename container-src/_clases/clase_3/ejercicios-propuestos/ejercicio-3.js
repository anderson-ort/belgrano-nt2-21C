const obtenerUsuarios = async () => {
    // Array para cada hombres y mujeres.
    let hombres = [];
    let mujeres = [];
  
    // Ciclo para recorrer las primeras 10 personas.
    for (let i = 0; i < 10; i++) {
    const respuesta = await fetch('https://randomuser.me/api/');
    const datos = await respuesta.json();
    const usuario = datos.results[0];
    const nombreCompleto = `${usuario.name.first} ${usuario.name.last}`;
      
    if (usuario.gender === 'male') {
      hombres.push(nombreCompleto);
    } else if (usuario.gender === 'female') {
      mujeres.push(nombreCompleto);
    }
    
    }
  
    return { hombres, mujeres };
  }
  
  async function funcionPadre() {
    // La func espera lo que devuelva la funcion de obtenerUsuarios.
    const { hombres, mujeres } = await obtenerUsuarios();
  
    console.log('Hombres:', hombres);
    console.log('Mujeres:', mujeres);
  }
  funcionPadre();