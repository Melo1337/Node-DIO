const player1 = {
    nome: "MARIO",
    velocidade: 4,
    manobra: 3,
    poder: 3,
    pontos: 0,
}

const player2 = {
    nome: "LUIDE",
    velocidade: 3,
    manobra: 4,
    poder: 4,
    pontos: 0,
}

function valorAleatorio(array) {
    const indiceAleatorio = Math.floor(Math.random() * array.length);
    return array[indiceAleatorio]
}

function rolarDado() {
    return Math.floor(Math.random() * 6) + 1
}

function gerarPista() {
    let random = Math.random(); // gera um valor quebrado aleatorio de 0.1 a 1.0
    let resultPista;

    switch (true) {
        case random < 0.33:
            resultPista = "reta";
            break; // obrigattorio colocar o back para parar
        case random < 0.66:
            resultPista = "curva";
            break;
        default:
            resultPista = "confronto";
            break;
    }
    return resultPista
}

function logResultadoDado(nomeJogador, resultadoDado, atributo, pontosAtributo, playerPontos) {
    console.log(`${nomeJogador} 🎲 rolou um dado de ${atributo} = ${resultadoDado} + ${pontosAtributo} = ${playerPontos}`)
}

function adicionarPontos() {

    pista = gerarPista()
    dadoPlayer1 = rolarDado()
    dadoPlayer2 = rolarDado()

    let pontosPlayer1 = 0;
    let pontosPlayer2 = 0;

    if (pista === "reta") {

        pontosPlayer1 = player1.velocidade + dadoPlayer1
        pontosPlayer2 = player2.velocidade + dadoPlayer2

        console.log(`Os personagens estao passando por uma ${pista}`)

        logResultadoDado(
            player1.nome,
            dadoPlayer1,
            "velocidade",
            player1.velocidade,
            pontosPlayer1
        )
        logResultadoDado(
            player2.nome,
            dadoPlayer2,
            "velocidade",
            player2.velocidade,
            pontosPlayer2
        )


    } else if (pista === "curva") {

        pontosPlayer1 = player1.manobra + dadoPlayer1
        pontosPlayer2 = player2.manobra + dadoPlayer2

        console.log(`Os personagens estao passando por uma ${pista}`)

        logResultadoDado(
            player1.nome,
            dadoPlayer1,
            "manobra",
            player1.manobra,
            pontosPlayer1
        )
        logResultadoDado(
            player2.nome,
            dadoPlayer2,
            "manobra",
            player2.manobra,
            pontosPlayer2
        )

    } else if (pista === "confronto") {

        console.log(`Os personagens estao passando por um ${pista}`)

        pontosPlayer1 = player1.poder + dadoPlayer1
        pontosPlayer2 = player2.poder + dadoPlayer2

        if (pontosPlayer1 > pontosPlayer2 && player2.pontos > 0) {
            player2.pontos--;
        } else if (pontosPlayer2 > pontosPlayer1 && player1.pontos > 0) {
            player1.pontos--;
        }

        logResultadoDado(
            player1.nome,
            dadoPlayer1,
            "poder",
            player1.poder,
            pontosPlayer1
        )

        logResultadoDado(
            player2.nome,
            dadoPlayer2,
            "poder",
            player2.poder,
            pontosPlayer2
        )
    }

    if (pista === "confronto") {
        if (pontosPlayer1 > pontosPlayer2) {
            console.log(`${player1.nome} venceu o confronto! ${player2.nome} perdeu 1 ponto`)
        } else if (pontosPlayer2 > pontosPlayer1) {
            console.log(`${player2.nome} venceu o confronto! ${player1.nome} perdeu 1 ponto`)
        } else if (pontosPlayer1 == pontosPlayer2) {
            console.log(`${player1.nome} e ${player2.nome} perderam 1 ponto!`)
        }
    } else {
        if (pontosPlayer1 > pontosPlayer2) {
            console.log(`${player1.nome} marcou 1 ponto!`)
            player1.pontos++
        } else if (pontosPlayer1 < pontosPlayer2) {
            console.log(`${player2.nome} marcou 1 ponto!`)
            player2.pontos++
        } else if (pontosPlayer1 == pontosPlayer2) {
            console.log(`${player1.nome} e ${player2.nome} marcaram 1 ponto!`)
            player1.pontos++
            player2.pontos++
        }
    }
}

function resultadoCorrida() {
    console.log("\n")
    console.log(`<------------------------------>`)
    console.log(`Resultado final:`)
    console.log(`${player1.nome}: ${player1.pontos} ponto(s)`)
    console.log(`${player2.nome}: ${player2.pontos} ponto(s)`)

    console.log(`\n`)

    if (player1.pontos > player2.pontos)
        console.log(`${player1.nome} venceu a corrida! Parabens!`)
    else if (player2.pontos > player1.pontos)
        console.log(`${player2.nome} venceu a corrida! Parabens!`)
    else console.log(`${player1.nome} e ${player2.nome} empataram!`)
}

(function rodarCorrida() {

    console.log(`\n 🚨🏁 Corrida entre ${player1.nome} e ${player2.nome} iniciando... 🚨🏁`)

    for (let i = 0; i < 5; i++) {

        console.log("\n")
        console.log(`<----------- Rodada ${i + 1} ----------->`)
        console.log("\n")
        adicionarPontos()
    }

    resultadoCorrida()
})();

