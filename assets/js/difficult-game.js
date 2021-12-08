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
//     question: "Data passed into a function during invocation is called....",
//     choice1: "Function Execution",
//     choice2: "Function Data",
//     choice3: "Function Argument",
//     choice4: "Function Invocation",
//     answer: 3,
// }, 
// { 
//     question: "If a variable is declared inside a function, what is that variable called and can that variable be accessed outside the function?",
//     choice1: "Local Variable, Yes",
//     choice2: "Internal Variable, No",
//     choice3: "Internal Variable, Yes",
//     choice4: "Local Variable, No",
//     answer: 4, 
// },
// {
//     question: 'querySelectorAll() returns all HTML Elements that match a given css selector while querySelector()......',
//     choice1: 'returns the first HTML element that matches the CSS Selector',
//     choice2: 'deletes all elements that match the CSS Selector',
//     choice3: 'returns the last HTML element that matches the CSS Selector',
//     choice4: 'returns all elements that match the CSS Selector',
//     answer: 1,
// },    
// {
//     question: 'How does a WHILE loop start?',
//     choice1: 'while (i <= 10; i++)',
//     choice2: 'while (i <= 10)',
//     choice3: 'while i = 1 to 10',
//     choice4: 'while i = 10',
//     answer: 2,
// }, 
// {
//     question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
//     choice1: "if (i <> 5)",
//     choice2: "if (i != 5)",
//     choice3: "if i <> 5",
//     choice4: "if i =! 5",
//     answer: 2,
// },
// {
//     question: "How do you round the number 7.25, to the nearest integer?",
//     choice1: "round(7.25)",
//     choice2: "rnd(7.25)",
//     choice3: "Math.rnd(7.25)",
//     choice4: "Math.round(7.25)",
//     answer: 4,
// }, 
// {
//     question: "How do you find the number with the highest value of x and y?",
//     choice1: "Math.ceil(x, y)",
//     choice2: "Math.max(x, y) ",
//     choice3: "ceil(x, y)",
//     choice4: "top(x, y)",
//     answer: 2,
// },
// {
//     question: "How can you detect the client's browser name?",
//     choice1: "navigator.appName ",
//     choice2: "client.navName",
//     choice3: "browser.name",
//     choice4: "client.browser",
//     answer: 1,
// }, 
// {   
//     question: "Which event occurs when the user clicks on an HTML element?",
//     choice1: "onmouseclick",
//     choice2: "onmouseover",
//     choice3: "onchange",
//     choice4: "onclick",
//     answer: 4,
// },
// {
//     question: "How does a FOR loop start?",
//     choice1: "for i = 1 to 5",
//     choice2: "for (i <= 5; i++)",
//     choice3: "for (i = 0; i <= 5; i++)",
//     choice4: "for (i = 0; i <= 5)",
//     answer: 3,
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