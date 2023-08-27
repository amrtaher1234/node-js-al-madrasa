// input
// process of the input
// return is document is valid or not

const fs = require("fs");

// HELLO world -> hello world -> HeLLo WoRlD

function checkForRepeatedWords(text = "", word, threshhold = 3) {
  const regex = new RegExp(word, "gi");
  const matches = text.match(regex);
  return matches && matches.length >= threshhold;
}

function documentChecker(pathToFile, wordsToCheck = [], threshhold = 3) {
  const fileContent = fs.readFileSync(pathToFile, "utf-8");

  let isValidDocument = true;
  wordsToCheck.forEach((word) => {
    isValidDocument = !checkForRepeatedWords(fileContent, word, threshhold);

    if (isValidDocument === false) {
      return;
    }
    // check if the word is repeated threshhold times or not
  });

  return isValidDocument;
}

module.exports = documentChecker;
