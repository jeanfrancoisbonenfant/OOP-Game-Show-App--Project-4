let game;

document.querySelector("#btn__reset").addEventListener("click", (e) => {
  game = new Game();
  game.resetGame();
  game.startGame();
});
const keyboard = document.querySelectorAll("#qwerty button");
let guess;
for (let i = 0; i < keyboard.length; i++) {
  keyboard[i].addEventListener("click", (e) => {
    guess = e.target.textContent;
    game.handleInteraction(e.target, guess);
  });
}
document.querySelector("#btn__reset").addEventListener("keydown", (e) => {
  game = new Game();
  game.resetGame();
  game.startGame();
});

document.addEventListener("keydown", (e) => {
  guess = e.key;
  for (let i = 0; i < keyboard.length; i++) {
    if (keyboard[i].textContent === guess) {
      game.handleInteraction(keyboard[i], guess);
    }
  }
});
