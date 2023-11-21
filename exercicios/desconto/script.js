function desconto(){
    let i = window.prompt('Qual é o produto que você está comprando?')
    let p = Number(window.prompt(`Qual é o preço de ${i}`))
    let res = document.getElementById('res')
    let d = p * 0.1
    
    res.innerHTML = `<h1>Calculando desconto de 10% para ${i}</h1>O preço original era R$ ${p}.<br>Você acaba de ganhar R$ ${d}.<br>No fim, você vai pagar R$${p - d} no produto ${i}.`
    
}