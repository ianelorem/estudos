Guia de JavaScript - Variáveis, Operadores e Expressões

Declaração de Variáveis

const a = 23;
const texto = "culto de jovens";
const verdadeiro = true; // Valor booleano: true ou false

Comentário de Múltiplas Linhas

/*
Comentário de exemplo
Pode ser usado para explicar partes do código.
*/

Variáveis Mutáveis (let)

let b = 40;
b = 56;

Declarar uma variável significa criá-la.

Atribuir um valor na declaração é chamado de inicialização.

Atribuir um valor significa colocar um valor em uma variável.

Tipos de valores até aqui: numérico, texto, booleano, NaN, undefined, null.

Variáveis Não Inicializadas

let nome; // Declarada, mas não inicializada (valor padrão: undefined)
console.log(nome);

Constantes (const)

const teste = null;
const teste2 = undefined;

Constantes devem ser inicializadas na criação.

null e undefined expressam ausência de informação.

Operadores em JavaScript

Operadores Aritméticos

// Exemplos de operadores aritméticos:
const expressao = 12 + 5 * 2;

Operador

Descrição

=

Atribuição

+

Adição

-

Subtração

*

Multiplicação

/

Divisão

**

Exponenciação

++

Incremento (somente para let)

--

Decremento

%

Resto da divisão

Operador: Símbolo que realiza uma operação.

Expressão: Sequência de valores e operadores que resulta em um valor final.

Operando: Valor utilizado por um operador.

Operadores Relacionais

// Exemplos de operadores relacionais
const expressao2 = 21 == 21 && 34 >= 30 && 2 > 3 || 60 <= 24 && !true;

Operador

Descrição

==

Igualdade

!=

Diferença

>=

Maior ou igual

<=

Menor ou igual

<

Menor que

>

Maior que

Operadores relacionais expressam relações entre valores.

Eles podem ser usados em qualquer tipo de valor.

Operadores Lógicos

// Exemplos de operadores lógicos
const expressao3 = true && false || false;

Operador

Descrição

&&

"E" lógico (true se ambos forem true)

`



`

"OU" lógico (true se pelo menos um for true)

!

Negação (inverte o valor booleano)

Concatenação de Strings é feita com +.

Strings e Caracteres Especiais

const texto2 = "oi" + " " + "tudo bem\n ola";
console.log(texto2);

\n → Pula linha

\t → Tabulação (espaço grande)

Template Strings (Interpolação)

const pessoa = "iane";
const texto4 = `oi tudo bem ${pessoa}`;

Usa crases (``) em vez de aspas.

Permite interpolação de variáveis dentro da string.

Trabalhando com NaN

const valor = NaN;
const valor1 = Number("iane");
console.log(valor);
console.log(valor1);
console.log(Number.isNaN(valor)); // Verifica se o valor é NaN

Escopo de Bloco

{
    const nome3 = "iane";
}
console.log(valor1);

Variáveis declaradas dentro de {} têm escopo de bloco.



