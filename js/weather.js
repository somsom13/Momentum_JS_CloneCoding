const API_KEY="c73e1a52dd7f10bbc57209859361fc4d";

function onGeeOk(position){
    const lat=position.coords.latitude;
    const long=position.coords.longitude;
    console.log("position: ",lat,long);
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    //success 시, 자동으로 position을 넘겨준다.
    fetch(url).then(response=>response.json())
    .then(data=>{
        const weatherBlock=document.querySelector("#weather div:first-child");
        const cityBlock=document.querySelector("#weather div:last-child");
        cityBlock.innerText=data.name;
        weatherBlock.innerText=`${data.weather[0].main} / ${data.main.temp}`;
    }); //js가 직접 url을 호출해준다! url을 클릭하지 않아도
    //response.json에는 url로부터 얻어온 정보가 담겨있다.
}

function onGeoError(){
    alert("Can't find you. No weather for you!");
}

navigator.geolocation.getCurrentPosition(onGeeOk,onGeoError);
