function contar(){
    var n1 = document.getElementById('txti')
    var n2 = document.getElementById('txtf')
    var pas = document.getElementById('txtp')
    var res = document.getElementById('res')
    

    if(n1.value.length == 0 || n2.value.length == 0 || pas.value.length == 0 ){
       window.alert('Número Inválido')
       res.innerHTML = 'Impossível contar!'
    } else if (n1.value < n2.value){
        var ini = Number(n1.value)
        var fim = Number(n2.value)
        var pass = Number(pas.value)
        res.innerHTML = 'Contando: '
        for(var c = ini; c<=fim; c += pass){
            res.innerHTML += /*`👉${c}`*/ `${c} \u{1F449}`//unicodeemojilist
        }
        res.innerHTML += `\u{1F3C1}`  
    }else {
        var ini = Number(n1.value)
        var fim = Number(n2.value)
        var pass = Number(pas.value)
        res.innerHTML= 'Contando: '
        for(var c = ini; c>=fim; c -= pass){
            res.innerHTML += `${c} 👉`  
       }
        res.innerHTML += `\u{1F3C1}`
    }
}