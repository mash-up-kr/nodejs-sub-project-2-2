#!/usr/bin/env node

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function randomChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function compare(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "비겼습니다!";
    } else if (userChoice === "바위") {
        if (computerChoice === "paper") {
            return "컴퓨터가 이겼습니다!";
        } else {
            return "사용자가 이겼습니다!";
        }
    } else if (userChoice === "보") {
        if (computerChoice === "scissors") {
            return "컴퓨터가 이겼습니다!";
        } else {
            return "사용자가 이겼습니다!";
        }
    } else if (userChoice === "가위") {
        if (computerChoice === "rock") {
            return "컴퓨터가 이겼습니다!";
        } else {
            return "사용자가 이겼습니다!";
        }
    }
}

rl.question("가위, 바위, 보! ", (userChoice) => {
    const computerChoice = randomChoice();
    console.log(`컴퓨터: ${computerChoice}`);
    console.log(compare(userChoice, computerChoice));
    rl.close();
});
