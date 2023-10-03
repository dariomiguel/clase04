const fs = require("fs");
fs.writeFile("./ejemploCallback.txt","Hola desde Callback", (error)=>{

    if (error) return console.log("Error al escribir el archivo");
    fs.readFile("./ejemploCallback.txt", "utf-8", (error, resultado) =>{
        
        if(error) return console.log("Error al leer el archivo");
        console.log(resultado);
        fs.appendFile("./ejemploCallback.txt"," Más contenido",(error)=>{

            if(error) return console.log("Error al actualizar el archivo");
            fs.readFile("./ejemploCallback.txt", "utf-8", (error, resultado)=>{

                if(error) return console.log("Error al leer el archivo");
                console.log(resultado);
                fs.unlink("./ejemploCallback.txt", (error)=>{
                    if(error)return console.log("No se puede eliminar el archivo");
                })

            })
        })
    })
})