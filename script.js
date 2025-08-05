const questions = [
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Mars", "Venus", "Jupiter"],
    answer: "Mars"
  },
  {
    category: "Geography",
    question: "What is the capital of France?",
    choices: ["Paris", "Rome", "Berlin"],
    answer: "Paris"
  },
  {
    category: "History",
    question: "Who was the first president of the United States?",
    choices: ["George Washington", "Abraham Lincoln", "Thomas Jefferson"],
    answer: "George Washington"
  },
  {
    category: "Sports",
    question: "How many players are there in a soccer team on the field?",
    choices: ["11", "9", "10"],
    answer: "11"
  },
  {
    category: "Literature",
    question: "Who wrote 'Romeo and Juliet'?",
    choices: ["William Shakespeare", "Jane Austen", "Mark Twain"],
    answer: "William Shakespeare"
  }
];

function getRandomQuestion(questionsArray) {
  const index = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[index];
}

function getRandomComputerChoice(choices) {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function getResults(questionObj, computerChoice) {
  if (computerChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  };
};
