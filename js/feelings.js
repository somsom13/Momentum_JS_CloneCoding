/* login 기본적으로 모든 class="hidden" 으로 두고 시작 */

const questionForm=document.getElementById("question-form");
//query selector를 쓰면 #으로 id 임을 명시해주자
const feelingInput=questionForm.querySelector("input");
//document.querySelector("#login-form input(button)");
const feeling=document.querySelector("#feeling");


//Greeting 출력하는 function
function paintFeelings(inputFeeling){
    feeling.innerText="Feeling "+inputFeeling;
    //`Hello ${username}`; 과 동일
    feeling.classList.remove(HIDDEN_CLASSNAME);
    //greeting이 보여지게 하기 위해
}


//로그인 과정 처리 function
function onSubmitFeeling(info){ 
    console.log("enter submit feeling");
    info.preventDefault(); //browser가 하는 default 행동 멈춤 (이 경우 submit 후 새로고침 멈춤)
    const feeling=feelingInput.value;
    questionForm.classList.add(HIDDEN_CLASSNAME);
    paintFeelings(feeling);
}


questionForm.addEventListener("submit",onSubmitFeeling);
//무언가를 기록,불러올 수 있는 곳: localStotrage!/key-value로(broswer에서 지원)
//submit이라는 event가 있음..
//모든 function에 대해서 browser가 handle함수 호출 하면서, 첫 번째 인자로 js에게 information을 전달하고 있다!!!
//첫 번째 인자: 방금 발생한 event에 대한 정보를 담고 있다!!
