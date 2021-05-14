class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
  /**
   * Display phrase on game board
   */
  addPhraseToDisplay() {
    const mainContainer = document.querySelector(".main-container");
    const letters = this.phrase.split("");
    const divPhrase = document.createElement("div");
    divPhrase.id = "phrase";
    divPhrase.className = "section";
    const ul_list = document.createElement("ul");
    divPhrase.appendChild(ul_list);

    letters.forEach((letter) => {
      let letterList = document.createElement("li");
      if (letter === " ") {
        letterList.className = "space";
        letterList.textContent = letter;
        ul_list.appendChild(letterList);
      } else {
        letterList.classList = `hide letter ${letter}`;
        letterList.textContent = letter;
        ul_list.appendChild(letterList);
      }
    });
    mainContainer.appendChild(divPhrase);
    return;
    /**
     * will transform phrase into a list
     * each letter get his own li item
     * append id and class required
     *  */
  }

  /**
   * @param returns {boolean} Check if selected letter
   *  match the phrase
   */
  checkLetter() {
    //compare letter selected to phrase to guess
    //call for showMatchedLetter()
  }

  /*/
   * Show letter when guess called
   */
  showMatchedLetter() {
    /*find letter guessed position in phrase 
    Change class from hide to show
        & unhide letter */
  }
}
