// https://api.bluelytics.com.ar/v2/latest

const htmlVenta = document.getElementById("venta")
const htmlCompra = document.getElementById("compra")

async function fetchValorDolar(){
    
    const response = await fetch("https://api.bluelytics.com.ar/v2/latest")
    const json = await response.json()
    const valor_compra = json.blue.value_buy
    const valor_venta = json.blue.value_sell

    htmlCompra.innerHTML = `$${valor_compra}`
    htmlVenta.innerHTML = `$${valor_venta}`
}

fetchValorDolar()

