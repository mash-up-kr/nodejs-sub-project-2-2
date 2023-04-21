// export { TextAdventures } from "./text-adventures";
import { Bem } from "./bem-game/bem";
import { BaseBall } from "./number-baseball/baseball";
import { RockScissorsPaper } from "./rock-scissors-paper/rock-scissors-paper";
import { TextAdventures } from "./text-adventures/index";
// export { TextAdventures } from "./text-adventures/index";
// export { Bem } from "./bem-game/bem";
// export { BaseBall } from "./number-baseball/baseball";
// export { RockScissorsPaper } from "./rock-scissors-paper/rock-scissors-paper";
export const Games = async () => {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question(
    "게임을 선택하세요. (1. 숫자야구 2. 가위바위보 3. 끝내기 4. BEM 5. 텍스트 어드벤처) ",
    (answer) => {
      if (answer === "1") {
        BaseBall();
      } else if (answer === "2") {
        RockScissorsPaper();
      } else if (answer === "3") {
        rl.close();
      } else if (answer === "4") {
        Bem();
      } else if (answer === "5") {
        TextAdventures();
      }
      rl.close();
    }
  );
};
