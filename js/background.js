const images=[
    "0.jpg",'1.png','2.png','3.jpg','4.png','5.png','6.jpg',
    '7.png','8.jpg'];


const chosenImg=images[Math.floor(Math.random()*images.length)];
const bgDiv=document.getElementById("body-wrapper");

//js에서 html에 <img>를 넣어야한다!
const bg=document.createElement("img");//create img tag in js
bg.id="bg-img";
//bg.src="img/1.png";
bg.src=`img/${chosenImg}`; //img src생성
//js에서 생성한 bg element를 body에 추가하자!
document.body.prepend(bg);
console.dir(document.body);

//prepand; html의 맨 위에 추가
