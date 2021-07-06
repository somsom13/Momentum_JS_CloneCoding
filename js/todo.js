const todoForm=document.getElementById("todo-form");
const todoInput=todoForm.querySelector("input");//todoForm 내부의 input
const todoList=document.querySelector("#todo-div ul");

let saveTodo=[];
//새로고침 해도 localStorage에 있는 내용 가져와서, 이어쓰기 가능하도록 let으로 변경
const TOODS_KEY="todos"; //localStorage에 저장할 키 값을 const로 기억

function saveTodos(){
    //array를 string으로 변환시켜준다!!! --> array를 string으로 저장하기 위해 사용
    localStorage.setItem(TOODS_KEY,JSON.stringify(saveTodo));
    //string을 js의 object 형태로 바꿀 수 있다!! (array로) 이거는 맨 아래에서 할것임
}


function deleteTodo(deleteInfo){
    //어떤 button이 클릭되었는지, 어떤 li를 지워야할지 아는 방법?
    //submit처럼 전달되는 인자에 정보가 담겨있다! -->클릭된 target을 알 수 있다
    //console.dir(infoButton.target.parentElement.innerText); ->parent value로 볼 수 있다!!
    //클릭된 버튼의 타겟의 부모, 즉 li를 알 수 있고 그 정보를 볼 수 있다.
    const li=deleteInfo.target.parentElement;
    console.dir(li);
    li.remove();
    //선택된 버튼의 부모, 즉 span과 button을 포함한 li를 html 상에서 지울 수 있다.
    saveTodo=saveTodo.filter((element)=>element.id!==parseInt(li.id));
    saveTodos();//삭제하고 새로 만든 배열을 localStorage에 반영! 
    //saveTodo arr에 있는 모든 각 요소들 : element
    //각 element에 대해 filtering 과정을 거치는데, 그 element의 id가
    //삭제 버튼이 눌린 할 일의 id와 일치하는지 비교, 일치하면 false를 return 하므로
    //해당을 제외한 새로운 배열을 만들어 saveTodo에 저장된다! 
    //paintTodo에서 li에 id를 추가했으므로, 여기서의 li에서도 id를 얻을 수 있다
    
    //localStorage에서도 todo를 지우기 위해 todo를 id를 가진 배열로 만들자
}

function paintTodo(todoObject){
    //html상, 화면 상에 새로 입력된 todo를 표시하는 역할
    //li item 생성!!
    const li=document.createElement("li");//li element creation
    li.id=todoObject.id; //li에 id를 추가한다!!!!! delete를 위해!!!!!
    //li 내부에 span 태그로 todo를 기록할 것임
    const span=document.createElement("span");
    const button=document.createElement("button");
    button.innerText="❌";
    button.classList.add("delete-button");
    li.appendChild(span);//li내부에 span태그가 들어감! (자식으로) --> 바로 옆에 버튼 만들기 위해
    li.appendChild(button);//span뒤에 button이 붙게 됨
    span.innerText=todoObject.text+" ";
    todoList.appendChild(li);//ul(todoList)안에 li를 자식으로 넣어준다.
    button.addEventListener("click",deleteTodo);
    //새로 list를 추가하고, 그 옆에 delete버튼을 만들면서 동시에 해당 버튼에 
    //클릭될 때의 event를 등록시켜준다!!! 
}

function handleTodoSubmit(info){
    console.log("enter todo submit");
    info.preventDefault();
    const newTodo=todoInput.value;//input todo 기억해두고
    todoInput.value=""; //enter 하면 내용 사라지게, html상에서 사라짐(value를 ""로 대체)
    
    const todoObject={
        text:newTodo,
        id:Date.now()
    }; //arr와 localStorage에 obj로 저장하기 위한 것.

    saveTodo.push(todoObject); //saveToDo arr에 새로 만든 todoObject(key-value) 저장
    //새로 입력된 todo를 js상의 todo arr에 추가
    saveTodos();
    //todo가 기록된 arr을 localstorage에 저장하는 함수
    paintTodo(todoObject);
    //새로 입력된 todo를 html(화면)에 보여주는 함수
}

todoForm.addEventListener("submit",handleTodoSubmit);
//todo가 새로 입력되면 localStorage에 저장되어야 한다!
//localStorage는 array저장안하고 string만 저장하는데 어떻게?

//페이지에서 처음 한 번만 실행됨 (eventListener와는 다르게)
//즉 새로고침 될 때 localStroage에 있는 내용을 화면에 표시해주기 위해 쓰는 것!
const savedTodos=localStorage.getItem(TOODS_KEY);
//localStorage는 새로고침 되어도 항상 값 유지되므로 값이 계속 화면상에 보여진다.
if(savedTodos!==null){
    //savedTodos가 localstorage에 있다면, null이 아니라면
    const parsedTodos=JSON.parse(savedTodos);//string으로 저장된 내용을 arr로가져오자
    saveTodo=parsedTodos; // 과거기록 불러오기
    //parsedTodos에는 각각 object로 사용할 수 있는 할일들이 array로 저장된다
    parsedTodos.forEach(paintTodo); //가져온 item들 각각에 대하여!

    /*
    parsedTodos.array.forEach(element => {
        //element는 전체 parsedTodos중에서 현재 요소에 대한 정보가짐
    }); //이런형태를 arrow function 이라 한다!!!!!
    */
}


//eventListener는 submit 발생마다 수행되는 거고
//savedTodos를 arr로 가져오는 과정은 새로고침 됐을 때 한번만 수행되는거!!!! 맞나????
//그래서 paintTodo가 두 번씩 발생하지 않는것!!!!

/* [1,2,3,4].filter(newFilter) --> 4가지 요소 각가에 대해 js가 newFilter함수 호출
    함수가 true를 return하면, 해당 요소는 유지되고 fasle를 return하는 요소는 제거된다!
    ex) [1,2,3]을 가진 배열만 filtering 할거라면 1,2,3에서는 newFilter가 true를
    4에서는 fasle를 return 해야한다! -> [1,2,3]만 남은 배열 새로 생성
    function newFilter(NUM){
        return NUM!=4; //NUM이 4이면 false return --> 4는 배열에서 제외된다
    } 
    --> filtering을 사용해서 todo list에 있는 obj의 id를 비교, 일치하는 id는 제거한
    새로운 배열을 만들 수 있다!!!! */