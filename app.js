let listaDeNumerosSorteados =[];
let limiteNumeros = 3;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, text) {    
    let parargrafo = document.querySelector(tag);
    parargrafo.innerHTML = text;
}

function menssagenIncial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

menssagenIncial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativas';
        let fraseVitoria = `Parabéns você acertou o número com ${tentativas} ${palavraTentativa}`;

        exibirTextoNaTela('h1', 'Acertoooou');
        exibirTextoNaTela('p', fraseVitoria);

        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else if (chute > numeroSecreto){
        exibirTextoNaTela('h1', 'Errooooou');
        exibirTextoNaTela('p', `O numero secreto é menor que ${chute}`);
    } else {
        exibirTextoNaTela('h1', 'Errooooou');
        exibirTextoNaTela('p', `O numero secreto é maior que ${chute}`);
    }
    tentativas++;
    limparCampo();
}

function gerarNumeroAleatorio () {
    let numeroEscolhido = parseInt(Math.random() * limiteNumeros + 1);
    let qtnElementosNaLista = listaDeNumerosSorteados.length

    if (qtnElementosNaLista == limiteNumeros) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampo();

    menssagenIncial();

    document.querySelector('#reiniciar').setAttribute('disabled', true);
    // document.querySelector('#reiniciar').toggleAttribute('disabled');
}