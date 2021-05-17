class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
  /**
   * Split picked phrase in single caracter array
   * Create Li element for each letter
   * append letters to ul element
   * Give proper className to space & letter
   */
  addPhraseToDisplay() {
    const letters = this.phrase.split("");
    const divPhrase = document.getElementById("phrase");
    const ul_list = divPhrase.firstElementChild;

    letters.forEach((letter) => {
      let letterList = document.createElement("li");
      letterList.textContent = letter;
      ul_list.appendChild(letterList);

      if (letter === " ") {
        letterList.className = "space";
      } else {
        letterList.classList = `hide letter ${letter}`;
      }
    });
    return;
  }

  /**
   * Checks if current phrase includes picked letter
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
