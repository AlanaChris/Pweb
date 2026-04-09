nome = prompt("Digite seu nome: ");

nota1 = prompt("Digite a nota 1: ");
nota2 = prompt("Digite a nota 2: ");
nota3 = prompt("Digite a nota 3: ");
nota4 = prompt("Digite a nota 4: ");

n1 = parseFloat(nota1);
n2 = parseFloat(nota2);
n3 = parseFloat(nota3);
n4 = parseFloat(nota4);

media = (n1 + n2 + n3 + n4)/4;

alert("A média das notas é: " + media.toFixed(2));