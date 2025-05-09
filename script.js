const nextBtn = document.getElementById("nextbtn");
const prevBtn = document.getElementById("prevbtn");
const note = document.getElementById("note");
const container = document.getElementById("servey-container");
const radioChecks = document.querySelectorAll('input[name="ans"]');
const questions = document.querySelectorAll(".question");
const ans = document.getElementsByName("ans");

var questionIndex = 0;
var radioChecked = false;

function fadeInOut() {
    container.className = 'servey-container fade'
    setTimeout(function () { container.className = 'servey-container' }, 450);
}

// next btn 
function nextQuestion() {
    note.classList.remove("show-required");
    ++questionIndex;
    if (questionIndex == 0) {
        questions[questionIndex].className = "question";
    } else if (questionIndex == 1) {
        questions[0].className = "question";
        questions[questionIndex].className = "question display-question";
        prevBtn.className = "btn";
    } else if (questionIndex == 2) {
        questions[1].className = "question";
        questions[questionIndex].className = "question display-question";
    } else if (questionIndex == 3) {
        questions[2].className = "question";
        questions[questionIndex].className = "question display-question";
    } else if (questionIndex == 4) {
        questions[3].className = "question";
        questions[questionIndex].className = "question display-question";
    } else if (questionIndex == 5) {
        nextBtn.className = "btn next-hide";
        alert("Thank You!! The Servey has been recorded.")
    }
    console.log(questionIndex)

}

// prev btn
function prevQuestion() {
    --questionIndex;
    if (questionIndex == 0) {
        questions[1].className = "question";
        questions[questionIndex].className = "question display-question";
        prevBtn.className = "btn prev-hide";
    } else if (questionIndex == 1) {
        questions[2].className = "question";
        questions[questionIndex].className = "question display-question";
    } else if (questionIndex == 2) {
        questions[3].className = "question";
        questions[questionIndex].className = "question display-question";
    } else if (questionIndex == 3) {
        questions[4].className = "question";
        questions[questionIndex].className = "question display-question";
        nextBtn.className = "btn ";
    }
    console.log(questionIndex)
}

prevBtn.addEventListener("click", function () {
    fadeInOut();

    setTimeout(function () {
        prevQuestion();
    }, 500)
})

nextBtn.addEventListener("click", function () {
    radioChecks.forEach((radioCheck) => {
        if (radioCheck.checked) {
            radioChecked = true;
            radioCheck.checked = false;
        }
    })

    if (radioChecked) {
        note.classList.remove("show-required");
        if (questionIndex <= 3) {
            fadeInOut();
        } else null;
        setTimeout(function () {
            nextQuestion();
        }, 400)
    }
    else {
        note.className = "show-required";
    }
    radioChecked = false;
});



