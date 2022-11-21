// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let vetor = [3 ,4 ,6 ,9 ,10];
let pares = [];
let impares = [];

//TODO: Implemente uma condição para o armazenamento dos números PARES e ÍMPARES:

for (let i = 0; i < vetor.length; i++) {
    let vetorNormal = vetor[i];
    
    if(vetor[i] % 2 === 0){
    pares.push(vetor[i])
    } else {
        impares.push(vetor[i])
    }  
}

console.log(vetor)
console.log(pares)
console.log(impares)


/**
 * // IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let vetor = [];
let pares = [];
let impares = [];

//TODO: Implemente uma condição para o armazenamento dos números PARES e ÍMPARES:


for (let i = 0; i < 5; i++) {
    let entrada = gets();
    vetor.push(entrada);
}

for (let i = 0; i < vetor.length; i++) {
    
    let vetorNormal = vetor[i];
    
    if(vetor[i] % 2 === 0){
    pares.push(vetor[i]);
    } else {
        impares.push(vetor[i]);
    }  
}

//TODO: Imprima os valores dos três vetores um em cada linha:

print("Vetor: " + vetor)
print("Par(es): " + pares)
print("Impar(es): " + impares)
 */