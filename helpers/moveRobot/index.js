const directionTranslations = {
  N: [0, -1],
  E: [1, 0],
  S: [0, 1],
  W: [-1, 0],
};

const leftTurn = {
  N: "W",
  W: "S",
  S: "E",
  E: "N",
};

const rightTurn = {
  N: "E",
  E: "S",
  S: "W",
  W: "N",
};

const moveRobot = (command, currX, currY, currDirection) => {
  const moveCommand = command.toUpperCase();
  let newX = currX;
  let newY = currY;
  let newDirection = currDirection.toUpperCase();

  switch (moveCommand) {
    case "F":
      const move = directionTranslations[newDirection];

      if (!move) {
        throw `Could not read move for direction: ${newDirection}`;
      }

      const [moveX, moveY] = move;
      newX = currX + moveX;
      newY = currY + moveY;
      break;
    case "L":
      newDirection = leftTurn[newDirection];
      break;
    case "R":
      newDirection = rightTurn[newDirection];
      break;
  }

  return { newX, newY, newDirection };
};

module.exports = moveRobot;
