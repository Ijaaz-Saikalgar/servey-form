
const nextBtn = document.getElementById("nextbtn");
const prevBtn = document.getElementById("prevbtn");
const note = document.getElementById("note");
const container = document.getElementById("servey-container");
const radioChecks = document.querySelectorAll('input[name="ans"]');
const questions = document.querySelectorAll(".question");
const ans = document.getElementsByName("ans");

let questionIndex = 0;
let checkedCondition = false;
let radioRecordes = [];

function fadeInOut() {
    container.className = 'servey-container fade'
    setTimeout(function () { container.className = 'servey-container' }, 450);
}

// next btn 
function nextQuestion() {
    note.classList.remove("show-required");
    ++questionIndex;

    if (questionIndex === 0) {
        questions[questionIndex].className = "question";
    } else if (questionIndex <= 4) {
        questions[questionIndex - 1].className = "question";
        questions[questionIndex].className = "question display-question";
        if (questionIndex === 1) prevBtn.className = "btn";
    } else if (questionIndex === 5) {
        nextBtn.className = "btn next-hide";
        alert("Thank You!! The Survey has been recorded.");
    }

}

// prev btn
function prevQuestion() {
    --questionIndex;
    switch (questionIndex) {
        case 0:
            questions[1].className = "question";
            questions[questionIndex].className = "question display-question";
            prevBtn.className = "btn prev-hide";
            break;
        case 1:
            questions[2].className = "question";
            questions[questionIndex].className = "question display-question";
            break;
        case 2:
            questions[3].className = "question";
            questions[questionIndex].className = "question display-question";
            break;
        case 3:
            questions[4].className = "question";
            questions[questionIndex].className = "question display-question";
            nextBtn.className = "btn ";
            break;
    }
}

prevBtn.addEventListener("click", function () {
    fadeInOut();
    setTimeout(function () {
        prevQuestion();

        const selectedIndex = radioRecordes[questionIndex] - 1;
        if (selectedIndex >= 0) {
            radioChecks[selectedIndex].checked = true;
        }
    }, 500)

})

function radioCheackUpdate(questionIndex) {
    radioChecks.forEach((radioCheck) => {

        if (radioCheck.checked) {
            radioRecordes[questionIndex] = +radioCheck.id.slice(1);
            checkedCondition = true;
            radioCheck.checked = false;
        }
    })
}


nextBtn.addEventListener("click", function () {
    radioCheackUpdate(questionIndex);

    if (checkedCondition) {
        note.classList.remove("show-required");

        if (questionIndex <= 3) {
            fadeInOut();
        }

        setTimeout(function () {
            nextQuestion();
            const selectedIndex = radioRecordes[questionIndex] - 1;
            radioChecks[selectedIndex].checked = true;
        }, 400);
    } else {
        note.className = "show-required";
    }

    checkedCondition = false;
});


