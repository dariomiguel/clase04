const fs = require('fs');

fs.writeFileSync("./ejemplo.txt","Hola comisión 55585!!!");

if(fs.existsSync("./data.txt")){
    const contenido = fs.readFileSync("./data.txt", "utf-8");
    console.log(contenido);
    fs.unlinkSync("./data.txt");
}else{
    console.log("El archivo no existe!");
}