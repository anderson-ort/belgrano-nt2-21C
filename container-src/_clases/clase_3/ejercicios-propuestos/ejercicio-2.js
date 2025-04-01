const obtenerUsuarios = async () => {
    try {
      // Asegúrate de que recibas 10 personas
      const LIMIT = 10;
      const respuesta = await fetch(`https://randomuser.me/api/0.8/?results=${LIMIT}`);
      const personas = await respuesta.json();
  
      // Arrays para hombres y mujeres
      const hombres = [];
      const mujeres = [];
  
      personas.results.forEach((persona) => {
        const user = persona.user;
        const formattedUser = `${user.name.title} ${user.name.first} ${user.name.last}`
        user.gender === "female" ? mujeres.push(formattedUser) : hombres.push(formattedUser);
        
      });
  

      return { hombres, mujeres };

      
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  async function funcionPadre() {
    const { hombres, mujeres } = await obtenerUsuarios();
    console.log(hombres, mujeres);
  }

  funcionPadre();