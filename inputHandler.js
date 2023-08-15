// inputHandler.js
const readline = require("readline");

function askForFilePaths(callback) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const filePaths = [];

  function promptFilePath() {
    rl.question(
      "Enter the path to a text document (leave empty to finish): ",
      (filePath) => {
        if (filePath.trim() === "") {
          rl.close();
          callback(filePaths);
        } else {
          filePaths.push(filePath);
          promptFilePath();
        }
      },
    );
  }

  promptFilePath();
}

module.exports = {
  askForFilePaths,
};
