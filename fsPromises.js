const fs = require("fs");
const operacionesAsincronicas = async() =>{

    await fs.promises.writeFile("./ejemploPromesa.txt","Hola desde promesa!");

    let resultado = await fs.promises.readFile("./ejemploPromesa.txt", "utf-8");

    await fs.promises.appendFile("./ejemploPromesa.txt", " Contenido adicional");

    resultado = await fs.promises.readFile("./ejemploPromesa.txt","utf-8");

    await fs.promises.unlink("./ejemploPromesa.txt");
}

operacionesAsincronicas();