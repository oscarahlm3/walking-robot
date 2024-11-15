const isStringValidNumber = require("../isStringValidNumber");

const extractStartPosition = (startPositionInput) => {
  const startPositionArray = startPositionInput.replaceAll(/\s/g, "").split("");
  const startX = Number(startPositionArray[0]);
  const startY = Number(startPositionArray[1]);
  const startDirection = startPositionArray[2];

  if (!isStringValidNumber(startX)) {
    throw "First position entered was not a valid number.";
  }

  if (!isStringValidNumber(startY)) {
    throw "Second position entered was not a valid number.";
  }

  const alphabeticLetterRegex = /[a-zA-Z]/;

  if (!alphabeticLetterRegex.test(startDirection)) {
    throw "Entered direction was not an alphabetic letter.";
  }

  return { startX, startY, startDirection };
};

module.exports = extractStartPosition;
