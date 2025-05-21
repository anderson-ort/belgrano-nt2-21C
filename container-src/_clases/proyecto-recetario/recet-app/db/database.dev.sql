create table public.recipes (
  id            bigint primary key,
  nombre        text not null,
  descripcion   text,
  imagen        text,
  puntuacion    int,
  ingredientes  jsonb,
  preparacion   jsonb
);

-- Favoritos (relación N:M entre users y recipes)
create table favorites (
  user_id       uuid    references auth.users(id),
  recipe_id     bigint  references recipes(id),
  primary key   (user_id, recipe_id)
);




insert into public.recipes 
(
  id, nombre, descripcion, imagen, puntuacion, ingredientes, preparacion
) values
(1,
'Pastel de la cosecha de otoño',
'Un pastel vegetal horneado con frijoles, puré de papas y migas de pan, perfecto para los días frescos de otoño.',
'https://cdn.nutritionstudies.org/wp-content/uploads/2022/12/2-768x512.jpg',
5,
'[
  "1 cebolla amarilla mediana, picada finamente",
  "3 dientes de ajo grandes, pelados, partidos por la mitad y picados finamente",
  "2 tomates medianos, picados",
  "1 cucharada de concentrado de tomate",
  "2 cucharadas de salvia fresca picada",
  "2 cucharaditas de tomillo fresco picado",
  "1 cucharadita de romero fresco picado",
  "3 tallos de apio, cortados en trozos de 3 pulgadas",
  "3 zanahorias medianas, cortadas en trozos de 3 pulgadas",
  "2 nabos grandes, pelados, recortados y cortados en cuartos",
  "1 bulbo de hinojo mediano, recortado y cortado en cuartos",
  "4 tazas de caldo vegetal bajo en sodio",
  "5 tazas de frijoles cannellini cocidos",
  "Sal marina y pimienta negra al gusto",
  "1 receta de puré de papas de chirivía",
  "1 taza de migas de pan de grano entero"
]',
'[
  "Precalienta el horno a 350 °F (180 °C).",
  "Calienta una sartén grande a fuego medio. Agrega las cebollas y saltea durante 5 minutos hasta que se vuelvan traslúcidas, agregando agua según sea necesario.",
  "Añade el ajo y cocina durante otro minuto.",
  "Agrega los tomates, el concentrado de tomate, la salvia, el tomillo y el romero, y cocina durante 5 minutos.",
  "Agrega el apio, zanahorias, nabos, hinojo y caldo vegetal. Cocina 15-20 minutos hasta que los vegetales estén tiernos.",
  "Añade más caldo si es necesario.",
  "Agrega los frijoles y coloca el guiso en una fuente de horno de 9x13 pulgadas.",
  "Cubre con el puré de papas, espolvorea las migas de pan y hornea 30 minutos hasta que estén doradas."
]'),

(2,
'Tostadas de frijoles pintos con salsa de aguacate',
'Crujientes tostadas de maíz con frijoles machacados, repollo y una fresca salsa cremosa de aguacate.',
'https://cdn.nutritionstudies.org/wp-content/uploads/2023/06/pinto-bean-tostadas-with-avocado-salsa-2-3-768x512.jpg',
5,
'[
  "Tortillas de maíz",
  "Ensalada de repollo mixto",
  "2 tazas de frijoles pintos cocidos, enjuagados y escurridos",
  "¼ taza de caldo vegetal bajo en sodio",
  "1 cucharadita de orégano seco",
  "Sal y pimienta al gusto",
  "7 tomatillos, sin cáscara",
  "1 aguacate, sin semilla y pelado",
  "10 ramitas de cilantro fresco",
  "3 cebollines, parte blanca y verde",
  "1 jalapeño (opcional)",
  "Lechuga rallada",
  "Col rizada picada",
  "Repollo rallado",
  "Pimientos rojos asados en cubitos"
]',
'[
  "Coloca los frijoles y el caldo vegetal en una sartén a fuego medio. Machácalos hasta obtener un puré.",
  "Agrega el orégano, sal y pimienta. Cocina a fuego lento durante 5 minutos.",
  "Para la salsa, licúa los tomatillos, aguacate, cilantro, cebollines y jalapeño hasta lograr una textura cremosa.",
  "Arma las tostadas con una capa de frijoles, ensalada de repollo, salsa de aguacate y los toppings deseados."
]'),

(3,
'Pasta con salsa Alfredo de coliflor',
'Una versión más ligera de la clásica Alfredo, hecha con coliflor y leche vegetal, ideal para una comida reconfortante.',
'https://cdn.nutritionstudies.org/wp-content/uploads/2022/06/pasta-alfredo-bowl-1024x683.jpg',
3,
'[
  "1 libra (453 g) de pasta de tu elección",
  "1 cabeza mediana de coliflor",
  "1 ½ taza de leche vegetal",
  "¼ taza de levadura nutricional",
  "1 cucharada de mantequilla de marañones cruda",
  "1 cucharadita de ajo en polvo",
  "¼ cucharadita de nuez moscada molida",
  "Una pizca de sal (opcional)",
  "Pimienta negra agrietada para adornar"
]',
'[
  "Corta y cocina al vapor la coliflor hasta que esté tierna.",
  "Deja que se enfríe un poco y luego licúa con el resto de los ingredientes hasta obtener una salsa suave.",
  "Vierte la salsa sobre la pasta cocida.",
  "Adorna con pimienta negra recién molida al gusto."
]'),

(4,
'Curry de garbanzos y espinaca',
'Curry especiado de garbanzos con espinaca y leche de coco, sabroso y nutritivo, ideal para acompañar con arroz.',
'https://cdn.nutritionstudies.org/wp-content/uploads/2020/06/sopa-de-garbanzos.jpg',
4,
'[
  "1 cebolla mediana picada",
  "3 dientes de ajo picados",
  "1 cucharada de jengibre fresco rallado",
  "1 cucharada de curry en polvo",
  "1 cucharadita de cúrcuma",
  "1 lata (15 oz) de tomates triturados",
  "2 tazas de garbanzos cocidos",
  "4 tazas de espinaca fresca",
  "1 taza de leche de coco ligera",
  "Sal y pimienta al gusto"
]',
'[
  "En una sartén grande, sofríe la cebolla con un poco de agua hasta que esté translúcida.",
  "Agrega el ajo, jengibre, curry y cúrcuma. Cocina por 2 minutos.",
  "Agrega los tomates y cocina por 5 minutos.",
  "Incorpora los garbanzos, la leche de coco y cocina por 10 minutos a fuego medio.",
  "Añade la espinaca y cocina hasta que se marchite.",
  "Ajusta sal y pimienta al gusto. Sirve caliente con arroz integral o pan naan."
]'),

(5,
'Bowl de quinoa con vegetales asados',
'Un bowl lleno de color con quinoa y vegetales asados al horno, aderezado con limón y comino.',
'https://cdn.nutritionstudies.org/wp-content/uploads/2016/03/recipe-Red-Quinoa-Enchiladas-Rojas.jpg',
4,
'[
  "1 taza de quinoa cocida",
  "1 pimiento rojo cortado en tiras",
  "1 calabacín en rodajas",
  "1 berenjena en cubos",
  "1 cebolla roja en gajos",
  "2 cucharadas de aceite de oliva (opcional)",
  "1 cucharada de jugo de limón",
  "1 cucharadita de comino molido",
  "Sal y pimienta al gusto",
  "Perejil picado para decorar"
]',
'[
  "Precalienta el horno a 200 °C.",
  "Coloca los vegetales en una bandeja para hornear y mezcla con aceite (si se usa), comino, sal y pimienta.",
  "Hornea durante 25-30 minutos o hasta que estén dorados y tiernos.",
  "Sirve los vegetales sobre la quinoa cocida.",
  "Rocía con jugo de limón y decora con perejil picado."
]');


