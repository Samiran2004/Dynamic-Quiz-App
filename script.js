const url = `https://opentdb.com/api.php?amount=10`;
const qustionCont = document.querySelector('#qustion');
const answerElm = document.querySelectorAll('.answerCheck');
const option1Cont = document.querySelector('#option1')
const option2Cont = document.querySelector('#option2')
const option3Cont = document.querySelector('#option3')
const option4Cont = document.querySelector('#option4')
const submitBtn = document.querySelector('#submit');
const score = 0;
const quizNumber = 1;

let qustion;
let option1, option2, option3, option4;
const returnData = async function () {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    qustion = (data.results[0].question);
    option1 = (data.results[0].incorrect_answers[0])
    option2 = (data.results[0].incorrect_answers[1])
    option3 = (data.results[0].incorrect_answers[2])
    option4 = (data.results[0].correct_answer)
};
returnData().then(()=>{
    qustionCont.innerHTML = qustion;
    option1Cont.innerHTML = option1;
    option2Cont.innerHTML = option2;
    option3Cont.innerHTML = option3;
    option4Cont.innerHTML = option4;
});
submitBtn.addEventListener('click', ()=>{
    returnData().then(()=>{
        qustionCont.innerHTML = qustion;
        option1Cont.innerHTML = option1;
        option2Cont.innerHTML = option2;
        option3Cont.innerHTML = option3;
        option4Cont.innerHTML = option4;
    });
})