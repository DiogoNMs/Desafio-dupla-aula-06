let btnPar = document.getElementById('par');
let btnImpar = document.getElementById('impar');
let resultado = document.getElementById('resultado');

function jogar(escolhaJogador) {
    let resultadoDado = Math.floor(Math.random() * 6) + 1;

    if ((resultadoDado % 2 === 0 && escolhaJogador === 'par') || (resultadoDado % 2 !== 0 && escolhaJogador === 'ímpar')) {
        resultado.textContent = "Resultado do dado: " + resultadoDado + ". Você ganhou!";
    } else {
        resultado.textContent = "Resultado do dado: " + resultadoDado + ". Você perdeu!";
    }
}

btnPar.addEventListener('click', function() {
    jogar('par');
});

btnImpar.addEventListener('click', function() {
    jogar('impar');
});