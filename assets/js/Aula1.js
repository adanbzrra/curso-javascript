/*  Tipos primitivos de dados
    -String 
    -Number
    -Boolean
    -Undefined
    -Null
*/

// Declarando váriaveis

//string 
let a = 'Keven';

// number
let n1 = 23;
//ou
let n2 = 1.60;

// boolean
let bool = true;

// nulo
let nulo = null;

// undefined
let NãoDefinido = undefined;

/*  Tipos de referência de dados:
    {} objeto
    [] array
*/

// Objeto
let pessoa = {
    nome: 'Keven',
    sobrenome: 'Adan',
    idade: 26,
    altura: 1.60
}

console.log(pessoa.nome);

// Sobrescrevendo valores
console.log(pessoa.nome = 'Jose');
console.log(pessoa.nome);
console.log(pessoa);

// Array
let array = ['keven', 26, 1.60];
console.log(array);
console.log(array[2]);

/*  Operadores
Operadores Aritiméticos:
    + Adição 
    - Subtração
    * Multiplicação
    / Divisão
*/

let number1 = 10;
let number2 = 15;

console.log(number1 + number2);

// Operadores Aritméticos Abreviados: ++ e --

let num1 = 10;
let num2 = 10;

let decremento = num1 + --num2;
let incremento = num1 + ++num2;

console.log(incremento);
console.log(decremento);

// Valores aritiméticos abreviados:  += , -+, /=, +=

let soma = 20;

soma += soma;

console.log(soma);

/*  Operadores de igualdade

    = Operador de atribuição 
    == Operador de comparação igual a
    != Operador de comparação deferente de
    !== Operador de comparação diferente, mas do mesmo tipo
    === Operador de comparação igual a, e do mesmo tipo

*/
console.log(1==='1');
console.log(1===1);
console.log(10==10);
console.log(1!=1);
console.log(1!=3);

let nome = 'fernando';
console.log(nome === 'fernando')

/*  Operadores relacionais
    > Maior que
    < Menor que
    >= Maior ou igual a
    <= Menor ou igual a
*/

console.log(40 > 40);
console.log(40 >= 40);
console.log(90 < 40);
console.log(50 >= 51);
console.log(101 <= 101);

/*  Funções 
    Bloco de código javascript nomeados, que podem ser
    invocados usando o operador ()
*/

function RetornaNome () {
    let nome = 'Keven';
    return (
        console.log(nome)
    )
};

// Invocanco uma função
RetornaNome();

function qualquer(){
    let keven = 'keven';
    return (
        console.log(keven)
    )
}

qualquer();

/*
    Funções podem receber 
    argumantos (ou parâmetros)
*/

function MaisUm( value ){
    return(
        console.log(++value)
    )
}

MaisUm(99);
