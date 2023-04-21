// export { TextAdventures } from "./text-adventures";
import { Bem } from "./bem-game/bem.js";
import { BaseBall } from "./number-baseball/baseball.js";
import { RockScissorsPaper } from "./rock-scissors-paper/rock-scissors-paper.js";
import { TextAdventures } from "./text-adventures/index.js";
import readline from "readline";

const Games = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  console.log(
    "게임을 선택하세요. (1. 숫자야구 2. 가위바위보 3. 끝내기 4. BEM 5. 텍스트 어드벤처) "
  );
  rl.on("line", async (input) => {
    const answer = input;
    if (answer === "1") {
      BaseBall();
    } else if (answer === "2") {
      RockScissorsPaper();
    } else if (answer === "3") {
      rl.close();
    } else if (answer === "4") {
      Bem();
    } else if (answer === "5") {
      await TextAdventures();
    }
    console.log(
      "게임을 선택하세요. (1. 숫자야구 2. 가위바위보 3. 끝내기 4. BEM 5. 텍스트 어드벤처) "
    );
  });
};

Games();
