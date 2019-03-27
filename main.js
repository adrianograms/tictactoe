//Guarda a referencia de cada célula da tabela
var cells= [];
//Vetor de Controle dos elementos da tabela
var vetorTabuleiro= [2,2,2,2,2,2,2,2,2];
//Referencia aos botões de escolha (x,o)
var bx = document.getElementById('x');
var bc = document.getElementById('circle');
//div que contém a tabela e os botões
var core = document.getElementById('core');
//div que contém os botões
var b = document.getElementById('b');

//Vetor de controle de estados do jogo
var state = [1,2,3,4,5,6,7,8,9];
//Variavel de controle do estado atual
var i = 1;

//var placeholder = false;

//Armazena as referencias das células da tabela no vetor cells
//Além disso adiciona o evento onClick em cada célula
for (var i = 0; i < 9; i++) {
  cells[i] = document.getElementById('cell' + (i+1));
  cells[i].addEventListener("click",tclick);
}

//Váriavel de controle de inicio de jogo
var table = false;

//Função onClick dos botões (x,o)
//Esconde os botões e atribui true para variavel de controle de inicio de jogo
function action() {
  table = true;
  i = 0;
  bc.style.visibility = 'hidden';
  bx.style.visibility = 'hidden';
}

//Função onClick da s células da tabela
function tclick(){
    if(table){ //Só executa quando a variavel table é true, ou seja, quando o jogo foi iniciado
        if(!this.firstChild) { // Só pode ser clickavél as células em branco,
            if(state[i]%2) { //Se o resultado for diferente de zero é uma rodada impar, ou seja, é marcado x
              var img = document.createElement('img');
              img.src = "x.png";
              img.alt = "x";
              this.appendChild(img); // Adiciona uma imagem como filho
            }
            else {
              var img = document.createElement('img');
              img.src = "circle.png";
              img.alt = "o";
              this.appendChild(img);
            }
            i= (i+1)%10; // Avança para o próximo estado de jogo
            update(); //Chama a função que atualiza o vetor Controle dos elementos da tabela
            if(i == 9){ //Se i for igual a 9, isso quer dizer que a ultima jogada foi realizada e portanto o jogo reiniciará
              table = false;
              bc.style.visibility = 'visible';
              bx.style.visibility = 'visible';
              clean();
            }
        }
    }
}
//Função que reseta as váriaveis e vetores para um estado inicial de jogo
function clean () {
  for (var i = 0; i < 9; i++) {
    cells[i].innerHTML ="";
  }
  vetorTabuleiro= [2,2,2,2,2,2,2,2,2];
}
//Função que atualiza o vetor de controle dos elementos da tabela
function update (){
  for (var i = 0; i < 9; i++) {
    var child = cells[i].firstChild;
    if(child != null){
      if(child.alt == "x")
        vetorTabuleiro[i] = 3;

      else
        vetorTabuleiro[i] = 5;
    }
  }
}

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
    if(posicao <= 9) {
        if(vetorTabuleiro[posicao] == 2) {
            if(jogada%2 == 0)
                vetorTabuleiro[posicao - 1] = 5
            else
                vetorTabuleiro[posicao - 1] = 3
            return jogada++ // Retorna o valor da proxima jogada
        }
    }
    return jogada // Retorna a jogada atual, pois o movimento foi invalido

}


















/*   */
