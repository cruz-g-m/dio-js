// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.


let valor = gets();

//TODO: Descubra se o valor é inteiro ou decimal
let result = valor.replace(/,/g, '.')

let resultadoFormatado = parseFloat(result)

if (resultadoFormatado % 1 != 0 && !isNaN(resultadoFormatado % 1)){
  print('Decimal')
} else {
  print('Inteiro')
}
