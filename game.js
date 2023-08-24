class Jogador {
  constructor(nome) {
    this.nome = nome;
    this.arremessos = 0;
    this.flexoes = 0;
  }

  arremessar() {
    this.arremessos++;
    return Math.random() < 0.5; // 50% de chance de acertar o arremesso
  }

  fazerFlexoes(quantidade) {
    this.flexoes += quantidade;
  }

  resetar() {
    this.arremessos = 0;
    this.flexoes = 0;
  }
}
console.log(typeof Jogador);

function jogo() {
  const jogadores = [
    new Jogador("Jogador 1"),
    new Jogador("Jogador 2"),
    new Jogador("Jogador 3"),
    new Jogador("Jogador 4"),
    new Jogador("Jogador 5"),
  ];

  while (jogadores.length > 1) {
    for (let i = 0; i < jogadores.length; i++) {
      const jogadorAtual = jogadores[i];
      const acertouArremesso = jogadorAtual.arremessar();

      if (acertouArremesso) {
        console.log(`${jogadorAtual.nome} acertou o arremesso!`);

        for (let j = 0; j < jogadores.length; j++) {
          if (j !== i) {
            jogadores[j].fazerFlexoes(10);
          }
        }
      }
    }

    jogadores.sort((a, b) => b.flexoes - a.flexoes);

    // Remover jogadores que não conseguem mais fazer flexões
    while (
      jogadores.length > 0 &&
      jogadores[jogadores.length - 1].flexoes >= 100
    ) {
      jogadores.pop();
    }
  }

  console.log(`O vencedor é ${jogadores[0].nome}!`);
}

// Iniciar o jogo
jogo();
