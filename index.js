const readLineAsync = require("./helpers/readLineAsync");
const runGame = require("./runGame");

const start = async () => {
  try {
    while (true) {
      const input = await readLineAsync(
        "Enter '1' to start playing. Enter '2' to exit game."
      );

      switch (input) {
        case "1":
          await runGame();
          break;
        case "2":
          process.exit(0);
        default:
          console.log("You did not enter 1 or 2, try again.");
          break;
      }
    }
  } catch (err) {
    console.error(
      "Program stopped running beacuse of an encountered error.",
      err
    );
  }
};

start();
