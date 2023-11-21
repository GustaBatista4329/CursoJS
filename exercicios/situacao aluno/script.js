function notas(){
    let res = document.getElementById('res')
    let nome = window.prompt('Qual é o nome do aluno?')
    let pnota = Number(window.prompt(`Primeira nota de ${nome}:`))
    let snota = Number(window.prompt(`Segunda nota de ${nome}:`))
    let media = (pnota + snota) / 2

    if(media > 6.0){
        res.innerHTML = `<strong>Analisando a situação de ${nome}</strong><br>Com as notas ${pnota} e ${snota}, a <strong>média é ${media}</strong><br>Com média acima de 6.0, o aluno está <span id='aprovado'>APROVADO</span>` 
    } else if (media <= 6.0 && media > 3.0){
        res.innerHTML = `<strong>Analisando a situação de ${nome}</strong><br>Com as notas ${pnota} e ${snota}, a <strong>média é ${media}</strong><br>Com média acima de 6.0, o aluno está em <span id='recuperacao'>RECUPERAÇÃO</span>`  
    } else {
        res.innerHTML = `<strong>Analisando a situação de ${nome}</strong><br>Com as notas ${pnota} e ${snota}, a <strong>média é ${media}</strong><br>Com média acima de 6.0, o aluno está <span id='reprovado'>REPROVADO</span>`
    }
}