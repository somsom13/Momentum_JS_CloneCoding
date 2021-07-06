const quotes=[
    {quote:"When you change your thoughts, remember to also change your world.",
    author: "Norman Vincent Peale"},
    {quote:"You are braver than you believe, stronger than you seem, and smarter than you think.",
    author:"Christopher Robin, Winnie the Pooh"},
    {quote:"The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"},
    {quote:"You think the only people who are people, are the people who look and think like you. But if you walk the footsteps of a stranger, you’ll learn things you never knew you never knew.",
    author:"Pocahontas (1995)"},
    {quote:"Remember you’re the one who can fill the world with sunshine.",
    author:"Snow White (1937)"},
    {quote:"Sometimes You Have To Fight For The Things That Are Worth Fighting For.",
    author:"The Secret World Of Arrietty (2010)"},
    {quote:"They Say That The Best Blaze Burns Brightest When Circumstances Are At Their Worst.",
    author:"Howl's Moving Castle (2004)"},
    {quote:"It’s Funny How You Wake Up Each Day And Never Really Know If It’ll Be One That Will Change Your Life Forever.",
    author:"The Secret World Of Arrietty  (2010)"},
    {quote:"Always Believe In Yourself. Do This And No Matter Where You Are, You Will Have Nothing To Fear.",
    author:"The Cat Returns (2002)"}
];

const quote=document.querySelector("#quote div:first-child");
//quote id 아래의 span 태그 중, 첫 번째 것 가져옴 (첫 번째 span 태그)
const author=document.querySelector("#quote div:last-child");
//quote id 아래의 span 태그 중, 맨 마지막꺼 가져옴 (맨 마지막 span 태그)

//Math.random()*num : 0~num 사이의 random value return (단, 정수가 아닌 float 형도 선택됨)
//Math.round(num) : num을 반올림하여 정수로
//Math.ceil(num) : num을 올림하여 정수로
//Math.floor(num) : num을 내림하여 정수로

const todayQuote=quotes[Math.floor(Math.random()*quotes.length)];
//0~quotes.length 사이의 랜덤한 숫자를 내림하는 것이므로, length=10이라 하면 0~9까지가 선택된다.
//(0.1~9.9까지의 숫자가 선택되고 이게 내림되므로) --> index는 0~9로 카운트 하므로 ok!

quote.innerText=todayQuote.quote;
author.innerText=todayQuote.author;