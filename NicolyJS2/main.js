import { numeroaleatorio, verificar } from './game.js';
import { escolhapalpite, exibirmensa, exibirtenta } from './ui.js';

const numeroDeTentativas = 5;

function iniciar() {
  const numero = numeroaleatorio();
  exibirmensa("Inicializando ...");

  for (let i = 0; i < numeroDeTentativas; i++) {
    let palpite = parseInt(escolhapalpite(), 10);
    if (verificar(numero, palpite)) {
      exibirmensa("Número correto!");
      break;
    } else if (numero < palpite) {
      exibirmensa(`Errado! ${palpite} é maior que o número do computador. Try again!`);
    } else {
      exibirmensa(`Errado! ${palpite} é menor que o número do computador Try again!`);
    }
    exibirtenta(i + 1, numeroDeTentativas);
  }

  exibirmensa(`Fim de jogo! O número era ${numero}.`);
}


window.iniciarJogo = iniciar;