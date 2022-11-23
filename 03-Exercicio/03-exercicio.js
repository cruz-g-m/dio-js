let str = "Education best team"
let branco = []
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

let strMatch = str.match(/[aeiou]/gi);

for (let x = 0; x < strMatch.length; x++) {
    let strVogais = strMatch[x]
    countVogais++
        
            
}    


console.log('Tem ' + countBranco + ' Espaços em branco')
console.log('Tem ' + countVogais + ' Vogais')


/**
 * 
 * // IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - ".split()": esse método transforma uma string em um array de substrings;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

// TODO: faça um programa que contabilize quantos espaços em branco e quantas vogais existem
//na string de entrada;

let str = gets();

let branco = []
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

let strMatch = str.match(/[aeiou]/gi);

for (let x = 0; x < strMatch.length; x++) {
    let strVogais = strMatch[x]
    countVogais++
        
            
}    


print('Espacos em branco: ' + countBranco + ' Vogais: ' + countVogais)
 */

