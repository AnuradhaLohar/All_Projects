
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

async function APIData() {
    const quizData = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple'
    const res = await fetch(quizData)
    const data1 = await res.json()
    const questions = data1.results
    MainFun(questions);
}

APIData()

function MainFun(data) {

    function loadquiz() {
        deselectedAns()

        const currentQuestion = data[currentQuiz]
        let AllAnswers = [currentQuestion.correct_answer,currentQuestion.incorrect_answers[0],currentQuestion.incorrect_answers[1],currentQuestion.incorrect_answers[2]]
        AllAnswers.sort(() => Math.random() - 0.5)

        questionEl.innerHTML = data[currentQuiz].question
        a_text.innerHTML = data[currentQuiz].correct_answer
        b_text.innerHTML = data[currentQuiz].incorrect_answers[0]
        c_text.innerHTML = data[currentQuiz].incorrect_answers[1]
        d_text.innerHTML = data[currentQuiz].incorrect_answers[2]
    }
    loadquiz()

    function getSelected() {
        let answer
        answerEls.forEach(ans => {
            if (ans.checked) {
                answer = document.querySelector(`label[for=${ans.id}]`).innerText
            }
        })
        return answer;
    }

    function deselectedAns() {
        answerEls.forEach(ans => {
            ans.checked = false
        })
    }


    submitBtn.addEventListener('click', () => {
        const answer = getSelected()

        if (answer) {

            if (answer == data[currentQuiz].correct_answer) {
                score++
            }

            currentQuiz++;

            if (currentQuiz < data.length) {
                loadquiz();
            } else {
                quiz.innerHTML = `
            <h2>You Answered ${score}/${data.length} Questions Correctly</h2>
            <button onclick="location.reload()">Reload</button>
            `
            }
        }



    })
}

