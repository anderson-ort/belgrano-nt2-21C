// 🧠 ¿Qué es una Higher-Order Function (HOF)?
// En JavaScript, una función de orden superior (Higher-Order Function) es simplemente:

// 🗣️ Una función que recibe otra función como argumento, o devuelve otra función.

// 🎯 Contexto: procesamiento de texto de un formulario
// Supongamos que tenés un input donde el usuario mete un nombre, pero antes de mostrarlo o guardarlo, querés:

// Quitar espacios (trim)

// Pasar todo a minúsculas (toLowerCase)

// Eliminar tildes (eliminarTildes)

// Capitalizar la primera letra (capitalizar)

// Eso lo podrías hacer con un pipe o un compose.


// supongamos que de alguna manera nos otorgan desde una API RESTful el siguiente response:

// const apiResponseRaw = [
//     {
//         "nombre": "  maRía lUisa  ",
//         "email": "maria.LUISA@mail.com  ",
//         "edad": " 32 años"
//     },
//     {
//         "nombre": "juAN  cARlos ",
//         "email": "JC_1990@HOTMAIL.COM",
//         "edad": "35 years"
//     },
//     {
//         "nombre": "   peDRO    sáNCHEZ   ",
//         "email": " pedro@gmail.com  ",
//         "edad": " -24- "
//     },
//     {
//         "nombre": "ana,MARÍA",
//         "email": "ana..maria@my-mail.es",
//         "edad": "N/A"
//     },
//     {
//         "nombre": "  josé  LUIS  RODRÍGUEZ  ",
//         "email": "j.luis@company.COM",
//         "edad": "42a"
//     }
// ]


// // funciones que me van a permitir limpiar la data que se me fue otorgada

// const trim = (str) => str.trim();
// const toLowerCase = (str) => str.toLowerCase();
// const toTitleCase = (str) => {
//     return str.replace(/\w\S*/g, (txt) => {
//         return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
//     });
// };
// const normalizeSpaces = (str) => str.replace(/\s+/g, ' ');
// const removeSpecialChars = (str) => str.replace(/[^\w\s@.-]/g, '');
// const extractNumbers = (str) => {
//     const matches = str.match(/\d+/);
//     return matches ? matches[0] : '';
// };


// // forma de resolver esto es usando pipes o compose(esto es como un pipe pero al reves, donde podes agregar algunos middlewares para errorhandling.)

// const cleanerPipe = (...fns) => (value) => fns.reduce((acc, fn) => fn(acc), value)


// // Pipes específicos para cada tipo de campo
// const nombrePipe = cleanerPipe(
//     trim,
//     normalizeSpaces,
//     removeSpecialChars,
//     toTitleCase
// );

// const emailPipe = cleanerPipe(
//     trim,
//     toLowerCase
// );

// const edadPipe = cleanerPipe(
//     trim,
//     extractNumbers
// );


// const cleanUser = (usuario) => {

//     return {
//         nombre: nombrePipe(usuario.nombre),
//         email: emailPipe(usuario.email),
//         edad: edadPipe(usuario.edad)
//     }
// }





// // Ingesta de datos por medio de JS 

// function crearCard(usuario) {
//     const card = document.createElement('div');
//     card.className = 'card';

//     const avatar = document.createElement('div');
//     avatar.className = 'avatar';
//     avatar.textContent = usuario.nombre.charAt(0);

//     const info = document.createElement('div');
//     info.className = 'info';

//     const nombre = document.createElement('h3');
//     nombre.className = 'nombre';
//     nombre.textContent = usuario.nombre;

//     const email = document.createElement('p');
//     email.className = 'email';
//     email.textContent = usuario.email;

//     const edad = document.createElement('p');
//     edad.className = 'edad';
//     edad.textContent = `Edad: ${usuario.edad} años`;

//     info.appendChild(nombre);
//     info.appendChild(email);
//     info.appendChild(edad);

//     card.className = "acrylic-no-pad"
//     card.appendChild(avatar);
//     card.appendChild(info);

//     return card;
// }

// // Función para renderizar todas las cards
// function renderizarCards(users) {
//     const container = document.getElementById('main');
//     container.innerHTML = '';

//     users.forEach(user => {
//         const card = crearCard(user);
//         container.appendChild(card);
//     });
// }


//sample del por que conviene usar estas tecnicas de frontend
// renderizarCards([apiResponseRaw[0]])


// const cleanedUsers = apiResponseRaw.map(cleanUser)

// renderizarCards(cleanedUsers)


// generacion de la limpieza  --> Sanitization -> Normalization -> Mapping/Adapter(En apps con separación clara de capas)


// se puede realizar para algo como las recetas argentinas --> si ! 


const datosRecetas = [
    {
        "nombre": "   empanADas de CARne   ",
        "ingredientes": " CARne molida,  CEbolla,  MORRón, huevo DURO, aceitunas,   comino ",
        "tiempoPreparacion": " 45 min. ",
        "dificultad": " MEdia "
    },
    {
        "nombre": "LOCRO  tradicIONAL ",
        "ingredientes": "maíz blanco, POROTOS blancos, calabaza,  chorizo,  panceta,   puerro",
        "tiempoPreparacion": "3 horas y media",
        "dificultad": "difícil"
    },
    {
        "nombre": "   maTaMBRE    a la PIZZA   ",
        "ingredientes": " matambre de cerdo,  salsa de tomate,  queso mozzarella,   orégano,    jamon  ",
        "tiempoPreparacion": " 1:30 hs ",
        "dificultad": " media-alta "
    },
    {
        "nombre": "dulce,DE,LECHE",
        "ingredientes": " leche, azúcar, esencia de vainilla,bicarbonato de sodio ",
        "tiempoPreparacion": "aproximadamente 120 minutos",
        "dificultad": "N/A"
    },
    {
        "nombre": "  MILANESAS  a la  NAPOLITANA  ",
        "ingredientes": "  bife de ternera,  huevos,  pan rallado,  tomate,  mozzarella,    orégano  ",
        "tiempoPreparacion": "40m",
        "dificultad": "baja"
    }
];



const trim = (str) => str.trim();
const toLowerCase = (str) => str.toLowerCase();
const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
    });
};
const normalizeSpaces = (str) => str.replace(/\s+/g, ' ');
const removeSpecialChars = (str) => str.replace(/[,]/g, ', ').replace(/\s,/g, ',');
const normalizeIngredients = (str) => {
    return str.split(',')
        .map(ingredient => ingredient.trim())
        .filter(ingredient => ingredient.length > 0)
        .map(ingredient => ingredient.charAt(0).toUpperCase() + ingredient.slice(1).toLowerCase())
        .join(', ');
};
const normalizeDifficulty = (str) => {
    const dificultadMap = {
        'baja': 'Fácil',
        'media': 'Media',
        'media-alta': 'Media-Alta',
        'difícil': 'Difícil',
        'alta': 'Difícil',
        'n/a': 'No especificada'
    };
    const normalized = str.trim().toLowerCase();
    return dificultadMap[normalized] || 'No especificada';
};
const normalizeTime = (str) => {
    // Extraer números de la cadena
    const numbers = str.match(/\d+/g);
    if (!numbers) return "No especificado";

    // Convertir todo a minutos
    if (str.includes('hora') || str.includes('hs') || str.includes(':')) {
        // Si tiene formato de hora
        if (str.includes(':')) {
            const [hours, minutes] = str.split(':').map(n => parseInt(n));
            return `${hours * 60 + minutes} minutos`;
        }
        // Si menciona horas y posiblemente minutos
        else {
            let totalMinutes = 0;

            // Buscar patrón de horas
            const hoursMatch = str.match(/(\d+)\s*(hora|hs|h)/);
            if (hoursMatch) {
                totalMinutes += parseInt(hoursMatch[1]) * 60;
            }

            // Buscar patrón de minutos
            const minutesMatch = str.match(/(\d+)\s*(min|minutos|m)/);
            if (minutesMatch) {
                totalMinutes += parseInt(minutesMatch[1]);
            }

            return `${totalMinutes} minutos`;
        }
    } else {
        // Asumimos que son minutos
        return `${numbers[0]} minutos`;
    }
};



// Función pipe para componer funciones
const pipe = (...fns) => (initialValue) => fns.reduce((acc, fn) => fn(acc), initialValue);

// Pipes específicos para cada tipo de campo
const nombrePipe = pipe(
    trim,
    normalizeSpaces,
    removeSpecialChars,
    toTitleCase
);

const ingredientesPipe = pipe(
    trim,
    normalizeSpaces,
    normalizeIngredients
);

const tiempoPipe = pipe(
    trim,
    normalizeTime
);

const dificultadPipe = pipe(
    trim,
    normalizeDifficulty
);

// Función para limpiar una receta completa
const limpiarReceta = (receta) => {
    return {
        nombre: nombrePipe(receta.nombre),
        ingredientes: ingredientesPipe(receta.ingredientes),
        tiempoPreparacion: tiempoPipe(receta.tiempoPreparacion),
        dificultad: dificultadPipe(receta.dificultad)
    };
};

// Limpiar todas las recetas
const recetasLimpias = datosRecetas.map(limpiarReceta);

// Iconos de comida para cada receta
const foodIcons = ["🥟", "🍲", "🥩", "🍮", "🍕"];

// Función para crear una card de receta
function crearCardReceta(receta, index) {
    const card = document.createElement('div');
    card.className = 'card';

    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-header';

    const foodIcon = document.createElement('div');
    foodIcon.className = 'food-icon';
    foodIcon.textContent = foodIcons[index % foodIcons.length];

    const info = document.createElement('div');
    info.className = 'info';

    const nombre = document.createElement('h3');
    nombre.className = 'nombre';
    nombre.textContent = receta.nombre;

    const metadata = document.createElement('div');
    metadata.className = 'metadata';

    const tiempo = document.createElement('div');
    tiempo.className = 'tiempo';
    tiempo.textContent = receta.tiempoPreparacion;

    const dificultad = document.createElement('div');
    dificultad.className = 'dificultad';
    dificultad.textContent = receta.dificultad;

    const ingredientesTitle = document.createElement('div');
    ingredientesTitle.className = 'ingredientes-title';
    ingredientesTitle.textContent = 'Ingredientes';

    const ingredientesList = document.createElement('div');
    ingredientesList.className = 'ingredientes-list';
    ingredientesList.textContent = receta.ingredientes;

    metadata.appendChild(tiempo);
    metadata.appendChild(dificultad);

    info.appendChild(nombre);
    info.appendChild(metadata);

    cardHeader.appendChild(foodIcon);
    cardHeader.appendChild(info);

    card.classList.add("acrylic-no-pad")

    card.appendChild(cardHeader);
    card.appendChild(ingredientesTitle);
    card.appendChild(ingredientesList);

    return card;
}


// Función para renderizar todas las cards
function renderizarCards() {
    const container = document.getElementById('main');
    container.innerHTML = '';

    recetasLimpias.forEach((receta, index) => {
        const card = crearCardReceta(receta, index);
        container.appendChild(card);
    });
}


renderizarCards(recetasLimpias[0])