const { error } = require('console');
const fs = require('fs');

const fileName = "./contenidoPromesa.txt";
const promesa = fs.promises.writeFile(fileName, "contenido adsfasdfs nlabla");

promesa
    .then( () => console.log("Se ejecuta el WRITE") )
    .then( () => {
        fs.promises.readFile(fileName, "utf-8")
            .then((contenido) => {console.log(contenido)})
            .catch((error) => {console.log("Hubo un error en el READ");})
    })
    .catch( (error) => {
        console.log("Hubo un error en el Write");
    })



// promesa AWAIT - ASYNC
const operacionAsync = async () => {

    await fs.promises.writeFile("./otroArchivoProescrivir.txt","Mas contenido");
    
    console.log("Este log espero que se termine de escribir")
}

// console.log(promesa);
operacionAsync();

console.log("End");
