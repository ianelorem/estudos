const readlinesync= require ('readline-sync');
const salario =Number (readlinesync.question ('digite o salario do funcionario:'))

const aumento = (15/100) * salario
const novosalario = salario + aumento

console.log (`o novo salário é ${novosalario}`)