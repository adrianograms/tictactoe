var cells= [];

function main () {
  console.log(cells.length);
  for (var i = 0; i < 9; i++) {
    cells[i] = document.getElementById('cell' + (i+1));
    var j=i
    cells[i].onclick = function(){
      console.log(j)
    }
  }
}
main();
