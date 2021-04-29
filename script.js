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

let compHand = [];
let compScore = 0;

// add hold function to the cancel option and start computer drawing
// computerHand & computerScore, get when player is done drawing
// compare
// while confirm add card
// visualise => show scores

// declare winner
// reset

// adding function to the start button
document.getElementById('start').onclick = startF;
document.getElementById('draw').onclick = playerDraw;
document.getElementById('hold').onclick = compDraw;
/*reset button still needed*/

// to deal 2 cards to the player at the start of the game, to get the current score and to update the page
function startF() {
    playerHand.push(getCard());
    playerHand.push(getCard());
    playerScore = getPlayerScore();
    updatePage();
}

// if the players score is under 21 and he confirms then het gets a card and his new score is displayed
function playerDraw() {
    updatePage();
    if (confirm('Do you want to draw a card?'+ playerScore)){
        playerHand.push(getCard());
        playerScore = getPlayerScore();
        updatePage();
        console.log(playerHand);
        updatePage();
        console.log(playerScore);
        playerDraw();
    }
}

// upon pushing the hold button the computer receives 2 cards, checks the score and will draw another one as long as his score is under 15
function compDraw() {
    compHand.push(getCard());
    compHand.push(getCard());
    compScore = getCompScore();
    while (compScore < 15) {
        compHand.push(getCard());
        compScore = getCompScore();
    }
    updatePage();
    compareScore();
    updatePage();
}

// to create a card deck
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

// function to get a random card
function getCard() {
    const randomIndex = Math.floor(Math.random() * deck.length);
    let card = deck[randomIndex];
    return card;
}

// calculates the score of the players hand
function getPlayerScore() {
    let score = 0;
    playerHand.forEach((card) => {
        score += parseInt(card.Weight);
    });
    return score;

}

// calculates the score of the computers hand
function getCompScore() {
    let score = 0;
    compHand.forEach((card) => {
        score += parseInt(card.Weight);
    });
    return score;
}

// compares the score form the computer and the player to see who has won
/* get the compareScore in order - at the moment it doesn't display the winner correctly*/
function compareScore() {
    getCompScore();
    if ((compScore === 21) || (compScore > playerScore)) {
        alert('Computer wins');
    }
    if (compScore > 21) {
        alert('Computer loses');
    } else {
        alert('Player wins!');
    }

}

function updatePage() {
    let hand = "";
    playerHand.forEach((card) => {
        hand += 'Suit: ' + card.Suit + ' value: ' + card.Value;
    });
    document.getElementById('player').innerHTML = hand;
    document.getElementById('playerScore').innerHTML = playerScore;
    let comhand = "";
    compHand.forEach((card) => {
        comhand += 'Suit:' + card.Suit + 'value:' + card.Value;
    });
    document.getElementById('computer').innerHTML = comhand;
    document.getElementById('compScore').innerHTML = compScore;

}

