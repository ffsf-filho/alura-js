//Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase em constras maiúsculas.
const frase = 'Esta é uma frase de exemplo.';
console.log(frase.length); // Comprimento da frase
console.log(frase.toUpperCase()); // Frase em constras maiúsculas

//Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.
const valorNull = null;
let valorUndefined;

console.log('Valor de valorNull:', valorNull); // Saída: null
console.log('Valor de valorUndefined:', valorUndefined); // Saída: undefined

//Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.
const numero1 = 42;
const texto1 = ' é a resposta.';
const booleano = true;

const combinacao = `${numero1} ${texto1} É verdade? ${booleano}`;
console.log(combinacao);

//Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.
const numero = 42;
const texto2 = '10';

const numeroConvertido = String(numero);
const textoConvertido = Number(texto2);

console.log('Tipo de dado após conversão de número para string: ', typeof numeroConvertido);
console.log('Tipo de dado após conversão de string para número: ', typeof textoConvertido);

//Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.
const texto = 'JavaScript é incrível!';

const maiusculas = texto.toUpperCase();
const minusculas = texto.toLowerCase();
const parteDaString = texto.slice(0, 10);

console.log('Texto em maiúsculas:', maiusculas);
console.log('Texto em minúsculas:', minusculas);
console.log('Parte da string:', parteDaString);