
var periodo = [];
let ingresoTotal = 0;
let egresoTotal = 0;


var meses = [
  "Enero", "Febrero", "Marzo", "Abril",
  "Mayo", "Junio", "Julio", "Agosto",
  "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

for (let i = 0; i < 3; i++) {
  let ingreso = Number(prompt(`Ingrese el ingreso para ` + meses[i]));
  const egreso = Number(prompt(`Ingrese el egreso para  ` + meses[i]));

  const mes = {
    nombre: meses[i],
    ingreso: ingreso,
    egreso: egreso
  };


  ingresoTotal = ingresoTotal + ingreso;
  egresoTotal = egresoTotal + egreso;

  periodo.push(mes);
}

if (ingresoTotal > egresoTotal) {
  console.log('Genera ingresos!!!')
}
else {
  console.log('Genera perdidas :(')
}
console.log('Ingreso total:', ingresoTotal)
console.log('Egreso total:', egresoTotal)

