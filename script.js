let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive  = false;
let message = "";
let msg = document.getElementById("msg");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let button = document.getElementById("button");
button.addEventListener("click", startGame);
let cardButton = document.getElementById("card-button");
cardButton.addEventListener("click", newCard)

function getRandomCard(){
    let randomNum = Math.floor(Math.random()*13) + 1;
    console.log(randomNum);
    if(randomNum === 1){
        return 11;
    }else if(randomNum > 10){
        return 10;
    }else{
        return randomNum;
    }
}


function startGame(){
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive  = true;
    renderGame();
}

function renderGame(){
    if(sum <= 20){
        message  = "Do you want to draw a new card?";
    }else if(sum == 21){
        message = "Wohoo! You've got Blackjack!";
        hasBlackjack = true;
    }else{
        message = "You're out of the game!";
        isAlive = false;
    }
    msg.textContent = message;
    sumEl.innerText = "Sum: "+sum;
    cardEl.textContent = "Cards: ";
    for(let i = 0; i< cards.length; i ++){
        cardEl.textContent += cards[i] + " ";
    }
}

function newCard(){
    if(isAlive == true && hasBlackjack == false){
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();
        console.log(cards);
    }
}