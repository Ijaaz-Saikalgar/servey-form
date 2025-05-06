const nextBtn = document.getElementById("nextbtn");
const prevBtn = document.getElementById("prevbtn");
const container = document.getElementById("servey-container");
const radioCheck = document.getElementById("rate");
const questions = document.querySelectorAll(".question");
const ans = document.getElementsByName("ans");


var questionIndex = 0;

function fadeInOut() {
    container.className = 'servey-container fade'
    setTimeout(function () { container.className = 'servey-container' }, 600);
}

// next btn 
function nextQuestion() {
    questionIndex++;
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
        nextBtn.className = "btn next-hide";
    }
    console.log(questionIndex)
}

// prev btn
function prevQuestion() {
    questionIndex--;
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
    if (radioCheck.checked) {
        console.log("checked")
        fadeInOut();
        // clearCheck()
        setTimeout(function () {
            nextQuestion();
        }, 500)
    } else {
        console.log("unchecked")
    }
})




// function clearCheck() {
//     ans.forEach(element => {
//         element.checked = false;
//         console.log(element)
//     })
// }


