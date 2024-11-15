const readLineAsync = require("./helpers/readLineAsync");
const moveRobot = require("./helpers/moveRobot");
const extractRoomSize = require("./helpers/extractRoomSize");
const extractStartPosition = require("./helpers/extractStartPosition");

const directions = {
  N: "north",
  E: "east",
  S: "south",
  W: "west",
};

const runGame = async () => {
  try {
    const sizeInput = await readLineAsync(
      "What should be the size of the room?"
    );
    const { roomWidth, roomHeight } = extractRoomSize(sizeInput);

    const startPositionInput = await readLineAsync(
      "Where should the robot start?"
    );
    const { startX, startY, startDirection } =
      extractStartPosition(startPositionInput);

    let currX = startX;
    let currY = startY;
    let currDirection = startDirection;

    const moveCommands = await readLineAsync(
      "How should the robot move? (Example: 'RLFRLLFFR')"
    );

    const regexLFR = new RegExp("^[lfr]+$", "i");

    if (!regexLFR.test(moveCommands)) {
      throw new Error(
        "Move commands was inputted in the wrong format. Only R, L and F are allowed."
      );
    }

    for (const command of moveCommands) {
      const { newX, newY, newDirection } = moveRobot(
        command,
        currX,
        currY,
        currDirection
      );

      const isOutsideBounds =
        newX < 0 || newX > roomWidth - 1 || newY < 0 || newY > roomHeight - 1;

      if (isOutsideBounds) {
        console.log("Robot has left the building! Try again.");
        process.exit(126);
      }

      currX = newX;
      currY = newY;
      currDirection = newDirection;
    }

    console.log(
      `Robot ended up at ${currX} ${currY}, facing ${
        directions[currDirection.toUpperCase()]
      }.`
    );

    return;
  } catch (err) {
    console.error("Game stopped running because of an encountered error:", err);
  }
};

module.exports = runGame;
