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
   * Hide starting button and display game HTML
   */
  startGame() {
    /*getRandomPhrase()

    //this.activePhrase = result

    //display hidden letter box

    addPhraseToDisplay()*/
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
  handleInteraction() {
    //disable picked letter
    /*if wrong letter
        add Wrong class
        call removeLife()*/
    /*else if good letter
        dd chosen class
        showMatchedLetter()
            if checkForWin()
                gameOver()

            else
                n/s
            */
  }

  /**
   * When wrong answer remove life
   */
  removeLife() {
    /*  replace liveHeart.png
                by  lostHeart.png
        this.missed ++;
            if (this.missed === 5){
                gameOver()
            }
    */
  }
  /**
   * Check if player revealed all letter
   *@param @returns {boolean}
   */
  checkForWin() {
    //all letter revealed ? true : false;
  }
  /**
   * End game and display message Win / Lost!
   */
  gameOver() {
    /*
      display orinal starting screen
        hide game

        replace h1 textContent win or loss
        start overlay class win or lose
      
      */
  }
}
