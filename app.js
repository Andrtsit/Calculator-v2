`use strict`;
const app = function () {
  const btnsAll = document.querySelectorAll(`button`);
  const btnsNumbers = document.querySelectorAll(`.number`);
  const btnsOther = document.querySelectorAll(`.other`);
  const display = document.querySelector(`.display`);
  const clear = document.getElementById(`clear`);
  const equals = document.getElementById(`equals`);
  const backspace = document.getElementById(`backspace`);
  const dot = document.getElementById(`dot`);

  let calculation = ``;

  const makeResult = function () {
    if (calculation.includes(`+`)) {
      const [first, second] = calculation.split(`+`);
      const number1 = Number(first);
      const number2 = Number(second);
      calculation = number1 + number2;
      calculation = calculation.toString();
      display.textContent = calculation;
      console.log(calculation);
    } else if (calculation.includes(`-`)) {
      const [first, second] = calculation.split(`-`);
      const number1 = Number(first);
      const number2 = Number(second);
      calculation = number1 - number2;
      calculation = calculation.toString();
      display.textContent = calculation;
    } else if (calculation.includes(`*`)) {
      const [first, second] = calculation.split(`*`);
      const number1 = Number(first);
      const number2 = Number(second);
      console.log(number1, number2);
      calculation = number1 * number2;
      calculation = calculation.toString();
      display.textContent = calculation;
    } else if (calculation.includes(`/`)) {
      const [first, second] = calculation.split(`/`);
      const number1 = Number(first);
      const number2 = Number(second);
      if (number2 === 0) {
        alert(`lol dude cmon who divides by 0 , rewrite now`);
        calculation = ``;
        display.textContent = calculation;
      } else {
        calculation = number1 / number2;
        calculation = calculation.toString();
        display.textContent = calculation;
      }
    } else if (calculation.includes(`%`)) {
      const [first, second] = calculation.split(`%`);
      const number1 = Number(first);
      const number2 = Number(second);
      calculation = number1 % number2;
      calculation = calculation.toString();
      display.textContent = calculation;
    }
  };

  btnsNumbers.forEach((btn) =>
    btn.addEventListener(`click`, function () {
      calculation += btn.textContent;
      display.textContent = calculation;
    })
  );
  btnsOther.forEach((btn) => {
    btn.addEventListener(`click`, function () {
      if (
        calculation.slice(-1).includes(`+`) ||
        calculation.slice(-1).includes(`-`) ||
        calculation.slice(-1).includes(`*`) ||
        calculation.slice(-1).includes(`/`) ||
        calculation.slice(-1).includes(`%`)
      ) {
        display.textContent = calculation;
      } else if (
        calculation.includes(`+`) ||
        calculation.includes(`-`) ||
        calculation.includes(`*`) ||
        calculation.includes(`/`) ||
        calculation.includes(`%`)
      ) {
        makeResult();
        calculation += btn.textContent;
        display.textContent = calculation;
      } else {
        calculation += btn.textContent;

        display.textContent = calculation;
        console.log(typeof calculation);
      }
    });
  });

  equals.addEventListener(`click`, makeResult);

  backspace.addEventListener(`click`, function () {
    const sliced = calculation.slice(0, -1);
    calculation = sliced;
    display.textContent = calculation;
  });

  document.addEventListener(`keydown`, function (e) {
    console.log(e.code);
    if (e.code === `Backspace`) {
      const sliced = calculation.slice(0, -1);
      calculation = sliced;
      display.textContent = calculation;
    } else if (
      e.code === `Digit1` ||
      e.code === `Digit2` ||
      e.code === `Digit3` ||
      e.code === `Digit4` ||
      e.code === `Digit5` ||
      e.code === `Digit6` ||
      e.code === `Digit7` ||
      e.code === `Digit8` ||
      e.code === `Digit9` ||
      e.code === `Digit0`
    ) {
      calculation += e.code.slice(-1);
      display.textContent = calculation;
    } else {
    }
  });

  clear.addEventListener(`click`, function () {
    display.textContent = ``;
    calculation = ``;
  });

  dot.addEventListener(`click`, function () {
    if (calculation.includes(`.`)) {
      calculation = calculation;
    } else {
      calculation += `.`;
      display.textContent = calculation;
    }
  });
};
app();
