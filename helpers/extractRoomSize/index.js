const isStringValidNumber = require("../isStringValidNumber");

const extractRoomSize = (sizeInput) => {
  const sizeArray = sizeInput.replaceAll(/\s/g, "").split("");
  const roomWidth = Number(sizeArray[0]);
  const roomHeight = Number(sizeArray[1]);

  if (!isStringValidNumber(roomWidth)) {
    throw "The entered width was not a valid number.";
  }

  if (!isStringValidNumber(roomHeight)) {
    throw "The entered height was not a valid number.";
  }

  return { roomWidth, roomHeight };
};

module.exports = extractRoomSize;
