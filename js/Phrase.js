class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
  /**
   * Display phrase on game board
   */
  addPhraseToDisplay() {
    const letters = this.phrase.split("");
    const divPhrase = document.getElementById("phrase");
    const ul_list = divPhrase.firstElementChild;
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
    return;
  }

  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
  checkLetter(letter) {
    return this.phrase.includes(letter);
  }

  /*/
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter(letter) {
    const letters = document.querySelectorAll(".letter");
    for (let i = 0; i < letters.length; i++) {
      if (letter === letters[i].textContent) {
        letters[i].className = "show";
      }
    }
  }
}
