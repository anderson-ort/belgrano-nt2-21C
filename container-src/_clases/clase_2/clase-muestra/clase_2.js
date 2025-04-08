
console.log("Voy a caster al sr null")
console.log(Boolean(null)); //false
console.log("Y si casteamos un 0");
console.log(Boolean(0))


// const HOST =  process.env.HOST ?? "localhost"; //undefined vs str
// const HOST =  0 || "localhost"; //undefined vs str\
const PORT = 0 ?? 3001 // 0 || 3001 ;
console.log("Buenas buenas aca el host!!!")
console.log(PORT);

