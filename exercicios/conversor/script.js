function converter() {
    let res = window.document.getElementById('res')
    let m = Number(window.prompt('Digite uma distância em metros (m)'))
    let km = m / 1000
    let hm = m / 100
    let dam = m / 10
    let dm = m * 10
    let cm = m * 100
    let mm = m * 1000

    res.innerHTML = `<b>A distância de ${m} metros, corresponde a...</b>
    <br> ${km} quilômetros (Km)
    <br> ${hm} hectômetro (Hm)
    <br> ${dam} decâmetro (Dam)
    <br> ${dm} decímetro (dm)
    <br> ${cm} centímetro (cm)
    <br> ${mm} milímetro (mm)`
}