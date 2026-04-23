function maiorNumero(a, b, c) {
    if (a > b && a > c) return a;
    if (b > c) return b;
    return c;
}

function ordemCrescente(a, b, c) {
    let numeros = [a, b, c];
    numeros.sort(function(x, y) {
        return x - y;
    });
    return numeros[0] + ", " + numeros[1] + ", " + numeros[2];
}

function ehPalindromo(str) {
    let texto = str.replace(/ /g, "").toLowerCase();
    let invertido = texto.split("").reverse().join("");
    return texto === invertido;
}

// Função 1 - resultado
function verificarMaior() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let n3 = Number(document.getElementById("num3").value);
    
    let resultado = maiorNumero(n1, n2, n3);
    document.getElementById("resultado1").innerHTML = "Maior: " + resultado;
}

// Função 2 - resultado
function ordenarNumeros() {
    let n1 = Number(document.getElementById("numA").value);
    let n2 = Number(document.getElementById("numB").value);
    let n3 = Number(document.getElementById("numC").value);
    
    let resultado = ordemCrescente(n1, n2, n3);
    document.getElementById("resultado2").innerHTML = "Ordem: " + resultado;
}

// Função 3 - resultado
function verificarPalindromo() {
    let texto = document.getElementById("texto").value;
    
    if (ehPalindromo(texto)) {
        document.getElementById("resultado3").innerHTML = "É palíndromo!";
    } else {
        document.getElementById("resultado3").innerHTML = "Não é palíndromo!";
    }
}