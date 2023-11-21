function verificar(){
    let res = document.getElementById('res')
    let antes = Number(window.prompt('Qual era o preço anterior do produto?'))
    let atual = Number(window.prompt('Qual é o preço atual do produto?'))
    let y = antes - atual
    let x = atual - antes
    let paumenta = antes / atual
    let pa = (1 - paumenta) * 100
    let pbaixa = atual / antes
    let pb = (1 - pbaixa) * 100
    if(antes < atual){
        res.innerHTML = `<strong>Analisando os valores informados.</strong><br>O produto custava R$${antes},00 e agora custa R$${atual},00.<br>Hoje o produto está mais caro.<br>O preço subiu R$${x} em relação ao preço anterior.<br>Uma variação de ${pa}% pra cima.`
    } else if(antes == atual){
        res.innerHTML = '<strong>O preço não alterou!</strong>'
    } else{
        res.innerHTML = `<strong>Analisando os valores informados</strong><br> O produto custava R$${antes},00 e agora custa R$${atual}.<br>Hoje o produto está mais barato.<br>O preço caiu R$${y} em relação ao preço anterior.<br>Uma variação de ${pb}% pra baixo.`
    }
}