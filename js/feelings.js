const questionForm=document.getElementById("question-form");
const feelingInput=questionForm.querySelector("input");
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


