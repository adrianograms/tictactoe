function Faz2 (vetorTabuleiro) {
    // O valor retorna é o indice + 1, de acordo com a especificação do problema
    if(vetorTabuleiro[4] == 2 )
        return 5
    if(vetorTabuleiro[1] == 2)
        return 2
    if(vetorTabuleiro[3] == 2)
        return 4
    if(vetorTabuleiro[5] == 2)
        return 6
    if(vetorTabuleiro[7] == 2)
        return 8
    return 0 //Retorna 0 caso não haja posições em branco (excluindo os cantos)
}

function Ganha (vetorTabuleiro, jogador) {
    // O valor retorna é o indice + 1, de acordo com a especificação do problema
    valorVitoria = jogador*jogador*2 
    if(vetorTabuleiro[0]*vetorTabuleiro[1]*vetorTabuleiro[2] == valorVitoria) {
        for(let i =0; i< 4; i++)
            if(vetorTabuleiro[i] == 2)
                return i + 1
    }
    if(vetorTabuleiro[3]*vetorTabuleiro[4]*vetorTabuleiro[5] == valorVitoria) {
        for(let i =3; i< 6; i++)
            if(vetorTabuleiro[i] == 2)
                return i + 1
    }
    if(vetorTabuleiro[6]*vetorTabuleiro[7]*vetorTabuleiro[8] == valorVitoria) {
        for(let i =6; i< 9; i++)
            if(vetorTabuleiro[i] == 2)
                return i + 1
    }
    if(vetorTabuleiro[0]*vetorTabuleiro[4]*vetorTabuleiro[8] == valorVitoria) {
        for(let i =0; i< 9; i = i+4)
            if(vetorTabuleiro[i] == 2)
                return i + 1
    }
    if(vetorTabuleiro[2]*vetorTabuleiro[4]*vetorTabuleiro[6] == valorVitoria) {
        for(let i =2; i< 8; i = i+2)
            if(vetorTabuleiro[i] == 2)
                return i + 1
    }
    return 0 // Retrona 0 caso não haja ainda a possibilidade de ganhar

}

function Jogue(posicao, jogada, vetorTabuleiro) {
    if(n == 2) {
        if(jogada%2 == 0) 
            vetorTabuleiro[posicao - 1] = 5
        else
            vetorTabuleiro[posicao - 1] = 3
        return jogada++ // Retorna o valor da proxima jogada
    }
    return jogada // Retorna a jogada atual, pois o movimento foi invalido
    
}