altura = prompt("Digite sua altura: ");
peso = prompt("Digite seu peso: ");

a = parseFloat(altura);
p = parseFloat(peso);



imc = p / (Math.pow(a, 2));

function ClassificarIMC(imc){
    if (imc < 18,5){
        return "magreza";

    } else if (imc >= 18,5 && imc < 25){
        return "normal";

    } else if (imc >= 25 && imc < 30){
        return "sobrepeso";

    } else if (imc >= 30 && imc < 40){
        return "obesidade";

    }else{
        return "obesidade grave";
    }
}

    
alert( "Seu IMC é: " + imc.toFixed(2) + " " + ClassificarIMC());
