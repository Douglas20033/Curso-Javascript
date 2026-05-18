/* let num = [20,2,10,7,47] // criando vetores com 5 elementos
num.sort() // colocando números em ordem crescente
num.push(23) //adicionado elemento no final

console.log (`Nosso vetor é ${num}`) // mostrando vetor na tela  
console.log (`O vetor tem ${num.length} posições`) // posições do vetor

*/


/* let valores = [8,1,7,4,9,2] */

/*
for (let pos= 0 ; pos < valores.length; pos ++) {
    console.log(` A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

/* for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

*/

let num = [5,8,7,9]

let pos = num.indexOf(78)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else{
    console.log(`o valor 8 está na posição ${pos} `)
}



