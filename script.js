function <tictactoe.html(Some text and markup)>(<arguments if any>)
{
//codes here
<optional return value>
}
<script type="text/javascript">

//Global Variables
var painted;
var content;
var winningCombinations;
var turn = 0;
var theCanvas;
var c;
var cxt;
var squaresFilled = 0;
var w;
var y;
var x = "x"
var o = "o"
var count = 0;
var o_win = 0;
var x_win = 0;


//Instanciate Arrays
window.onload=function(){

  painted = new Array();
  content = new Array();
  winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

  for(var l = 0; l <= 8; l++){
  painted[l] = false;
  content[l]='';
  }
}

//Game methods
function canvasClicked(canvasNumber){
  theCanvas = "canvas"+canvasNumber;
  c = document.getElementById(theCanvas);
  cxt = c.getContext("2d");

  if(painted[canvasNumber-1] ==false){
    if(turn%2==0){
      cxt.beginPath();
      cxt.moveTo(10,10);
      cxt.lineTo(40,40);
      cxt.moveTo(40,10);
      cxt.lineTo(10,40);
      cxt.stroke();
      cxt.closePath();
      content[canvasNumber-1] = 'X';
    }

    else{
      cxt.beginPath();
      cxt.arc(25,25,20,0,Math.PI*2,true);
      cxt.stroke();
      cxt.closePath();
      content[canvasNumber-1] = 'O';
    }

    turn++;
    painted[canvasNumber-1] = true;
    squaresFilled++;
    checkForWinners(content[canvasNumber-1]);

    if(squaresFilled==9){
      alert("THE GAME IS OVER!");
      location.reload(true);
    }

  }
  else{
    alert("THAT SPACE IS ALREADY OCCUPIED WITH YOUR HEART!");
  }

}

function checkForWinners(symbol){

  for(var a = 0; a < winningCombinations.length; a++){
  if(content[winningCombinations[a][0]]==symbol&&content[winningCombinations[a][1]]== symbol&&content[winningCombinations[a][2]]==symbol){
    alert(symbol+ " WON!");
    playAgain();
  }
  }

}

function playAgain(){
  y=confirm("PLAY AGAIN?");
  if(y==true){
    alert("O.K One more time");
    location.reload(true);
  }
  else{
    alert("SO LONG,SUCKER!");
}

}

function playAgain(){
  y=confirm("PLAY AGAIN?");// confirm will show a popup box with the values "OK" or "CANCEL", choosing ok will yield the value "true" to y, otherwise, false.
  if(y==true){

    alert("O.K. one more time");
    location.reload(true);//We reload the page automatically! Yeah, with all that crazy animation at the beginning.

  }

  else{

    alert("SO LONG,SUCKER!");//Don't want to quit? Prepare for a world of pain. This one I did not cover.

  }
}

