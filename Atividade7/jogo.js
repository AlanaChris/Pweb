let pontosJogador = 0;
let pontosComputador = 0;

function escolhaComputador() {
    const random = Math.random();
    
    if (random < 1/3) return 'pedra';
    if (random < 2/3) return 'papel';
    return 'tesoura';
}

function determinarVencedor(jogador, computador) {
    if (jogador === computador) return 'empate';
    
    if (jogador === 'pedra' && computador === 'tesoura') return 'jogador';
    if (jogador === 'tesoura' && computador === 'papel') return 'jogador';
    if (jogador === 'papel' && computador === 'pedra') return 'jogador';
    
    return 'computador';
}

function jogar(escolhaJogador) {
    const escolhaPC = escolhaComputador();
    const vencedor = determinarVencedor(escolhaJogador, escolhaPC);
    
    let mensagem = '';
    
    if (vencedor === 'empate') {
        mensagem = `Empate! Ambos escolheram ${escolhaJogador}`;
    } else if (vencedor === 'jogador') {
        mensagem = `Você venceu! ${escolhaJogador} ganha de ${escolhaPC}`;
        pontosJogador++;
    } else {
        mensagem = `Computador venceu! ${escolhaPC} ganha de ${escolhaJogador}`;
        pontosComputador++;
    }
    
    document.getElementById('resultado').textContent = mensagem;
    document.getElementById('pontosJogador').textContent = pontosJogador;
    document.getElementById('pontosComputador').textContent = pontosComputador;
}

function resetar() {
    pontosJogador = 0;
    pontosComputador = 0;
    document.getElementById('pontosJogador').textContent = '0';
    document.getElementById('pontosComputador').textContent = '0';
    document.getElementById('resultado').textContent = 'Placar zerado! Clique em um botão';
}