let str = "Esse desafio foi facil"
let branco = []
let vogais = []
let countBranco = 0
let countVogais = 0

let strSplit = str.split('');

for (let i = 0; i < strSplit.length; i++) {
    let strBranco = strSplit[i]
        if(strBranco.match(' ')){
            branco.push()
            countBranco++
}
}


for (let x = 0; x < strSplit.length; x++) {
    let strVogais = strSplit[x]
        const regexp = /[A-E-I-O-U-a]/gi
        if(strVogais.match(regexp)){
            vogais.push()
            countVogais++
}    
}

resultadoFinalVogais = countVogais - countBranco

console.log('Tem ' + countBranco + ' Espaços em branco')
console.log('Tem ' + resultadoFinalVogais + ' Vogais')

