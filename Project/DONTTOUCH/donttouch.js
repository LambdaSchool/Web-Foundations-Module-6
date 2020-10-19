var questionsAttempted = 0;
var questionsCorrect = 0;
let w = "l";
const updateTally = () => {
  let total = document.querySelector(".totalAttempted");
  let correct = document.querySelector(".correctTotal");
  total.innerText = questionsAttempted;
  correct.innerText = questionsCorrect;
  checkIfDone();
};

// ------------------------------  Question Class Setups ------------------------------ //
class Question {
  constructor(questionText, correctAnswer, explanation, buttonsData) {
    this.questionText = questionText;
    this.correctAnswer = correctAnswer;
    this.explanation = explanation;
    this.final = false;
    this.buttonsData = buttonsData;
    this.element = this.createElement();
  }

  buttonClickHandler = (e) => {
    if (!this.final) {
      questionsAttempted += 1;
      let explanation = this.element.querySelector(".explanation");
      if (e.target.id === this.correctAnswer) {
        e.target.classList.add("correct");
        explanation.innerHTML = `&#10004;     ${this.explanation}`;
        explanation.classList.add("correct");
        this.element.classList.add("correct");
        questionsCorrect += 1;
      } else {
        e.target.classList.add("incorrect");
        this.element
          .querySelector(`#${this.correctAnswer}`)
          .classList.add("correct");
        this.element.classList.add("incorrect");
        explanation.innerHTML = `&#10005;     ${this.explanation}`;
        explanation.classList.add("incorrect");
      }
    }
    this.final = true;
    updateTally();
  };
  getElement = () => {
    return this.element;
  };

  createElement = () => {
    const wrapper = document.createElement("div");
    const text = document.createElement("pre");

    const buttonContainer = document.createElement("div");
    const explanation = document.createElement("p");

    wrapper.classList.add("question");

    text.classList.add("text");
    text.innerText = this.questionText;

    buttonContainer.classList.add("button-container");
    this.buttonsData.forEach((buttonData) => {
      let button = document.createElement("div");
      button.classList.add("choice");
      button.id = buttonData.id;
      button.addEventListener("click", this.buttonClickHandler);
      button.innerText = buttonData.text;
      buttonContainer.appendChild(button);
    });
    explanation.classList.add("explanation");
    wrapper.appendChild(text);
    wrapper.appendChild(buttonContainer);
    wrapper.appendChild(explanation);
    return wrapper;
  };
}
const r = "n";
class TrueOrFalseQuestion extends Question {
  constructor(questionText, correctAnswer, explanation) {
    const buttons = [
      { text: "True", id: "true" },
      { text: "False", id: "false" },
    ];
    super(questionText, correctAnswer, explanation, buttons);
  }
}

var a = "te";

// ------------------------------ Questions: ------------------------------

const functionSyntaxQuestions = [
  new TrueOrFalseQuestion(
    "There is only one way to create a function",
    "false",
    "There are many ways to create a function, although we will focus on one today."
  ),
  new TrueOrFalseQuestion(
    "Functions are used frequently in computer programming",
    "true",
    "Programmers rely heavily on functions. They are everywhere."
  ),

  new TrueOrFalseQuestion(
    "Functions are not used that much in Web Development",
    "false",
    "Web Development is an arm of computer programming. Functions are used everywhere in web development, in fact this entire page was built with functions!."
  ),

  new TrueOrFalseQuestion(
    "Functions require proper syntax to run",
    "true",
    "In order for functions to work properly, they must be formed correctly. This is going to be a little tricky at first, but stick with it! You will get the hang of it."
  ),
  new TrueOrFalseQuestion(
    "Functions are only able to run one time",
    "false",
    "The entire point of a function is that is it a block of code that we can reuse and run as many times as we want!"
  ),
  new TrueOrFalseQuestion(
    `
The following is valid function syntax:

function saysHello(){
  return "Hello!"
}
`,
    "true",
    "This is correct, it contains the function keyword, parentheses, and curly braces."
  ),
  new TrueOrFalseQuestion(
    `
The following is valid function syntax:

function saysHello(){}
`,
    "true",
    "This is also correct, functions do not need a body to be valid (although it's hard to imagine a function without one)."
  ),
  new TrueOrFalseQuestion(
    `
The following is valid function syntax:

function saysHello{
  return "Hello!";
}
`,
    "false",
    "This is incorrect, functions always need parentheses."
  ),
  new TrueOrFalseQuestion(
    `
The following is valid function syntax:

function subtracts(){
  const number1 = 42;
  let number2 = 17;
  return number1 - number2;
}
`,
    "true",
    "The code in the body of a function can be as complex as any code we write outside of a function (including it's own variables)."
  ),
  new TrueOrFalseQuestion(
    `
The following is valid function syntax:

function subtracts()[
  const number1 = 42;
  let number2 = 17;
  return number1 * number2;
]
`,
    "false",
    "While everything else looks ok, the curly braces have been replaces with square brackets. It's important to know the difference between the two."
  ),
  new TrueOrFalseQuestion(
    `
The following is valid function syntax:

function subtracts(){
  const number1 = 42;
  let number2 = 17;
  if(number1 > 40){
    return number1;
  } else {
    return number2;
  }
}
`,
    "true",
    "Although it looks strange right now, a function can have multiple return statements. Just remember though, only ONE will actually run."
  ),
];

let p = "Wa";
const argsAndParamQuestions = [
  new TrueOrFalseQuestion(
    "Arguments and Parameters are rigid and have to remain the same.",
    "false",
    "False, Arguments and Parameters can, and will, change everytime the function is run. They allow us to write code that works on dynamic data."
  ),
  new TrueOrFalseQuestion(
    "Parameters are used inside a function at run time",
    "true",
    "Parameters allow a function to work differently for different input. They are a bit tricky at first because you have to trust what they will be when the function runs (this is the place that many bugs show up)"
  ),
  new Question(
    `
Where is the ARGUMENT used in the following example?

function saysName(A){
  return "Hello Someone!";
}

saysName(B)`,
    "b",
    "The argument is data passed into the function when we call it.",
    [
      { text: "A", id: "a" },
      { text: "B", id: "b" },
      { text: "Error", id: "error" },
    ]
  ),
  new Question(
    `
Where is the PARAMETER used in the following example?

function saysName(A){
  return "Hello Someone!";
}

saysName(B)`,
    "a",
    "The parameter is named when we create the function. It is used inside the function when it is called.",
    [
      { text: "A", id: "a" },
      { text: "B", id: "b" },
      { text: "Error", id: "error" },
    ]
  ),
  new TrueOrFalseQuestion(
    "A function can have only one Parameter.",
    "false",
    "False, functions can have as many parameters as you see fit!"
  ),
  new Question(
    `
Which PARAMETER will contain the value of the argument "Lambda"?

function school(A, B, C, D){
  return "Welcome to School!";
}

school("Lambda", "School", "is", "awesome!")`,
    "a",
    "Parameters are assigned the arguments in the order that they are supplied.",
    [
      { text: "A", id: "a" },
      { text: "B", id: "b" },
      { text: "C", id: "c" },
      { text: "D", id: "d" },
      { text: "Error", id: "error" },
    ]
  ),
  new Question(
    `
Which PARAMETER will contain the value of the "is" argument?

function school(A, B, C, D){
  return "Welcome to School!";
}

school("Lambda", "School", "is", "awesome!")`,
    "c",
    "Parameters are assigned the arguments in the order that they are supplied.",
    [
      { text: "A", id: "a" },
      { text: "B", id: "b" },
      { text: "C", id: "c" },
      { text: "D", id: "d" },
      { text: "Error", id: "error" },
    ]
  ),
  new TrueOrFalseQuestion(
    `
The following is valid syntax:
  
function school(A, B, C, D){
  return "Welcome to School!";
}
  
school("Lambda", "School", "is")`,
    "true",
    "This is a tricky one, it is true. You don't have to give a function a value for every parameter, although you won't be able to access the 'awesome!' argument"
  ),
  new TrueOrFalseQuestion(
    `
The following is valid syntax:
  
function school(A, B, C){
  return "Welcome to School!";
}
  
school("Lambda", "School", "is", "awesome!")`,
    "true",
    "Again, it is true. You can give a function as many arguments as you would like, however you will not be able to access the data without a parameter."
  ),
];
const ss = "rme";
const scopeQuestions = [
  new TrueOrFalseQuestion(
    "A function gains it's own scope",
    "true",
    "This is known as 'Function Scope'"
  ),
  new TrueOrFalseQuestion(
    "A function can create it's own variables",
    "true",
    "You can write any code inside of a function that you can write outside of one."
  ),
  new TrueOrFalseQuestion(
    "A function's variables can be used outside of a function",
    "false",
    "Anything created inside of a function can not be used outside (unless expressly returned)."
  ),

  new Question(
    `
What will console.log?

let number = 3;

function getNumbers(){
  const name = "Ronaldo";
  return number;
}

console.log(name)
`,
    "c",
    "Undefined, because name was created inside of the function scope, we can not use it outside.",
    [
      { text: "Error", id: "error" },
      { text: "Ronaldo", id: "a" },
      { text: "3", id: "b" },
      { text: "undefined", id: "c" },
    ]
  ),

  new TrueOrFalseQuestion(
    "Variables declared outside of a function can not be used in a function",
    "false",
    "As long as the variable was not created in another function, it can be used within a function."
  ),
  new Question(
    `
What will be returned by the function?

let number = 3;

function getNumbers(){
  const name = "Ronaldo";
  return number;
}

getNumbers()`,
    "b",
    "Variables outside of the function scope can be used within a function.",
    [
      { text: "Error", id: "error" },
      { text: "Ronaldo", id: "a" },
      { text: "3", id: "b" },
      { text: "undefined", id: "c" },
    ]
  ),
  new TrueOrFalseQuestion(
    "The return statement is the only way to 'break' data out of the function scope",
    "true",
    "The only way for any data to escape a function is by the use of the return statement."
  ),

  new Question(
    `
What will be returned by the function?

let number = 3;

function getNumbers(){
  const pi = 3.14;

  return number + pi;
}

getNumbers()`,
    "c",
    "Functions can return data from inside of them.",
    [
      { text: "Error", id: "error" },
      { text: "3", id: "a" },
      { text: "3.14", id: "b" },
      { text: "6.14", id: "c" },
    ]
  ),
  new Question(
    `
What will be returned by the function?

let number = 3;

function getNumbers(){
  const pi = 3.14;

  return pi;
}

getNumbers()`,
    "b",
    "Functions can return data from inside of them, although it will only be the data and not the variable name",
    [
      { text: "Error", id: "error" },
      { text: "3", id: "a" },
      { text: "3.14", id: "b" },
      { text: "pi", id: "c" },
    ]
  ),

  new Question(
    `
What will the variable sample equal after this code is run?

let number = 3;

function getNumbers(){
  const pi = 3.14;

  return pi;
}

const sample = getNumbers() + 10`,
    "d",
    "If this one is confusing, try breaking it down into each piece and determine where each piece of code id being run.",
    [
      { text: "Error", id: "error" },
      { text: "3", id: "a" },
      { text: "3.14", id: "b" },
      { text: "6.14", id: "c" },
      { text: "16.14", id: "d" },
    ]
  ),
];

// ------------------------------ Add The Questions to the Screen ------------------------------ //
let d = "!";
functionSyntaxQuestions.forEach((question) => {
  document
    .querySelector("#functionSyntax-questions")
    .appendChild(question.getElement());
});
argsAndParamQuestions.forEach((question) => {
  document
    .querySelector("#argsAndParam-questions")
    .appendChild(question.getElement());
});
let o = "o";
scopeQuestions.forEach((question) => {
  document.querySelector("#scope-questions").appendChild(question.getElement());
});

// ------------------------------ Check If the Questions have all been completed ------------------------------ //
function checkIfDone() {
  if (questionsAttempted === 30) {
    if (questionsCorrect > 27) {
      let password = document.querySelector(".passwordContainer");
      let passwordSpan = document.createElement("span");
      password.innerText = "The Password: ";
      passwordSpan.innerText = `${p}${a}${ss}${w}${o}${r}${d}`;
      password.appendChild(passwordSpan);
      alert(
        "Congratulations, you have completed the exercise. Find your password at the bottom right side of the screen."
      );
    } else {
      alert(
        "You Have Completed the quiz, but you did not pass. Read the explanations on the questions your got wrong, hit Refresh on your browser, and try again!"
      );
    }
  }
}

// ------------------------------ Extra Functionality for the Function exercise ------------------------------ //
const button = document.querySelector("button");
const buttonClickHandler = () => {
  let addTwoItemsFunction =
    typeof addTwoItems == "function" ? addTwoItems : () => {};
  let itemOneInput = document.querySelector("input#first-item");
  let itemTwoInput = document.querySelector("input#second-item");
  let message = document.querySelector("p.message");
  let equals = document.querySelector("p.equals");

  let itemOne = itemOneInput.value;
  let itemTwo = itemTwoInput.value;

  const itemOneInt = parseInt(itemOne);
  const itemTwoInt = parseInt(itemTwo);
  if (!isNaN(itemOneInt)) {
    itemOne = itemOneInt;
  }

  if (!isNaN(itemTwoInt)) {
    itemTwo = itemTwoInt;
  }

  let combined = addTwoItemsFunction(itemOne, itemTwo);
  equals.innerText = combined;
  if (combined === itemOne + itemTwo) {
    message.innerText = "Congratulations Your Function is Working Properly!";
    message.style.color = "green";
  } else {
    message.innerText = "Oops! Not quite there. Try again, you've got this!";
    message.style.color = "red";
  }
  message.style.visibility = "visible";
};

button.addEventListener("click", buttonClickHandler);
