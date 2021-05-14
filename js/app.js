const game = new Game();

const randomPhrase = game.getRandomPhrase();
const phrase = new Phrase(randomPhrase.phrase);
console.log(phrase.addPhraseToDisplay());
