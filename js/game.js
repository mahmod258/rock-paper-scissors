let you = document.getElementById("you");
let opponent = document.getElementById("opponent");
let imgYou = document.getElementById("img-you");
let imgOpponent = document.getElementById("img-opponent");
let menu = document.getElementById("menu");
let refree = document.getElementById("refree");
let playAgain = document.getElementById("play-again");
let whoWin2 = document.getElementsByClassName("who-win");

let hello;
let weapons = [
  [1, `rock`],
  [2, `scissors`],
  [3, `paper`],
];
let score = document.getElementById("score");
let enemy;

function game(weapon) {
  let whoWin;

  enemy = weapons[Math.trunc(Math.random() * weapons.length)][1];
  if (weapon === `paper`) {
    if (enemy === `scissors`) {
      whoWin = `you lose`;
      score.innerHTML = parseInt(score.innerHTML) - 1;
    } else if (enemy === `rock`) {
      whoWin = `you win`;
      score.innerHTML = parseInt(score.innerHTML) + 1;
    } else if (enemy === weapon) {
      whoWin = `draw`;
    }
  } else if (weapon === `rock`) {
    if (enemy === `scissors`) {
      whoWin = `you win`;
      score.innerHTML = parseInt(score.innerHTML) + 1;
    } else if (enemy === `paper`) {
      whoWin = `you lose`;
      score.innerHTML = parseInt(score.innerHTML) - 1;
    } else if (enemy === weapon) {
      whoWin = `draw`;
    }
  } else if (weapon === `scissors`) {
    if (enemy === `rock`) {
      whoWin = `you lose`;
      score.innerHTML = parseInt(score.innerHTML) - 1;
    } else if (enemy === `paper`) {
      whoWin = `you win`;
      score.innerHTML = parseInt(score.innerHTML) + 1;
    } else if (enemy === weapon) {
      whoWin = `draw`;
    }
  }
  if (whoWin === `you lose`) {
    playAgain.style.color = `red`;
    opponent.classList.add("shadow");
  } else if (whoWin === `you win`) {
    playAgain.style.color = `green`;
    you.classList.add("shadow");
  } else {
    playAgain.style.color = `black`;
  }
  opponent.classList.add(`${enemy}-1`);
  console.log(weapon);
  console.log(enemy);
  you.classList.add(`${weapon}-1`);
  menu.style.display = `none`;

  result.style.display = `flex`;
  refree.innerHTML = whoWin.toUpperCase();
  imgYou.src = `https://rock-paper-scissors-kj.netlify.app/images/icon-${weapon}.svg`;
  imgOpponent.src = `https://rock-paper-scissors-kj.netlify.app/images/icon-${enemy}.svg`;
  console.log(`${whoWin.toUpperCase()}-${enemy}`);
}

function playNow() {
  menu.style.display = `flex`;
  result.style.display = `none`;
  you.classList.remove("shadow");
  you.className = ``;
  opponent.className = ``;
  you.classList.add("you");
  opponent.classList.add("opponent");
}
