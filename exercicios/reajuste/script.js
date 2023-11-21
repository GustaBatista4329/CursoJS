function reajustar(){
    let n = window.prompt('Qual é o nome do funcionário?')
    let s = Number(window.prompt(`Qual é o salário de ${n}`))
    let p = Number(window.prompt(`O salário de ${n} vai ser reajustado em qual porcentagem?`))
    let a = s * p / 100
    let ns = s + a
    let res = document.getElementById('res')

    res.innerHTML = `<strong>${n} recebeu um aumento salarial!</strong><br>O salário atual era R$ ${s}.<br> Com um aumento de ${p}%, o salário vai aumentar R$ ${a} no próximo mês.<br>E a partir daí, ${n} vai passar a ganhar R$ ${ns}.`
}