num1 = prompt("Digite um numero: ");
num2 = prompt("Digite outro numero: ");

a = parseFloat(num1);
b = parseFloat(num2);


subtracao = a - b;
produto = a * b;
divisao = a/b;
resto = a%b;
soma = a + b;

alert("soma: " + soma);
alert("subtração: " + subtracao);
alert("produto: " + produto);
alert("divisão: " + divisao.toFixed(2));
alert("resto: " + resto);
