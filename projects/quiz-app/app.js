//getting divs
const answersDiv = document.getElementById('answers');
const startDiv = document.getElementById('start');
const restartDiv = document.getElementById('restart');
const correctAnswerIs = document.querySelector('.correctAnswer');

//getting buttons
const answerButton = document.querySelector('.answer-btn');
const startButton = document.querySelector('.start-btn');
const restartButton = document.querySelector('.restart-btn');
const answerButtons = document.querySelectorAll('.answer-btn');
const nextButton = document.querySelector('.next-btn');

//getting title
const title = document.querySelector('.title');

//answers buttons
const firstButton = document.querySelector('.answerButtons :nth-child(1)');
const secondButton = document.querySelector('.answerButtons :nth-child(2)');
const thirdButton = document.querySelector('.answerButtons :nth-child(3)');
const fourthButton = document.querySelector('.answerButtons :nth-child(4)');


//questions array
var questionsArray = ['How many members do BTS have?', 'Who is the leader?', 'When did they debut?', 'Who hurt his shoulder during trainee days?', 'Who is the maknae?', 'Whos pet is Yeontan?', 'Best ship?'];
var randomQuestion;

//answers array
var answersArray = ['7', 'RM', '2013', 'Suga', 'Jungkook', 'V', 'vkook'];
var correctAnswer;

//count if there are questionsArray left and the score
var count = 0;
var score = 0;

//detected the given answer
var givenAnswer;

//flag to decide if a   buton is clickable or not
var clickable = true;



//hide buttons when the page load
answersDiv.style.display = 'none';
restartDiv.style.display = 'none';
correctAnswerIs.style.display = 'none';
nextButton.style.display = 'none';


function start() {
    //hide the coorect answer div when the question is shown
    correctAnswerIs.style.display = 'none';
    //check if there are questions left 
    if (count <= 6) {
        //change title into the random question
        randomQuestion = questionsArray[count];
        title.innerText = randomQuestion;

        //change the answers buttons text based on the question
        switch (randomQuestion) {
            case 'How many members do BTS have?':
                firstButton.innerText = '4';
                secondButton.innerText = '2';
                thirdButton.innerText = '7';
                fourthButton.innerText = '15';

                //check if the given answer is equal to the corret answer
                checkAnswer(firstButton,secondButton,fourthButton);
                break;

            case 'Who is the leader?':
                firstButton.innerText = 'Namjom';
                secondButton.innerText = 'Momo';
                thirdButton.innerText = 'RM';
                fourthButton.innerText = 'Taehyung';

                checkAnswer(firstButton,thirdButton,fourthButton);
                break;

            case 'When did they debut?':
                firstButton.innerText = '2000';
                secondButton.innerText = '2015';
                thirdButton.innerText = '2013';
                fourthButton.innerText = '2010';

                checkAnswer(firstButton,secondButton,fourthButton);
                break;

            case 'Who hurt his shoulder during trainee days?':
                firstButton.innerText = 'Namjoon';
                secondButton.innerText = 'Jungkook';
                thirdButton.innerText = 'Suga';
                fourthButton.innerText = 'Jimin';

                checkAnswer(firstButton,secondButton,fourthButton);
                break;

            case 'Who is the maknae?':
                firstButton.innerText = 'Bang Sihyuk';
                secondButton.innerText = 'Jin';
                thirdButton.innerText = 'Jungkook';
                fourthButton.innerText = 'Taehyung';

                checkAnswer(secondButton,thirdButton,fourthButton);
                break;

            case 'Whos pet is Yeontan?':
                firstButton.innerText = 'Jimin';
                secondButton.innerText = 'Suga';
                thirdButton.innerText = 'V';
                fourthButton.innerText = 'Taeyang';

                checkAnswer(secondButton,thirdButton,fourthButton);
                break;

            case 'Best ship?':
                firstButton.innerText = 'namjin';
                secondButton.innerText = 'vmin';
                thirdButton.innerText = 'vkook';
                fourthButton.innerText = 'yoonmin';

                checkAnswer(secondButton,thirdButton,fourthButton);
                break;
        }
    } else {
        answersDiv.style.display = 'none';
        restartDiv.style.display = 'none';
        //change the final message based on the score
        if(score===7){
            title.innerHTML = 'You reached the end <br> wow you are a real ARMY <3 <br>score:  '+ score;
        }else if(score<=7&&score>=5){
            title.innerHTML = 'You reached the end <br> Okay that is pretty good ;) <br>score:  '+ score;
        }else if(score<=4&&score>=2){
            title.innerHTML = 'You reached the end <br> I hope you are a newbie -_- <br>score:  '+ score;
        }else if(score===0||score===1){
            title.innerHTML = 'You reached the end <br> Why are you here... <br>score:  '+ score;
        }
        //show restart button
        restartDiv.style.display = 'flex';
    }
}

function checkAnswer(button1, button2, button3) {
    //get the correct answer based on the count value, in this way the correct answer is in the same position as the question and they match
    correctAnswer = answersArray[count];
    console.log(correctAnswer);
    //set an event listener for every button in the answer buttons div
    for (var j = 0; j <= answerButtons.length; j++) {
        //just check if the button is != null (in this way i dont get the error about the event listener)
        if (answerButtons[j]) {
            answerButtons[j].addEventListener("click", function () {
                givenAnswer = this.innerText;
                console.log(givenAnswer);

                //this make sure that onche we click the answer we cant reclick the answer buttons and change it
                if (clickable === true) {
                    //trough the parameters i hide the buttons with the wrong answers
                    button1.style.display = 'none';
                    button2.style.display = 'none';
                    button3.style.display = 'none';

                    //next button is shown
                    nextButton.style.display = 'flex';
                    //at this thime i cant re click any answer button
                    clickable = false;
                    //checking if the given answer (clicked button.innerhtml) is equal to the correct answer
                    if (givenAnswer === correctAnswer) {
                        title.innerText = 'Correct answer :)';
                        score++;
                    } else {
                        title.innerText = 'Wrong answer :(';
                        correctAnswerIs.style.display = 'flex';
                    }
                }
            });
        }
    }
}

startButton.addEventListener('click', function () {
    //show answers and restart buttons and hide start button
    answersDiv.style.display = 'flex';
    restartDiv.style.display = 'flex';
    startDiv.style.display = 'none';
    //recall start funct to start the game
    start();
});

//when i click restart the page reload and the variables are resetted
restartButton.addEventListener('click', function () {
    location.reload();
})

//when i click next button...
nextButton.addEventListener('click', function () {
    console.log(count);
    //the count value increases
    count++;
    console.log(count);
    //the important var are resetted
    clickable = true;
    givenAnswer = '';
    correctAnswer = '';
    console.log(givenAnswer);

    //all the buttons are shown
    firstButton.style.display = 'flex';
    secondButton.style.display = 'flex';
    thirdButton.style.display = 'flex';
    fourthButton.style.display = 'flex';

    //answers and restart are shown but the next button is hidden
    answersDiv.style.display = 'flex';
    restartDiv.style.display = 'flex';
    nextButton.style.display = 'none';
    //start the game again but with the increased count
    start();
})
