class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrase();
    this.activePhrase = null;
  }
  /**
   * @param @returns {Array}
   */
  createPhrase() {
    const phraseArray = [
      new Phrase("great work"),
      new Phrase("dreaming is living"),
      new Phrase("get your vaccine"),
      new Phrase("insane project"),
      new Phrase("be proud of you"),
    ];
    return phraseArray;
  }
  /**
   * Begins game by selecting a random phrase and displaying it to user
   */
  startGame() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
    const randomPhrase = this.getRandomPhrase();
    const phrase = new Phrase(randomPhrase.phrase);
    phrase.addPhraseToDisplay();
    this.activePhrase = phrase;
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    const index = Math.floor(Math.random() * this.createPhrase().length);
    return this.phrases[index];
  }

  /**
   * Handle game logic
   */
  handleInteraction(event, letter) {
    if (this.activePhrase.checkLetter(letter) === true) {
      event.className = "chosen";
      event.disabled = true;
      this.activePhrase.showMatchedLetter(letter);
      if (this.checkForWin()) {
        this.gameOver(true);
      }
    } else {
      event.className = "wrong";
      event.disabled = true;
      this.removeLife();
    }
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    const life = document.querySelectorAll(".tries img");

    if (life[this.missed].attributes.src.value === "images/liveHeart.png") {
      life[this.missed].attributes.src.value = "images/lostHeart.png";
      this.missed++;
      if (this.missed === 5) {
        this.gameOver(false);
      }
    }
  }
  /**
   * CChecks for winning move
   * @return {boolean} True if game has been won, false if game wasn't
   */
  checkForWin() {
    const letters = document.querySelectorAll("#phrase ul li");
    const hiddenLetters = document.querySelectorAll(".hide");
    for (let i = 0; i < letters.length; i++) {
      if (hiddenLetters.length === 0) {
        return true;
      } else {
        return false;
      }
    }
  }
  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(result) {
    const overlay = document.getElementById("overlay");
    const message = document.querySelector("#game-over-message");
    const button = document.querySelector("#btn__reset");
    button.textContent = "Play again!";
    button.style.backgroundColor = "gold";
    overlay.style.display = "";

    if (result) {
      overlay.className = "win";
      message.textContent = "🎉 Great job! 🎉";
    } else {
      overlay.className = "lose";
      message.textContent = "Sorry, better luck next time!";
    }
  }
  /**
   * @return {reset}
   */
  resetGame() {
    const divPhrase = document.getElementById("phrase");
    const ul_list = divPhrase.firstElementChild;
    const guessList = ul_list.children;

    for (let i = guessList.length - 1; i >= 0; i--) {
      ul_list.removeChild(guessList[i]);
    }

    const keyRow = document.querySelectorAll(".keyrow button");
    for (let i = 0; i < keyRow.length; i++) {
      keyRow[i].className = "key";
      keyRow[i].disabled = "";
    }

    this.missed = 0;

    const life = document.querySelectorAll(".tries img");
    for (let i = 0; i < life.length; i++) {
      life[i].attributes.src.value = "images/liveHeart.png";
    }
  }
}
