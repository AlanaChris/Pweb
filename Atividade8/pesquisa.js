function iniciarPesquisa() {
    // Inicializando variáveis
    let somaIdades = 0;
    let idadeMaisVelha = 0;
    let idadeMaisNova = 999;
    let totalPessimo = 0;
    let totalOtimoBom = 0;
    let totalF = 0, totalM = 0, totalO = 0;

    // Coleta de dados das 45 pessoas
    for (let i = 1; i <= 45; i++) {
        let idade = parseInt(prompt(`Pessoa ${i} - Digite sua idade:`));
        let sexo = prompt(`Pessoa ${i} - Sexo (F/M/O):`).toUpperCase();
        let opiniao = parseInt(prompt(`Pessoa ${i} - Avaliação (4-Ótimo, 3-Bom, 2-Regular, 1-Péssimo):`));

        // Soma idades
        somaIdades += idade;

        // Idade mais velha e mais nova
        if (idade > idadeMaisVelha) idadeMaisVelha = idade;
        if (idade < idadeMaisNova) idadeMaisNova = idade;

        // Conta péssimo
        if (opiniao === 1) totalPessimo++;

        // Conta ótimo e bom
        if (opiniao === 4 || opiniao === 3) totalOtimoBom++;

        // Conta sexo
        if (sexo === 'F') totalF++;
        else if (sexo === 'M') totalM++;
        else if (sexo === 'O') totalO++;
    }

    // Cálculos finais
    let mediaIdade = somaIdades / 45;
    let porcentagemOtimoBom = (totalOtimoBom / 45) * 100;

    // Exibir resultados
    document.getElementById("resultados").style.display = "block";
    document.getElementById("conteudoResultados").innerHTML = `
        <p>Média da idade: ${mediaIdade.toFixed(1)} anos</p>
        <p>Idade da pessoa mais velha: ${idadeMaisVelha} anos</p>
        <p>Idade da pessoa mais nova: ${idadeMaisNova} anos</p>
        <p>Quantidade de pessoas que responderam PÉSSIMO: ${totalPessimo}</p>
        <p>Porcentagem de ÓTIMO e BOM:${porcentagemOtimoBom.toFixed(1)}%</p>
        <hr>
        <p>Número de mulheres: ${totalF}</p>
        <p>Número de homens: ${totalM}</p>
        <p>Número de outros: ${totalO}</p>
    `;
}