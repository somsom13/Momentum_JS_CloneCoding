/* login 기본적으로 모든 class="hidden" 으로 두고 시작 */

const questionForm=document.getElementById("question-form");
//query selector를 쓰면 #으로 id 임을 명시해주자
const feelingInput=questionForm.querySelector("input");
//document.querySelector("#login-form input(button)");
const feelingDiv=document.querySelector("#feeling-div");
const feeling=document.querySelector("#feeling");
const changeFeeling=document.querySelector("#change-feeling");
const FEELING_KEY="feeling";


function handleChangeFeelings(){
    feelingDiv.classList.add(HIDDEN_CLASSNAME);
    questionForm.classList.remove(HIDDEN_CLASSNAME);
    questionForm.addEventListener("submit",onSubmitFeeling);
}


function paintFeelings(inputFeeling){
    feeling.innerText="Feeling "+inputFeeling;
    feelingDiv.classList.remove(HIDDEN_CLASSNAME);
    changeFeeling.addEventListener("click",handleChangeFeelings);
}


//로그인 과정 처리 function
function onSubmitFeeling(info){ 
    info.preventDefault(); 
    const feeling=feelingInput.value;
    localStorage.setItem(FEELING_KEY,feeling);
    if(feeling!==""){
        questionForm.classList.add(HIDDEN_CLASSNAME);
        paintFeelings(feeling);
    }
}

const savedFeeling=localStorage.getItem(FEELING_KEY);
if(savedFeeling!==null&&savedFeeling!==""){
    console.log(savedFeeling);
    paintFeelings(savedFeeling);
}else{
    questionForm.classList.remove(HIDDEN_CLASSNAME);
    questionForm.addEventListener("submit",onSubmitFeeling);
}


