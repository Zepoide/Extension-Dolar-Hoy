// https://api.bluelytics.com.ar/v2/latest

const htmlVenta = document.getElementById("venta")
const htmlCompra = document.getElementById("compra")
// const htmlIcono = document.getElementById("sube-baja")

// let valor_compra_old = null

async function fetchValorDolar(){
    const response = await fetch("https://api.bluelytics.com.ar/v2/latest")
    const json = await response.json()
    const valor_compra = json.blue.value_buy
    const valor_venta = json.blue.value_sell

    htmlCompra.innerHTML = `$${valor_compra}`
    htmlVenta.innerHTML = `$${valor_venta}`

}

fetchValorDolar()


// if (valor_compra > valor_compra_old){
//     htmlIcono.innerHTML = "&#8682"
// }else if (valor_compra === valor_compra_old){
//     htmlIcono.innerHTML = "&#8776"
// }else{
//     htmlIcono.innerHTML = "&#8659"
// }