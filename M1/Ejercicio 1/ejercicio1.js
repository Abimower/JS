const costosFijos = prompt('Ingrese el costo fijo:')
const precioVenta =  prompt ('Ingrese el precio de venta:')
const costoVariable = prompt ('Ingrese los costos variables:')


const puntoEquilibrio = costosFijos /(precioVenta-costoVariable)

alert('El punto de equilibrio es: '+ puntoEquilibrio)
