function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = 18//data.getHours()

msg.innerHTML=`Agora são ${hora} horas.`

if (hora>=0 && hora<12){
    img.src='fotomanha.png.jpg'
    document.body.style.background = '#e2cd9f'
} else if (hora>=12 && hora<18){
    img.src='fototarde.png.jpg'
    document.body.style.background='orange'
} else{
    img.src='fotonoite.png.jpg'
    document.body.style.background='gray'
}
}