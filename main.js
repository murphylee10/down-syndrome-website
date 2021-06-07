var answers = ["mongolism", "nondisjunction", "mom", "celiac disease", "false", "60", "true", "echocardiogram", "karyotype", "false"];
var correspond = ["INDEX", "SCIENCE", "SCIENCE", "IMPACTS", "SCIENCE", "FUTURE", "TECHNOLOGIES", "TECHNOLOGIES", "TECHNOLOGIES", "FUTURE"]

var submitQuizButton = document.getElementById("submit");
submitQuizButton.addEventListener("click", function(event) {
    compareResults();
})

function compareResults() {
    var userResults = document.getElementsByClassName('answer');

    document.querySelectorAll('.check').forEach(e => e.remove());
    document.querySelectorAll('.cross').forEach(e => e.remove());

    for (var i = 0; i < userResults.length; i++) {
        if (userResults[i].value.toUpperCase() === answers[i].toUpperCase()) {
            let newSpan = document.createElement('span');
            newSpan.innerHTML = '✓';
            let question = document.getElementsByClassName("question");
            newSpan.classList.add('check')
            question[i].appendChild(newSpan);
        }
        else {
            let newSpan = document.createElement('span');
            newSpan.innerHTML = '✗  (check '.concat(correspond[i], ' for more insight)') ;
            let question = document.getElementsByClassName("question");
            newSpan.classList.add('cross')
            question[i].appendChild(newSpan);
        }
    }
}