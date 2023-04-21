import readline from "readline";

export const BaseBall = async () => {
  function generateRandomNumber() {
    const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let randomNumber = "";

    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * digits.length);
      randomNumber += digits[randomIndex];
      digits.splice(randomIndex, 1);
    }

    return randomNumber;
  }

  function getGuess() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    return new Promise((resolve) => {
      rl.question("Guess a 3-digit number: ", (guess) => {
        rl.close();
        resolve(guess);
      });
    });
  }

  function getFeedback(secret, guess) {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < secret.length; i++) {
      if (secret[i] === guess[i]) {
        strikes++;
      } else if (secret.includes(guess[i])) {
        balls++;
      }
    }

    return { strikes, balls };
  }

  async function play() {
    const secret = generateRandomNumber();
    console.log("Welcome to Number Baseball!");

    let guesses = 0;
    while (true) {
      const guess = await getGuess();
      const feedback = getFeedback(secret, guess);
      guesses++;

      console.log(`Strikes: ${feedback.strikes}, Balls: ${feedback.balls}`);

      if (feedback.strikes === 3) {
        console.log(`Congratulations! You won in ${guesses} guesses!`);
        break;
      }
    }
  }

  play();
};
