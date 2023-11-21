function converter() {
    let res = document.getElementById('res')
    let c = Number(window.prompt('Digite uma temperatura em C (Celsius)'))
    let k = c + 273
    let f = c + 32 * 1.8

    res.innerHTML = `<b>A temperatura de ${c}, corresponde a...</b>
    <br> ${k}K (Kelvin)
    <br> ${f}F (Fahrenheit)`
}