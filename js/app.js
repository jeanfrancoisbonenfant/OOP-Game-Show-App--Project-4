//initialize futur game parameter.
let game;

/**
 * Click EventListener
 * Create a new Game.
 * Reset parameter from previous game
 * Start a new game.
 */
document.querySelector("#btn__reset").addEventListener("click", (e) => {
  game = new Game();
  game.resetGame();
  game.startGame();
});

// Access game key button
const keyboard = document.querySelectorAll("#qwerty button");
//initialize variable to contain event .target / .key
let guess;

/**
 * For loop through keys
 * listen for click event
 * Send parameter to the handleInteraction method
 */
for (let i = 0; i < keyboard.length; i++) {
  keyboard[i].addEventListener("click", (e) => {
    guess = e.target.textContent;
    game.handleInteraction(e.target, guess);
  });
}

/**
*** Exceed expectation Section ***

 * Keydown listener
 * look for spacebar or enter && a none initialized game to start a new one
 * Create a new Game.
 * Reset parameter from previous game
 * Start a new game.
 */
document.addEventListener("keydown", (e) => {
  if ((e.code === "Space" && !game) || (e.code === "Enter" && !game)) {
    game = new Game();
    game.resetGame();
    game.startGame();
  }
});

/**
 *** Exceed expectation Section ***
 *
 * Keydown listener
 * Check if game is initialize to avoid pre-game creation error
 * Store pressed key
 * Loop through game keys to find corresponding key
 * Send parameter to the handleInteraction method
 */
document.addEventListener("keydown", (e) => {
  if (!game) {
    return;
  } else {
    guess = e.key;
    for (let i = 0; i < keyboard.length; i++) {
      if (keyboard[i].textContent === guess) {
        game.handleInteraction(keyboard[i], guess);
      }
    }
  }
});
