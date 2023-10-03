const fs = require('fs');

fs.writeFile("./archivosAsync.txt", "asdasdfasd", () => {
    console.log("Esto esta primero pero se escribe despues")
})

fs.writeFile("./otroArchivoAsync.txt", "asdfasdfasd fasdfasdfas dfasdfasdf asdf asdfasdfasdf", () => {
    console.log("Se termino el otro");

    fs.appendFile("./otroArchivoAsync.txt")
})

fs.unlink("./otroArchivoAsync.txt", () => {
    console.log("Se borro el archivo");
})

setTimeout(() => {console.log("DIN DON");}, 2500)
console.log("Se termino el script");