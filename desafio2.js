const fs = require("fs")

class Contenedor {
    constructor(nameFile){
    this.nameFile = "./archivos/"+nameFile+".json"
    }

    async getData(){
        try{
            return await fs.promises.readFile(this.nameFile, "utf-8")
        } catch (error) {
            if(error.code == "ENOENT"){
                fs.writeFile(this.nameFile, "[]", (error) =>{
                    if(error){
                        console.log("El archivo no pudo ser creado")
                    }
                })
            }
        }
    }

    async getAll(){
        const data = await this.getData()
        return JSON.parse(data)
    }

    async save(objeto){
        try{
            let dataArchivo = await this.getData();
            let dataArchivoJson = JSON.parse(dataArchivo);
            let arreglo = [];
            const indice = dataArchivoJson.length + 1;
            objeto.id = indice;

            if(!objeto.id){
                objeto.id = 1
                arreglo = [{...objeto}]
                console.log(objeto)
                await fs.promises.writeFile(this.nameFile, JSON.stringify(arreglo))
                return arreglo[0].id
            }

            dataArchivoJson.push(objeto)
            await fs.promises.writeFile(this.nameFile, JSON.stringify(dataArchivoJson))
        } catch (error){
            console.log("No se pudo grabar el archivo")
        }
    }

    async getById(id){
        try {
            let dataArchivo = await fs.promises.readFile(this.nameFile,"utf-8");
            let dataArchivoJson = await JSON.parse(dataArchivo)
            if(dataArchivoJson.find(e=>e.id === id)) {
               console.log( dataArchivoJson.find(e=>e.id === id))
            } else {
               console.log('el elemento no existe')
            }
            
        } catch (error) {
            console.error(error)
            
        }

    }


    async deleteAll(){
        try {
            await fs.promises.writeFile(this.nameFile, JSON.stringify([]))
            console.log('El contenedor esta vacio')
        } catch (error) {
            console.error(error)
        }
     }

     async deleteById(id){
        try {
            let dataArchivo = await fs.promises.readFile(this.nameFile, "utf-8")
            let dataArchivoJson = await JSON.parse(dataArchivo)
            if (dataArchivoJson.some(e=>e.id === id)) {
                let objeto = dataArchivoJson.find(e=>e.id===id)
                let objPosition = dataArchivoJson.indexOf(objeto)
                dataArchivoJson.splice(objPosition,1)
                fs.promises.writeFile(this.nameFile, JSON.stringify(dataArchivoJson, null, 2))
                console.log('El objeto fue eliminado')
            }
            
        } catch (error) {
            console.error(error)
        }
            
        
     }

}


const Intel = {
    nombre: "Intel I5",
    precio: 100,
}

const AMD = {
    nombre: "Advanced Micro Devices",
    precio: 1000,
}

const archivo = new Contenedor("archivo");
/* archivo.getData() */
   archivo.save(AMD)
/* archivo.getAll().then(x=>console.log(x)) */
/* archivo.deleteAll() */
/* archivo.deleteById(2) */
