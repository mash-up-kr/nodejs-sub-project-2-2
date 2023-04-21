// const stories = require("./stories.json");
// const prompts = require("prompts");
import stories from "./stories.js";
import prompts from "prompts";

export const TextAdventures = async () => {
  let response = {};
  response.value = {};
  response.value.description = "스토리를 선택하세요!!";
  let node = stories.stories;

  function getValues(n) {
    let choices = [];
    for (let s of n) {
      choices.push({ title: s.title, value: s });
    }
    return choices;
  }

  /*Salif's coloring function*/
  function clr(text, color) {
    var code = { red: 91, green: 92, blue: 34, cian: 96, yellow: 93 }[color];
    if (code) return "\x1b[" + code + "m" + text + "\x1b[0m";
  }

  (async () => {
    while (true) {
      response = await prompts({
        type: "select",
        name: "value",
        message: response.value.description,
        choices: getValues(node),
        hint: "- Space to select. Return to submit",
      });
      if (response.value.over) {
        console.log(
          clr(response.value.description, response.value.win ? "green" : "red")
        );
        break;
      }
      node = response.value.answers;
    }
  })();
};
