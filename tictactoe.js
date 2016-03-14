
<SCRIPT>

/*
Code Written by Cory Fogliani (Email: cory@ijustdontcare.com)
Testers: Cory Fogliani, Chris Gordon
Featured on JavaScript Kit (http://javascriptkit.com)
For this and over 400+ free scripts, visit http://javascriptkit.com
*/

as
  else if(sqr2 == " X " && sqr3 == " X " && sqr1T == 0 && turn == 1)
  {
    document.tic.sqr1.value = " O "
    sqr1T = 1;
    turn = 0;
  }
  else if(sqr4 == " X " && sqr5 == " X " && sqr6T == 0 && turn == 1)
  {
    document.tic.sqr6.value = " O "
    sqr6T = 1;
    turn = 0;
  }
  else if(sqr5 == " X " && sqr6 == " X " && sqr4T == 0 && turn == 1)
  {
    document.tic.sqr4.value = " O "
    sqr4T = 1;
    turn = 0;
  }
  else if(sqr7 == " X " && sqr8 == " X " && sqr9T == 0 && turn == 1)
  {
    document.tic.sqr9.value = " O "
    sqr9T = 1;
    turn = 0;
  }
  else if(sqr8 == " X " && sqr9 == " X " && sqr7T == 0 && turn == 1)
  {
    document.tic.sqr7.value = " O "
    sqr7T = 1;
    turn = 0;
  }
  else if(sqr1 == " X " && sqr5 == " X " && sqr9T == 0 && turn == 1)
  {
    document.tic.sqr9.value = " O "
    sqr9T = 1;
    turn = 0;
  }
  else if(sqr5 == " X " && sqr9 == " X " && sqr1T == 0 && turn == 1)
  {
    document.tic.sqr1.value = " O "
    sqr1T = 1;
    turn = 0;
  }
  else if(sqr3 == " X " && sqr5 == " X " && sqr7T == 0 && turn == 1)
  {
    document.tic.sqr7.value = " O "
    sqr7T = 1;
    turn = 0;
  }
  else if(sqr7 == " X " && sqr5 == " X " && sqr3T == 0 && turn == 1)
  {
    document.tic.sqr3.value = " O "
    sqr3T = 1;
    turn = 0;
  }
  else if(sqr1 == " X " && sqr3 == " X " && sqr2T == 0 && turn == 1)
  {
    document.tic.sqr2.value = " O "
    sqr2T = 1;
    turn = 0;
  }
  else if(sqr4 == " X " && sqr6 == " X " && sqr5T == 0 && turn == 1)
  {
    document.tic.sqr5.value = " O "
    sqr5T = 1;
    turn = 0;
  }
  else if(sqr7 == " X " && sqr9 == " X " && sqr8T == 0 && turn == 1)
  {
    document.tic.sqr8.value = " O "
    sqr8T = 1;
    turn = 0;
  }
  else if(sqr1 == " X " && sqr7 == " X " && sqr4T == 0 && turn == 1)
  {
    document.tic.sqr4.value = " O "
    sqr4T = 1;
    turn = 0;
  }
  else if(sqr2 == " X " && sqr8 == " X " && sqr5T == 0 && turn == 1)
  {
    document.tic.sqr5.value = " O "
    sqr5T = 1;
    turn = 0;
  }
  else if(sqr3 == " X " && sqr9 == " X " && sqr6T == 0 && turn == 1)
  {
    document.tic.sqr6.value = " O "
    sqr6T = 1;
    turn = 0;
  }
  else if(sqr1 == " X " && sqr5 == " X " && sqr9T == 0 && turn == 1)
  {
    document.tic.sqr9.value = " O "
    sqr9T = 1;
    turn = 0;
  }
  else if(sqr4 == " X " && sqr7 == " X " && sqr1T == 0 && turn == 1)
  {
    document.tic.sqr1.value = " O "
    sqr1T = 1;
    turn = 0;
  }
  else if(sqr5 == " X " && sqr8 == " X " && sqr2T == 0 && turn == 1)
  {
    document.tic.sqr2.value = " O "
    sqr2T = 1;
    turn = 0;
  }
  else if(sqr6 == " X " && sqr9 == " X " && sqr3T == 0 && turn == 1)
  {
    document.tic.sqr3.value = " O "
    sqr3T = 1;
    turn = 0;
  }
  else if(sqr1 == " X " && sqr4 == " X " && sqr7T == 0 && turn == 1)
  {
    document.tic.sqr7.value = " O "
    sqr7T = 1;
    turn = 0;
  }
  else if(sqr2 == " X " && sqr5 == " X " && sqr8T == 0 && turn == 1)
  {
    document.tic.sqr8.value = " O "
    sqr8T = 1;
    turn = 0;
  }
  else if(sqr3 == " X " && sqr6 == " X " && sqr9T == 0 && turn == 1)
  {
    document.tic.sqr9.value = " O "
    sqr9T = 1;
    turn = 0;
  }
  else if(sqr1 == " X " && sqr9 == " X " && sqr5T == 0 && turn == 1)
  {
    document.tic.sqr5.value = " O "
    sqr5T = 1;
    turn = 0;
  }
  else if(sqr3 == " X " && sqr7 == " X " && sqr5T == 0 && turn == 1)
  {
    document.tic.sqr5.value = " O "
    sqr5T = 1;
    turn = 0;
  }
  else
  {
    AI()
  }
  check2()
}

function AI()
{
  vari()
  if(document.tic.sqr5.value == "     " && turn == 1)
  {
    document.tic.sqr5.value = " O "
    turn = 0
    sqr5T = 1
  }
  else if(document.tic.sqr1.value == "     " && turn == 1)
  {
    document.tic.sqr1.value = " O "
    turn = 0
    sqr1T = 1
  }
  else if(document.tic.sqr9.value == "     " && turn == 1)
  {
    document.tic.sqr9.value = " O "
    turn = 0
    sqr9T = 1
  }
  else if(document.tic.sqr6.value == "     " && turn == 1)
  {
    document.tic.sqr6.value = " O "
    turn = 0
    sqr6T = 1
  }
  else if(document.tic.sqr2.value == "     " && turn == 1)
  {
    document.tic.sqr2.value = " O "
    turn = 0
    sqr2T = 1
  }
  else if(document.tic.sqr8.value == "     " && turn == 1)
  {
    document.tic.sqr8.value = " O "
    turn = 0
    sqr8T = 1
  }
  else if(document.tic.sqr3.value == "     " && turn == 1)
  {
    document.tic.sqr3.value = " O "
    turn = 0
    sqr3T = 1
  }
  else if(document.tic.sqr7.value == "     " && turn == 1)
  {
    document.tic.sqr7.value = " O "
    turn = 0
    sqr7T = 1
  }
  else if(document.tic.sqr4.value == "     " && turn == 1)
  {
    document.tic.sqr4.value = " O "
    turn = 0
    sqr4T = 1
  }
  check2()
}

function reset()
{
  document.tic.sqr1.value = "     "
  document.tic.sqr2.value = "     "
  document.tic.sqr3.value = "     "
  document.tic.sqr4.value = "     "
  document.tic.sqr5.value = "     "
  document.tic.sqr6.value = "     "
  document.tic.sqr7.value = "     "
  document.tic.sqr8.value = "     "
  document.tic.sqr9.value = "     "
  sqr1T = 0
  sqr2T = 0
  sqr3T = 0
  sqr4T = 0
  sqr5T = 0
  sqr6T = 0
  sqr7T = 0
  sqr8T = 0
  sqr9T = 0
  vari()
  turn = 0
  moveCount = 0
}

function resetter()
{
  reset()
}
</SCRIPT>

<FORM NAME="tic" method="post">
<INPUT TYPE="button" NAME="sqr1" class="tictac" value="     " onClick="if(document.tic.sqr1.value == '     ' && turn == 0 && mode == 1) {document.tic.sqr1.value = ' X '; sqr1T = 1; turn = 1; vari(); check();} else if(document.tic.sqr1.value == '     ' && turn == 1 && mode == 2) {document.tic.sqr1.value = ' X '; sqr1T = 1; turn = 0; vari(); player1Check()} else if(document.tic.sqr1.value == '     ' && turn == 0 && mode == 2) {document.tic.sqr1.value = ' O '; sqr1T = 1; turn = 1; vari(); player1Check()} drawCheck()">
<INPUT TYPE="button" NAME="sqr2" class="tictac" value="     " onClick="if(document.tic.sqr2.value == '     ' && turn == 0 && mode == 1) {document.tic.sqr2.value = ' X '; sqr2T = 1; turn = 1; vari(); check();} else if(document.tic.sqr2.value == '     ' && turn == 1 && mode == 2) {document.tic.sqr2.value = ' X '; sqr2T = 1; turn = 0; vari(); player1Check()} else if(document.tic.sqr2.value == '     ' && turn == 0 && mode == 2) {document.tic.sqr2.value = ' O '; sqr2T = 1; turn = 1; vari(); player1Check()} drawCheck()">
<INPUT TYPE="button" NAME="sqr3" class="tictac" value="     " onClick="if(document.tic.sqr3.value == '     ' && turn == 0 && mode == 1) {document.tic.sqr3.value = ' X '; sqr3T = 1; turn = 1; vari(); check();} else if(document.tic.sqr3.value == '     ' && turn == 1 && mode == 2) {document.tic.sqr3.value = ' X '; sqr3T = 1; turn = 0; vari(); player1Check()} else if(document.tic.sqr3.value == '     ' && turn == 0 && mode == 2) {document.tic.sqr3.value = ' O '; sqr3T = 1; turn = 1; vari(); player1Check()} drawCheck()"><br />
<INPUT TYPE="button" NAME="sqr4" class="tictac" value="     " onClick="if(document.tic.sqr4.value == '     ' && turn == 0 && mode == 1) {document.tic.sqr4.value = ' X '; sqr4T = 1; turn = 1; vari(); check();} else if(document.tic.sqr4.value == '     ' && turn == 1 && mode == 2) {document.tic.sqr4.value = ' X '; sqr4T = 1; turn = 0; vari(); player1Check()} else if(document.tic.sqr4.value == '     ' && turn == 0 && mode == 2) {document.tic.sqr4.value = ' O '; sqr4T = 1; turn = 1; vari(); player1Check()} drawCheck()">
<INPUT TYPE="button" NAME="sqr5" class="tictac" value="     " onClick="if(document.tic.sqr5.value == '     ' && turn == 0 && mode == 1) {document.tic.sqr5.value = ' X '; sqr5T = 1; turn = 1; vari(); check();} else if(document.tic.sqr5.value == '     ' && turn == 1 && mode == 2) {document.tic.sqr5.value = ' X '; sqr5T = 1; turn = 0; vari(); player1Check()} else if(document.tic.sqr5.value == '     ' && turn == 0 && mode == 2) {document.tic.sqr5.value = ' O '; sqr5T = 1; turn = 1; vari(); player1Check()} drawCheck()">
<INPUT TYPE="button" NAME="sqr6" class="tictac" value="     " onClick="if(document.tic.sqr6.value == '     ' && turn == 0 && mode == 1) {document.tic.sqr6.value = ' X '; sqr6T = 1; turn = 1; vari(); check();} else if(document.tic.sqr6.value == '     ' && turn == 1 && mode == 2) {document.tic.sqr6.value = ' X '; sqr6T = 1; turn = 0; vari(); player1Check()} else if(document.tic.sqr6.value == '     ' && turn == 0 && mode == 2) {document.tic.sqr6.value = ' O '; sqr6T = 1; turn = 1; vari(); player1Check()} drawCheck()"><br />
<INPUT TYPE="button" NAME="sqr7" class="tictac" value="     " onClick="if(document.tic.sqr7.value == '     ' && turn == 0 && mode == 1) {document.tic.sqr7.value = ' X '; sqr7T = 1; turn = 1; vari(); check();} else if(document.tic.sqr7.value == '     ' && turn == 1 && mode == 2) {document.tic.sqr7.value = ' X '; sqr7T = 1; turn = 0; vari(); player1Check()} else if(document.tic.sqr7.value == '     ' && turn == 0 && mode == 2) {document.tic.sqr7.value = ' O '; sqr7T = 1; turn = 1; vari(); player1Check()} drawCheck()">
<INPUT TYPE="button" NAME="sqr8" class="tictac" value="     " onClick="if(document.tic.sqr8.value == '     ' && turn == 0 && mode == 1) {document.tic.sqr8.value = ' X '; sqr8T = 1; turn = 1; vari(); check();} else if(document.tic.sqr8.value == '     ' && turn == 1 && mode == 2) {document.tic.sqr8.value = ' X '; sqr8T = 1; turn = 0; vari(); player1Check()} else if(document.tic.sqr8.value == '     ' && turn == 0 && mode == 2) {document.tic.sqr8.value = ' O '; sqr8T = 1; turn = 1; vari(); player1Check()} drawCheck()">
<INPUT TYPE="button" NAME="sqr9" class="tictac" value="     " onClick="if(document.tic.sqr9.value == '     ' && turn == 0 && mode == 1) {document.tic.sqr9.value = ' X '; sqr9T = 1; turn = 1; vari(); check();} else if(document.tic.sqr9.value == '     ' && turn == 1 && mode == 2) {document.tic.sqr9.value = ' X '; sqr9T = 1; turn = 0; vari(); player1Check()} else if(document.tic.sqr9.value == '     ' && turn == 0 && mode == 2) {document.tic.sqr9.value = ' O '; sqr9T = 1; turn = 1; vari(); player1Check()} drawCheck()">
</form>
