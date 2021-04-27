/* Ask the user if he wants to draw a card
if yes, add a card
tell him if he bust or not
make the PC also draw a card and decide to quit or not.
Try not to make the PC cheat, make some AI to play "intelligently"
Alternatively, use the default casino rule: the dealer keeps drawing until he reaches 15
When both players stop or bust ask if the player wants to play another round.
Update the user what happens all the time with prompts and alerts */

// => Do you want to draw a card? yes/no
// => If yes add a card, then alert: do you want to draw another card?
// => if yes, question, or else prompt win or bust
// if player confirms and total is under 21, loop continues
// => we start with the value of 2 random cards. Then draw a card and add it to the total.

// make the pc draw a card and decide to quit or not (play intelligently)
// and use default casino rule: keep drawing until he reaches 15

(function card() {
    let txt;
    if (confirm("Do you want to draw a card?")) {
        alert(`Do you want to draw another card?`);
    } else {
        alert(`More cake for me then :p !`);
    }
})();
