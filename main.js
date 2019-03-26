var cells= [];



var bx = document.getElementById('x');
var bc = document.getElementById('circle');

var core = document.getElementById('core');
var b = document.getElementById('b')

var state = [1,2,3,4,5,6,7,8,9];

var i = 1;

var placeholder = false;

for (var i = 0; i < 9; i++) {
  cells[i] = document.getElementById('cell' + (i+1));
  cells[i].addEventListener("click",tclick);
}

var table = false;

function action() {
  table = true;
  i = 0;
  bc.style.visibility = 'hidden';
  bx.style.visibility = 'hidden';
}


function tclick(){
    if(table){
        if(this.textContent == "" ) {
            if(state[i]%2) {
              var img = document.createElement('img');
              img.src = "x.png";
              this.appendChild(img);
            }
            else {
              var img = document.createElement('img');
              img.src = "circle.png";
              this.appendChild(img);
            }
            i= (i+1)%10;
            if(i == 9){
              console.log("Restart");
              table = false;
              bc.style.visibility = 'visible';
              bx.style.visibility = 'visible';
              clean();
            }
        }
    }
}

function clean () {
  for (var i = 0; i < 9; i++) {
    cells[i].innerHTML ="";
  }
}

/*    */
