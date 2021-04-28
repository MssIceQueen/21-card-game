/* Ask the user if he wants to draw a card
if yes, add a card
tell him if he bust or not
make the PC also draw a card and decide to quit or not.
Try not to make the PC cheat, make some AI to play "intelligently"
Alternatively, use the default casino rule: the dealer keeps drawing until he reaches 15
When both players stop or bust ask if the player wants to play another round.
Update the user what happens all the time with prompts and alerts */

// create deck of cards
// => Do you want to draw a card? yes/no
// => If yes add a card, display total, then alert: do you want to draw another card?
// => if yes, question, or else alert win or bust
// if player confirms and total is under 21, loop continues
// => we start with the value of 2 random cards. Then draw a card and add it to the total.

// make the pc draw a card and decide to quit or not (play intelligently)
// and use default casino rule: keep drawing until he reaches 15

// we need two players: computer and player
let playerHand = [];
let playerScore = 0;
let deck = getDeck();

// computerHand & computerScore, get when player is done drawing
// compare

// declare winner
// reset



document.getElementById('start').onclick = startF;

function startF() {
    playerHand.push(getCard());
    playerHand.push(getCard());
    playerScore = getPlayerScore();
    console.log(playerHand);
    console.log(playerScore);
    playerDraw()
    }

function playerDraw() {
    while (confirm('Do you want to draw a card?')) {
        playerHand.push(getCard());
        playerScore = getPlayerScore();
        console.log(playerHand);
        console.log(playerScore);
    }


}

function getDeck() {
    let suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
    let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let deck = new Array();
    for (let i = 0; i < values.length; i++) {
        for (let x = 0; x < suits.length; x++) {
            let weight = parseInt(values[i]);
            if (values[i] == "J" || values[i] == "Q" || values[i] == "K")
                weight = 10;
            if (values[i] == "A")
                weight = 11;
            let card = {Value: values[i], Suit: suits[x], Weight: weight};
            deck.push(card);
        }
    }
    return deck;
}

function getCard() {
    const randomIndex = Math.floor(Math.random() * deck.length);
    let card = deck[randomIndex];
    return card;
}

function getPlayerScore() {
    let score = 0;
    playerHand.forEach((card) => {
        score += parseInt(card.Weight);
    });
    return score;

}


function compareScore() {
    getCompScore();
    if (compScore === 21) {
        console.log('Computer wins');
    }
    while (compScore < 17) {
        comp.push(drawCard());
        getCompScore();
        console.log('Computer drew a card');
    }
    if (compScore > 21) {
        console.log('Computer loses');
    } else if (compScore > playerScore) {
        alert('Computer wins');
    } else {
        alert('Player wins!');
    }

}
