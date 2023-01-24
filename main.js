const keys = document.querySelectorAll(".keys__key");
const operators = document.querySelectorAll("#operator");
const numbers = document.querySelectorAll("#number");
const display = document.querySelector(".display--current");
const topDisplay = document.querySelector(".display--last");
const clearAll = document.querySelector(".keys__key--all-clear");
const clearLast = document.querySelector(".keys__key--backspace");
const answer = document.querySelector(".keys__key--ANS");
const percent = document.querySelector(".keys__key--percent");
const plusMinus = document.querySelector(".keys__key--plus-minus");
const equals = document.querySelector(".keys__key--equal");

//Refactoring code could lead to an array of selected consts that could be called when appropriate.

// constants for storing a memory of buttons pressed
let displayArr = [];
let storageNumberArr = [];
let activeNumberArr = [];
let operatorArr = [];
// let percentArr = [0]; //for unfinished percent button
let totalNumber = 0;
let previousEqArr = [[], [], []]; // stores storageNumberArr, operatorArray, activeNumberArray for second line display

//opperators have their own class
//number have their own class as their innerText can be used and stored
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    if ((event.target.innerText == ".") & activeNumberArr.includes(".")) {
      //Stops multiple "." in one line
    } else if (event.target.innerText == "&#8508") {
      //attempt to use Math.PI as a number.
      displayArr.push(event.target.innerText);
      activeNumberArr.push(Math.PI);
      console.log(activeNumberArr);
      display.innerText = displayArr.join("");
    } else {
      displayArr.push(event.target.innerText);
      activeNumberArr.push(event.target.innerText);
      display.innerText = displayArr.join("");
    }
  });
});

// +,-s,*,/
operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    if ((operatorArr == 0) & (activeNumberArr.length > 0)) {
      //when there is no operator on screen the calculator will display the last operator pressed
      displayArr.push(event.target.innerText);
      storageNumberArr = [...activeNumberArr];
      activeNumberArr = [];
      operatorArr[0] = event.target.innerText;
      // console.log(displayArr)
    } else if ((operatorArr == 0) & (activeNumberArr == 0)) {
      //when there is no operator or number on screen the operator button won't work as its not acting on anything
    } else if ((operatorArr.length == 1) & (activeNumberArr == 0)) {
      //displays the most recent operator pushed after activeNumber has been stored
      displayArr.pop();
      displayArr.push(event.target.innerText);
      operatorArr[0] = event.target.innerText;
    } else {
      // when there are two seperate numbers on screen and an operator they are equated
      if (operatorArr[0] == "*") {
        totalNumber =
          Number(storageNumberArr.join("")) * Number(activeNumberArr.join(""));
      } else if (operatorArr[0] == "/") {
        if (Number(activeNumberArr.join("")) == 0) {
          //gives Error when dividing by 0
          totalNumber = "Error";
        } else {
          totalNumber =
            Number(storageNumberArr.join("")) /
            Number(activeNumberArr.join(""));
        }
      } else if (operatorArr[0] == "+") {
        totalNumber =
          Number(storageNumberArr.join("")) + Number(activeNumberArr.join(""));
      } else if (operatorArr[0] == "-") {
        totalNumber =
          Number(storageNumberArr.join("")) - Number(activeNumberArr.join(""));
      }
      displayArr.push("=");
      topDisplay.innerText = displayArr.join(""); //displays previous equation in top display
      previousEqArr[0] = [...storageNumberArr];
      previousEqArr[1] = [...operatorArr[0]];
      previousEqArr[2] = [...activeNumberArr]; //storage of previous equation. Not used in submitted solution. Inteded for equation recal button
      storageNumberArr = totalNumber.toString().split(""); //storage of solution on display
      activeNumberArr = [];
      operatorArr[0] = event.target.innerText;
      displayArr = [...storageNumberArr];
      displayArr.push(event.target.innerText);
      
    }
    display.innerText = displayArr.join("");
  });
});

plusMinus.addEventListener("click", (event) => {
  if ((operatorArr == 0) & (activeNumberArr.length == 0)) {
  } else if ((operatorArr == 0) & (activeNumberArr.length != 0)) {
    activeNumberArr = (-1 * Number(activeNumberArr.join("")))
      .toString()
      .split("");
    displayArr = [...activeNumberArr];
    display.innerText = displayArr.join("");
  } else if ((operatorArr != 0) & (activeNumberArr.length == 0)) {
    activeNumberArr.push("-");
    displayArr.push("-");
    display.innerText = displayArr.join("");
  } else {
    if (activeNumberArr.join("") == "-") {
      activeNumberArr.pop();
      displayArr.pop();
      display.innerText = displayArr.join("");
    } else {
      //case of an activenumber and an operator
      displayArr = displayArr.splice(0, storageNumberArr.length + 1);
      activeNumberArr = (-1 * Number(activeNumberArr.join("")))
        .toString()
        .split("");
      displayArr = displayArr.concat(activeNumberArr);
      display.innerText = displayArr.join("");
    }
  }
});

/* Percent Button initial psuedo code. Required multiple checks of current display array...
and other variables leading to a spaghetti code of arrays.

percent.addEventListener("click", (event)=>{
    // displayArr.push(event.target.innerText)
    // display.innerText = displayArr.join("")
    if operatorArr == 0 activeNumberArr == 0
     percentArr[0] = 0
     else if operatorArr == 0 activeNumberArr >0
     percentArr[0] = 1
     else if operatorArr > 0 activeNumberArr ==0
     nothing
     else if operatorArr > 0 activeNumberArr > 0
     percentArr[0] = 2

}
    displayArr.push(event.target.innerText)
    activeNumberArr.push(event.target.innerText)
    display.innerText = displayArr.join("")
})  */

answer.addEventListener("click", () => {
  let totalNumberArr = totalNumber.toString().split("");
  if (totalNumber >= 0) {
    displayArr = displayArr.concat(totalNumberArr);
    activeNumberArr = activeNumberArr.concat(totalNumberArr);
    display.innerText = displayArr.join("");
  } else if ((totalNumber < 0) & (operatorArr != 0)) {
    if (activeNumberArr.length == 0) {
      activeNumberArr = [...totalNumberArr];
      displayArr = displayArr.concat(totalNumberArr);
      display.innerText = displayArr.join("");
    } else {
      activeNumberArr = [...totalNumberArr];
      displayArr = displayArr.splice(0, storageNumberArr.length + 1);
      displayArr = displayArr.concat(activeNumberArr);
      display.innerText = displayArr.join("");
    }
  }
});

equals.addEventListener("click", () => {
  if (operatorArr == 0) {
    totalNumber = Number(activeNumberArr.join(""));
  } else if (operatorArr[0] == "*") {
    totalNumber =
      Number(storageNumberArr.join("")) * Number(activeNumberArr.join(""));
  } else if (operatorArr[0] == "/") {
    if (Number(activeNumberArr.join("")) == 0) {
      totalNumber = "NaN";
    } else {
      totalNumber =
        Number(storageNumberArr.join("")) / Number(activeNumberArr.join(""));
    }
  } else if (operatorArr[0] == "+") {
    totalNumber =
      Number(storageNumberArr.join("")) + Number(activeNumberArr.join(""));
  } else if (operatorArr[0] == "-") {
    totalNumber =
      Number(storageNumberArr.join("")) - Number(activeNumberArr.join(""));
  }
  previousEqArr[0] = [...storageNumberArr];
  previousEqArr[1] = [...operatorArr];
  previousEqArr[2] = [...activeNumberArr];
  displayArr.push("=");
  topDisplay.innerText = displayArr.join("") + totalNumber;
  activeNumberArr = totalNumber.toString().split("");
  operatorArr = [];
  displayArr = [...activeNumberArr];
  display.innerText = displayArr.join("");
});

clearAll.addEventListener("click", () => {
  displayArr = [];
  storageNumberArr = [];
  activeNumberArr = [];
  operatorArr = [];
  totalNumber = 0;
  topDisplay.innerText = displayArr.join("");
  display.innerText = displayArr.join("");
});

clearLast.addEventListener("click", () => {
  if (displayArr.length == 0) {
    displayArr = [];
  } else {
    if ((operatorArr.length == 1) & (activeNumberArr.length == 0)) {
      operatorArr = [];
      activeNumberArr = [...storageNumberArr];
      storageNumberArr = [];
      displayArr = [...activeNumberArr];
    } else if ((operatorArr.length == 1) & (activeNumberArr.length > 0)) {
      displayArr.pop();
      activeNumberArr.pop();
    } else {
      displayArr.pop();
      activeNumberArr.pop();
    }
  }
  display.innerText = displayArr.join("");
});
