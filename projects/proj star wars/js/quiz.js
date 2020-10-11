'use strict'

var gCurrQuestIdx = 0;
var correctAnswers = 0;
var isWrongOnce = false;
var gQuests = [{
        id: 1,
        question: 'What is the name of his son?',
        opts: ['Anakin Skywalker', 'Luke Skywalker'],
        correctOptIdx: 1
    },
    {
        id: 2,
        question: 'Who is this guy?',
        opts: ['One Of The Gremlins', 'Yoda The Jedai'],
        correctOptIdx: 1
    },
    {
        id: 3,
        question: 'What Is The Model Of This Robot?',
        opts: ['C3PO', 'R2D2'],
        correctOptIdx: 0
    }
];

playGame();

function playGame() {
    askQuestion(gCurrQuestIdx);
}


function askQuestion(QuestIdx) {
    init();
    var imgStr = './img/quiz/' + (QuestIdx + 1) + '.jpg';
    var elImg = document.querySelector('.main-img');
    elImg.src = imgStr;

    var elQuestion = document.querySelector('.question');
    var currQuestion = gQuests[QuestIdx].question;
    elQuestion.innerText = currQuestion;

    var currOpt1 = document.querySelector('.answer-1');
    var elAnswer1 = gQuests[QuestIdx].opts[0];
    var currOpt2 = document.querySelector('.answer-2');
    var elAnswer2 = gQuests[QuestIdx].opts[1];
    currOpt1.innerText = elAnswer1;
    currOpt2.innerText = elAnswer2;
}


function init() {
    var btn = document.querySelector('.answer-2');
    btn.style.backgroundColor = '#dfffff';
    var btn = document.querySelector('.answer-1');
    btn.style.backgroundColor = '#dfffff';
    isWrongOnce = false;
}


function submitAnswer(btn) {
    var submitedOpt = btn.id;
    var correctOpt = (gQuests[gCurrQuestIdx].correctOptIdx) ? 1 : 0;
    if (correctOpt === +submitedOpt) {
        gCurrQuestIdx++;
        if (isWrongOnce === false) {
            correctAnswers++;
        }
        if (gCurrQuestIdx === gQuests.length) {
            gameOver();
            return;
        }
        nextQuestion();
    } else {
        btn.style.backgroundColor = 'red';
        isWrongOnce = true;
    }
}


function nextQuestion() {
    askQuestion(gCurrQuestIdx);
}


function gameOver() {
    var elGameBody = document.querySelector('.game-body');
    elGameBody.style.display = 'none';
    var elGameOverMsg = document.querySelector('.game-over-msg');
    elGameOverMsg.style.display = 'block';
    showStats();
}


function showStats() {
    var hStats = document.querySelector('.game-over-stats');
    var statsStr = `You were right in ${correctAnswers} out of ${gQuests.length} questions`;
    hStats.innerText = statsStr;
}


function restart() {
    init();
    gCurrQuestIdx = 0;
    correctAnswers = 0;
    playGame();
    var elGameBody = document.querySelector('.game-body');
    elGameBody.style.display = 'block';
    var elGameOverMsg = document.querySelector('.game-over-msg');
    elGameOverMsg.style.display = 'none';
}