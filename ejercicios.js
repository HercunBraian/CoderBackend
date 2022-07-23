// Callbacks

/* function func1(indiceDeExito) {
    console.log("exito!! " + indiceDeExito);
  }
  
  function func2(msg) {
    console.log("exploto todo" + msg);
  }
  
  function buscarElLibro(array, str, func1, func2) {
    let encontrado = false;
    let i = 0;
    for (i = 0; i < array.length; i++) {
      if (array[i] == str) {
        encontrado = true;
        break;
      }
    }
  
    if (encontrado == true) {
      func1(i + 1);
    } else {
      func2("Error!!! No esta!!");
    }
  }
  
  let arraydeLibros = ["frankestain", "dracula", "el lobo"];
  buscarElLibro(arraydeLibros, "dsfsdf", func1, func2); */

/////////////////////////////

/*   async function main() {
    let traerListadoDeAlumnos = () => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          res(["juan", "maria", "pedro"]);
        }, 2 * 1000);
      });
    }; */

//bloqueante
/* const res = await traerListadoDeAlumnos();
    console.log(res);
    console.log("fin"); */

//no bloqueante / async
/*     traerListadoDeAlumnos()
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
    console.log("fin");
  } */

/*   main(); */

//////////////////

/*   let intentosDeCobro = 0;
let referencia;
referencia = setInterval(() => {
  intentosDeCobro++;
  console.log("intento de cobro" + intentosDeCobro);
  if (intentosDeCobro >= 3) {
    clearInterval(referencia);
  }
}, 1000);
 */

// CUARTA CLASE

/* lextura de archivo con fs require */
/* 
const fs = require('fs')

try {
    const data = fs.readFileSync("./prueba.txt", "utf-8");
    console.log(data);
  } catch (err) {
    throw new Error("Ocurrio un error")
  }
   */

// pruba asincrono

/*   const fs = require('fs')
  fs.readFile("./prueba.txt", 'utf-8', (error, value) => {
    if  (error){
        console.log('fallo')
    } else {
        console.log(value)
    }
  }) */

/* Escribe el archivo borrando lo anterior
  const fs = require('fs')
  fs.writeFile("./prueba.txt", 'algo nuevo', (error) => {
    if  (error){
        console.log('fallo')
    } else {
        console.log('salio bien')
    }
  })
 */

//Agrega al archivo sin sobrescribir
/*   const fs = require('fs')
  fs.appendFile("./prueba.txt", '\n algo nuevo', (error) => {
    if  (error){
        console.log('fallo')
    } else {
        console.log('salio bien al final')
    }
  }) */

/////////// Promesa
/* 
  const fs = require('fs')

  fs.promises.readFile('prueba.txt', 'utf-8').then((res) => {
    console.log(res)
  }). catch((e) =>{
    console.log(error)
  }) */

/////////// Promesa con asinc await
/*     const fs = require ('fs')
async function main() {
    const data = await fs.promises.readFile('prueba.txt', 'utf-8');
      console.log(data)
}
 
main() */

/////////// Promesa con asinc await con manejador de error
const fs = require("fs");
async function main() {
    try{
        const data = await fs.promises.readFile("prueba.txt", "utf-8");
        console.log(data);
    } catch (e){
        console.log(e);
    }
    
  
}

main();
