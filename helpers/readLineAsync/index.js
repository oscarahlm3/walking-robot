const readLine = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readLineAsync = (question) => {
  return new Promise((resolve) => {
    readLine.question(question, resolve);
  });
};

module.exports = readLineAsync;
