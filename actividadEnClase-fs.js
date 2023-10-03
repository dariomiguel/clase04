const fs = require("fs");
let fechaActual = (new Date()).toString();
// console.log(fechaActual);

fs.writeFile("./fechaDesdeFS.txt", fechaActual, (error)=>{

    if(error) return console.log("Error al escribir");
    fs.readFile("./fechaDesdeFS.txt", "utf-8", (error)=>{

        if(error) return console.log("Error en lectura");

    })
})