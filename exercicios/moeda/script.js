let dol = Number(window.prompt('Antes de mais nada. Quanto está a cotação do dólar agora?'))
let res = window.document.getElementById('res')
function converter(){
    let real = Number(window.prompt('Quantos R$ você tem na carteira?'))
    
    res.innerHTML = `Com R$${real}, você possui US$${real / dol}`
}