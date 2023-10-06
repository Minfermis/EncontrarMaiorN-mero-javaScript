
const { gets, print } = require('./funcoes-auxiliares');

let maiorValor = 0;

for (let i= 0; i < 5; i++) {
    const numerosSorteado = gets();
    if (numerosSorteado > maiorValor) {
        maiorValor = numerosSorteado;
    }
}

print(maiorValor);

