function calcular(){
    let a = Number(window.prompt('Qual é o valor de a?'))
    let b = Number(window.prompt('Qual o valor de b?'))
    let c = Number(window.prompt('Qual o valor de c?'))
    let r = b ** 2 - 4 * a * c
    let res = document.getElementById('res')

    res.innerHTML = `<strong>Resolvendo Bhaskara</strong><br>A equação atual é <strong> ${a}x<sup>2</sup> + ${b}x + ${c} = 0 </strong><br>O cálculo realizado será <strong>&Delta; = ${b}<sup>2</sup> - 4 . ${a} . ${c}</strong><br>O valor calculado foi <strong>&Delta; = ${r}</strong>`
}