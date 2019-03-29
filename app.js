let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result>p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");
//const reset_button=document.getElementById("reset-button");



function reset()
{
  userScore=0;
  computerScore=0;
}
userScore_span.innerHTML=userScore;

function convertToWord(letter)
{
  if(letter==="p") return "Paper";
  if(letter==="r") return "Rock";
  return "Scissors";
}

function win(userChoice,computerChoice)
{
  const smallUserWord="User".fontsize(3).sup();
  const smallCompWord="Comp".fontsize(3).sup();
  const userChoice_div=document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML=userScore;
  computerScore_span.innerHTML=computerScore;

  result_p.innerHTML=`${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} You Win!!.`;
  userChoice_div.classList.add('green-glow');
  setTimeout(function(){userChoice_div.classList.remove('green-glow')},400);





}

function lose(userChoice,computerChoice)
{
  const smallUserWord="User".fontsize(3).sup();
  const smallCompWord="Comp".fontsize(3).sup();
  const userChoice_div=document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML=userScore;
  computerScore_span.innerHTML=computerScore;

  result_p.innerHTML=`${convertToWord(userChoice)}${smallUserWord} loses ${convertToWord(computerChoice)}${smallCompWord} You Lost..`;
  userChoice_div.classList.add('red-glow');
  setTimeout(function(){userChoice_div.classList.remove('red-glow')},400);

}

function draw(userChoice,computerChoice)
{

  const smallUserWord="User".fontsize(3).sup();
  const smallCompWord="Comp".fontsize(3).sup();
  const userChoice_div=document.getElementById(userChoice);
  result_p.innerHTML=`${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord} Its a draw..`;
  userChoice_div.classList.add('gray-glow');
  setTimeout(function(){userChoice_div.classList.remove('gray-glow')},400);
}


function getComputerChoice()
{
  const choices=['r','p','s'];
  const randomNumber=Math.floor(Math.random()*3);
  return choices[randomNumber];
}



function game(userChoice)
{
  const computerChoice=getComputerChoice();

    switch (userChoice + computerChoice) {
      case "rs":
      case "pr":
      case "sp":
        win(userChoice,computerChoice);
        break;
      case "rp":
      case "sr":
      case "ps":
        lose(userChoice,computerChoice);
        break;

        case "rr":
        case "ss":
        case "pp":
          draw(userChoice,computerChoice);
          break;

    }

}



function main()
{
  rock_div.addEventListener('click', function()
  {
  game("r");

  })

  paper_div.addEventListener('click', function()
  {

  game("p");
  })

  scissor_div.addEventListener('click', function()
  {
  game("s");
  })
}


main();
