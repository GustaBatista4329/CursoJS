function calcular(){
    let p = window.prompt('Que produto você está comprando?')
    let c = Number(window.prompt(`Quanto custa ${p} que você está comprando?`))
    let v = Number(window.prompt(`Qual foi o valor que você deu para pagar ${p}?`))
    let t = v - c
    if (t == 0){
        alert('Não tem troco!')
    }else if (t < 0){
        alert(`Não possui dinheiro o suficiente para comprar o produto! \nfalta R$${c - v},00 para conseguir comprar.`)
    }else{
    alert(`Você comprou ${p} que custou R$ ${c},00. \nR$ ${v},00 em dinheiro e vai receber ${t},00 de troco. \nVolte sempre!`)}
}
