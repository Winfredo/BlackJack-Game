
let player = {
  name: "Winfred",
  chips: 10,
};

let sum = 0;
let cards = [];
let blackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ":$" + player.chips;

function getRandomCard() {
  let randomNum = Math.floor(Math.random() * 13) + 1;
  if (randomNum == 1) {
    return 11;
  } else if (randomNum > 10) {
    return 10;
  } else {
    return randomNum;
  }
}

function StartGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  RenderGame();
}

function RenderGame() {
  cardsEl.innerText = "Cards: ";
  for (i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.innerText = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?😐";
    isAlive = true;
  } else if (sum === 21) {
    message = "Wohoo! Youve won🥳";
    blackJack = true;
  } else if (sum > 21) {
    message = "Youre out of the game.😔";
    isAlive = false;
  }

  messageEl.innerText = message;
}

function NewCard() {
  if (isAlive === true && blackJack === false) {
    let Card = getRandomCard();
    sum += Card;
    cards.push(Card);
    console.log(cards);
    RenderGame();
  }
}
