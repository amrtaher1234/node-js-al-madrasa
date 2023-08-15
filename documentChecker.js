// documentChecker.js
const fs = require("fs");

function countWordOccurrences(text, word) {
  const regex = new RegExp(word, "gi");
  const occurrences = (text.match(regex) || []).length;
  return occurrences;
}

function isDocumentBad(filePath, wordsToCheck, threshold) {
  try {
    const fileContent = fs.readFileSync(filePath, "utf8");

    for (const word of wordsToCheck) {
      const occurrences = countWordOccurrences(fileContent, word);
      if (occurrences > threshold) {
        return true;
      }
    }

    return false;
  } catch (error) {
    console.error("Error reading the file:", error);
    return false;
  }
}

module.exports = {
  isDocumentBad,
};
