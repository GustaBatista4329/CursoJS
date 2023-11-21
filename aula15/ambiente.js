var num = [10, 5, 6]
num[3] = 16
num.push(7)
num.sort()
console.log(`o primeiro valor é ${num[0]}`)
console.log(`nosso vetor é o ${num}`)
console.log(`tem ${num.length} elementos`)
console.log(`em ordem crescente ${num.sort()}`)
let pos = num.indexOf(9)
if(pos == -1){
console.log('o valor não foi encontrado')}
else{
console.log(`o valor 5 está na posição ${pos}`)}