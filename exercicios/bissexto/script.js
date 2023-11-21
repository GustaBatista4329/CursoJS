function verificar(){
    var ano = Number(window.prompt('Qual ano você quer verificar'))
    var res = document.getElementById('res')
    if(ano % 4 == 0){
        res.innerHTML = `<strong>Analisando o ano de ${ano}...</strong><br>O ano de ${ano} <span id = 'sim'>é bissexto &#x2705</span>`
    } else{
        res.innerHTML = `<strong>Analisando o ano de ${ano}...</strong><br>O ano de ${ano} <span id = 'nao'>não é bissexto &#x274C</span>`
    }
}