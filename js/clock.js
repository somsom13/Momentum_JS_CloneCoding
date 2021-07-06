const clock=document.querySelector("h2#clock"); //id=clock인 h2 element

//setInterval(sayHello,2000);실행할 함수, 반복실행할 ms단위 시간/즉 2초 마다 반복
//setTimeout(sayHello,5000);반복없이 지정된 시간 후에 한 번 실행하는것!

//const date=new Date(); javascript object, has many documents -> check document!
//계속해서 1초 단위로 시간 업데이트 해 보여주기 위해서는 interval 사용!

function getClock(){
    const date=new Date();
    //date.get으로 가져와지는건 모두 number 이다!! padStart 쓰기 위해서는 string으로 변환
    const hours=String(date.getHours()).padStart(2,"0");
    const minutes=String(date.getMinutes()).padStart(2,"0");
    const seconds=String(date.getSeconds()).padStart(2,"0");
    clock.innerText=`${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock,1000);
//최소한 2단위의 숫자 ex) 12:06 처럼 나오게 출력해야함
//-->patStart() function! string에 사용가능  string.padStart(2,"0")//길이가 2가 아니라면 0으로 앞에 패딩을 채운다.
//string.padStart(원하는 문자열 길이, "패딩숫자") 앞을 padding으로 채운다.
//padEnd()  : 뒤를 padding으로 채워준다. 
//string.padStart() 의 string의 길이가 2가 안된다면, padding으로 채운다!!!!!