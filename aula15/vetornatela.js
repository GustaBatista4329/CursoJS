let valores = [ 8, 1, 4, 7, 2, 9]
valores.sort()
//console.log(valores)

/*console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

for(let pos = 0; pos< valores.length; pos++){
    console.log(`Aposição ${pos} tem os valores ${valores[pos]}*/

for( let pos in valores){
    console.log(`A posição ${pos} tem os valores${valores[pos]}`)
}