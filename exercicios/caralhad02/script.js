function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value == 0 || Number(fano.value) > ano){
        window.alert('[ERRO]: verifique os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        }
        if (fsex[0].checked){
         genero = 'Homem'
            if (idade >=0 && idade < 12){
            img.setAttribute('src', 'criancahomen.png.jpg')
            }else if (idade <21) {
            img.setAttribute('src', 'jovemhomem.png.jpg')
            }else if (idade<50) {
            img.setAttribute('src', 'adultohomem.png.jpg')
            }else{
            img.setAttribute('src', 'velho.png.jpg')
            }
         res.innerHTML = `Detectamos ${genero}, com ${anos}, anos`
         res.appendChild(img)  
   }
        }     
        