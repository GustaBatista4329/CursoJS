function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
   if (fano.value == 0 || Number(fano.value) > ano){
    window.alert('[ERRO]: verifique os dados e tente novamente')
   } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
        genero = 'Homem'
            if (idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'criancahomen.png.jpg')
            }   
            else if(idade >=10 && idade <21){
               //jovem
               img.setAttribute('src','jovemhomem.png.jpg')
            }
            else if(idade <50){
                //Velho
                img.setAttribute('src', 'adultohomem.png.jpg')
            }    
            else{
                //Idoso
                img.setAttribute('src', 'velho.png.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade <10){
                 //criança
                 img.setAttribute('src', 'criancamulher.png.jpg')
            }   
            else if(idade >=10 && idade <21){
                //jovem
                img.setAttribute('src', 'jovemmulher.png.jpg')
            }
            else if(idade <50){
                //Velho
                img.setAttribute('src', 'adultomulher.png.jpg')
            }    
            else{
                //Idoso
                img.setAttribute('src', 'velha.png.jpg')
        }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    } 
}