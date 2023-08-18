function calculo(datos, interes, arrayVacio){
    for (let i = 0; i < datos.length; i++) {
        interes = (datos[i].capital* datos[i].plazo*datos[i].tasa)/100
        arrayVacio.push(interes)
      }

}

function retornoArray (datos, arrayVacio){
    for (let i = 0; i < datos.length; i++) {
  
        console.log("Array de Interes: ");
        console.log ("Interes de", datos[i].Plan ,":", arrayVacio[i])
      }
}

let datos= [];
var interes = 0;
let arrayVacio = [];

const creditos = { Plan: "001", capital: 150000, plazo: 30, tasa:0.15}
datos.push(creditos);
const creditos1 = { Plan: "002", capital: 180000, plazo: 180, tasa:0.10};
datos.push(creditos1);
const creditos2 = { Plan: "003", capital: 485000, plazo: 60, tasa:0.23};
datos.push(creditos2);

calculo(datos,interes,arrayVacio)
retornoArray(datos,arrayVacio)

  
