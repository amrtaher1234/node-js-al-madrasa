// main.js
const { isDocumentBad } = require("./documentChecker");
const { askForFilePaths } = require("./inputHandler");

const wordsToCheck = ["I believe", "I think"];
const repetitionThreshold = 3;

function processFiles(files) {
  files.forEach((filePath) => {
    const isBadDocument = isDocumentBad(filePath, wordsToCheck, repetitionThreshold);
    if (isBadDocument) {
      console.log(`The document "${filePath}" is considered bad due to word repetition.`);
    } else {
      console.log(
        `The document "${filePath}" is good; no excessive word repetition detected.`,
      );
    }
  });
}

askForFilePaths(processFiles);
