import readline from "readline";

export const Bem = async () => {
  // 게임 초기 설정
  const width = 10;
  const height = 10;
  let snake = [{ x: 5, y: 5 }];
  let food = { x: 2, y: 2 };
  let dx = 1;
  let dy = 0;
  let score = 0;

  // 게임 루프
  while (true) {
    // 콘솔 출력
    console.clear();
    console.log("Score: " + score);
    for (let y = 0; y < height; y++) {
      let row = "";
      for (let x = 0; x < width; x++) {
        let cell = " ";
        if (x === food.x && y === food.y) {
          cell = "o";
        } else {
          for (let i = 0; i < snake.length; i++) {
            if (x === snake[i].x && y === snake[i].y) {
              cell = "x";
            }
          }
        }
        row += cell;
      }
      console.log(row);
    }

    // 사용자 입력 처리
    let key = readline.keyIn("", { hideEchoBack: true, mask: "" });
    if (key === "w" && dy !== 1) {
      dx = 0;
      dy = -1;
    } else if (key === "a" && dx !== 1) {
      dx = -1;
      dy = 0;
    } else if (key === "s" && dy !== -1) {
      dx = 0;
      dy = 1;
    } else if (key === "d" && dx !== -1) {
      dx = 1;
      dy = 0;
    }

    // 뱀의 위치 갱신
    let head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);

    // 음식 먹기
    if (head.x === food.x && head.y === food.y) {
      score += 10;
      food = {
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height),
      };
    } else {
      snake.pop();
    }

    // 충돌 검사
    if (head.x < 0 || head.x >= width || head.y < 0 || head.y >= height) {
      console.log("Game Over!");
      break;
    }
  }
};
