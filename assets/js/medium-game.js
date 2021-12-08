// const question = document.querySelector("#question");
// const choices = Array.from(document.querySelectorAll(".choice-text"));
// const progressText = document.querySelector("#progressText");
// const scoreText = document.querySelector("#score");
// const progressBarFull = document.querySelector("#progressBarFull");

// let currentQuestion = {}
// let acceptingAnswers = true
// let score = 0
// let questionCounter = 0
// let availableQuestions = []

// let questions = [
    
// {
//     question: "How do you create a function in JavaScript?",
//     choice1: "function myFunction()",
//     choice2: "function:myFunction()",
//     choice3: "function = myFunction()",
//     choice4: "function; myFunction()",
//     answer: 1,
// }, 
// { 
//     question: "How do you call a function named 'myFunction'?",
//     choice1: "callMyFunction()",
//     choice2: "call myFunction()",
//     choice3: "call function myFunction()",
//     choice4: "myFunction()",
//     answer: 4, 
// },
// {
//     question: 'How do you write "Hello World" in an alert box?',
//     choice1: 'msgBox("Hello World");',
//     choice2: 'alert("Hello World"); ',
//     choice3: 'alertBox("Hello World");',
//     choice4: 'msg("Hello World");',
//     answer: 2,
// },    
// {
//     question: "How can you add a comment in a JavaScript?",
//     choice1: "//This is a comment",
//     choice2: "<!--This is a comment-->",
//     choice3: "'This is a comment",
//     choice4: "'This is a comment//",
//     answer: 1,
// }, 
// {
//     question: "How to insert a comment that has more than one line?",
//     choice1: "/This comment has more than one line/",
//     choice2: "//This comment has more than one line//",
//     choice3: "<!--This comment has more than one line-->",
//     choice4: "/*This comment has more than one line*/",
//     answer: 4,
// },
// {
//     question: "How do you declare a JavaScript variable?",
//     choice1: "v carName;",
//     choice2: "variable carName;",
//     choice3: "var carName; ",
//     choice4: "variableCarName;",
//     answer: 3,
// }, 
// {
//     question: "What is the most correct way to change the second value in an array to 1? The array is: var arr =[2,4,5,6]?",
//     choice1: "arr[2] = [2, 1, 5, 6]",
//     choice2: "arr[1] = 1",
//     choice3: "arr[2] = 1",
//     choice4: "arr = [2, 1, 5, 6]",
//     answer: 2,
// },
// {
//     question: "Which operator is used to assign a value to a variable?",
//     choice1: "=",
//     choice2: "x",
//     choice3: "-",
//     choice4: "*",
//     answer: 1,
// }, 
// {   
//     question: "What will the following code return: Boolean(10 > 9)",
//     choice1: "True",
//     choice2: "False",
//     choice3: "NaN",
//     choice4: "Null",
//     answer: 1,
// },
// {
//     question: "Floating Point Numbers can also be called...",
//     choice1: "Whole numbers",
//     choice2: "Decimal numbers",
//     choice3: "Even numbers",
//     choice4: "Odd numbers",
//     answer: 2,
// },
// ]

// const SCORE_POINTS = 10
// const MAX_QUESTIONS = 10

// startGame = () => {
//     questionCounter = 0
//     score = 0
//     availableQuestions = [...questions]
//     getNewQuestion()
// }

// getNewQuestion = () => {
//     if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
//         localStorage.setItem("mostRecentScore", score)

//         return window.location.assign("/end.html")
//     }

//     questionCounter++
//     progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
//     progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

//     const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
//     currentQuestion = availableQuestions[questionsIndex]
//     question.innerText = currentQuestion.question

//     choices.forEach(choice => {
//         const number = choice.dataset["number"]
//         choice.innerText = currentQuestion["choice" + number]
//     })

//     availableQuestions.splice(questionsIndex, 1)

//     acceptingAnswers = true
// }

// choices.forEach(choice => {
//     choice.addEventListener("click", e => {
//         if(!acceptingAnswers) return

//         acceptingAnswers = false
//         const selectedChoice = e.target
//         const selectedAnswer = selectedChoice.dataset["number"]

//         let classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect"

//         if(classToApply === "correct") {
//             incrementScore(SCORE_POINTS)
//         }

//         selectedChoice.parentElement.classList.add(classToApply)

//         setTimeout(() => {
//             selectedChoice.parentElement.classList.remove(classToApply)
//             getNewQuestion()

//         }, 1000)
    
//     })
// })

// incrementScore = num => {
//     score +=num
//     scoreText.innerText = score
// }

// startGame()