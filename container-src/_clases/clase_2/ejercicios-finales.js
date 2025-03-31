const checkTruthy = function () {
    console.log("method added to proto of the array");

    return this.filter(Boolean)
}
const similMap = function (cb) {
    const mapperApply = []


    console.log(
        "Generando los numeros aleatorios"
    );

    for (let data of this) {
        mapperApply.push(cb(data))
    }

    return mapperApply
}

/**
 * Una solucion plausible de un logger con hashing
*/

import crypto from "crypto"

const logSetHash = crypto.randomUUID().toString()
const closureFunctionLogger = (logHash) => {
    const logHashShort = logHash.slice(0, 8)
    return (msg) => console.log(`${logHashShort} -> ${msg}`)
}


Array.prototype.checkTruthy = checkTruthy
Array.prototype.similMap = similMap


const arrayTest = [0, 1, false, 2, '', 3]
console.log(
    arrayTest.checkTruthy()
);


const dataTestMap = Array.from({ length: 5 }, () => Math.floor(Math.random() * 5))
dataTestMap.similMap(console.log)


const logMiddleWare = closureFunctionLogger(logSetHash)
logMiddleWare("[INFO] Wrong data")
logMiddleWare("[ERROR] RunTime Data Failure")
