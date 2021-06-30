/* login 기본적으로 모든 class="hidden" 으로 두고 시작 */

const loginForm=document.querySelector("#login-form");
//query selector를 쓰면 #으로 id 임을 명시해주자
const loginInput=loginForm.querySelector("input");
//document.querySelector("#login-form input(button)");
const greeting=document.querySelector("#greeting");
const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";

//Greeting 출력하는 function
function paintGreetings(){
    const username=localStorage.getItem("username");
    greeting.innerText="Hello "+username;
    //`Hello ${username}`; 과 동일
    greeting.classList.remove(HIDDEN_CLASSNAME);
    //greeting이 보여지게 하기 위해
}

//로그인 과정 처리 function
function handleLoginSubmit(info){ 
    info.preventDefault(); //browser가 하는 default 행동 멈춤 (이 경우 submit 후 새로고침 멈춤)
    const username=loginInput.value;
    //loginInput이라는 element의 property value: 입력된 값
    localStorage.setItem(USERNAME_KEY,username);
    loginForm.classList.add(HIDDEN_CLASSNAME); 
    //form이 보이는 상태로 로그인이 진행되었으므로
    //로그인 된 후, loginForm 이 더이상 보이지 않게 hidden으로 변경
    paintGreetings();
}


if(localStorage.getItem(USERNAME_KEY)===null){
    //username value가 저장되어있지 않다면
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    //loginForm이 다시 보이게 한다 (for 로그인)
    loginForm.addEventListener("submit",handleLoginSubmit);  
}
else{
    //username이 기록되어있다면
    paintGreetings();
}

//무언가를 기록,불러올 수 있는 곳: localStotrage!/key-value로(broswer에서 지원)
//submit이라는 event가 있음..
//모든 function에 대해서 browser가 handle함수 호출 하면서, 첫 번째 인자로 js에게 information을 전달하고 있다!!!
//첫 번째 인자: 방금 발생한 event에 대한 정보를 담고 있다!!
