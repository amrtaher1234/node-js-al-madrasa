// input
// process of the input
// return is document is valid or not

const fs = require("fs");

function checkForRepeatedWords(text, word, threshhold) {
  return false;
}

function documentChecker(pathToFile, wordsToCheck = [], threshhold = 3) {
  const fileContent = fs.readFileSync(pathToFile, "utf-8");
  console.log(fileContent);

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

documentChecker("./test.txt");
