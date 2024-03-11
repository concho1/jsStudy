/*
    js 파일
    웹 문서의 특정 요소를 가져오는 작업 해보기

    웹 문서의 특정한 선택자에 접근하는 방법.
        1. querySelector(선택자) : 선택자 하나에 접근하는 방법
            형식) document.querySelector(선택자)
        2. querySelectorAll(선택자) : 여러개의 선택자에 접근하는 방법.
            형식) document.querySelectorAll();
        3. querySelector(선택자).innerText
            ==> 웹 브라우저 창에 보이는 내용을 가져오는 속성
        4. querySelector(선택자).innerHTML
            ==> 선택자 안에 있는 태그와 내용을 함께 가져오는 속성.
        5. querySelector(선택자).textContent
            ==> 선택자 안에 있는 내용을 가져오되, 소스에 있는대로 가져오는 속성.
        3 ~ 5 번의 경우
        ==> 웹 요소의 내용을 가져올 경우에는 innerText 나 textContent 속성을 사용하고,
        ==> 요소 안에있ㄴ는 테그까지 같이 가져올 경우엔 innerHTML 사용.


const myAlarm = () =>{
    document.write("함수 실행 <br>");
}
let id = setInterval(myAlarm,  1000);

setTimeout(() => clearInterval(id), 10000);

    자바스크립트 내장함수
    - 자바스크립트에서 자체적으로 제공해 주고 잇는 함수를 말함.
    - 예를 든다면 지금까지 사용해 왔던 alert()와 prompt() 함수가 대표적인 내장함수임.

    타이머 함수(내장함수)
    - setTimeout(function, millisecond)
     : 일정 시간이 지난 후에 함수를 한 번만 실행하는 함수.

    - setInterval(function, millisecond)
     : 일정 시간마다 함수를 반복해서 실행하는 함수

     clearTimeout(타이머 id)
      : (일정시간 후 함수를 한번 실행하는 것)을 중지하는 함수

      clearInterval(타이머 id)
      : 일정 시간마다 함수를 반복하는 것을 중지하는 함수.

 */




let title = document.querySelector("#title");
let userName = document.querySelectorAll(".user")[0];
let userImg = document.querySelector("#profile img");
let profile = document.querySelector("#profile");

// 가져온 요소에 변경 작업 진행
title.onclick = () => {
    let text = title.innerText;
    if(text === "Concho 의 프로필"){
        profile.style.backgroundColor = "red";
        title.style.backgroundColor = "red";
        title.style.color = "white";
        title.innerText = "내 프로필";
        userName.innerHTML = "이름 : <p>Concho</p>";
        userImg.src = "../images/pf.png";
    }else{
        profile.style.backgroundColor = "yellow";
        title.style.backgroundColor = "yellow";
        title.style.color = "black";
        title.innerText = "Concho 의 프로필";
        userName.innerHTML = "이름 : <p>홍길동</p>";
        userImg.src = "../images/pf2.png";
    }
}


userName.onclick = () =>{
    if(userName.innerText === "홍길동"){
        userName.innerHTML = "<p>Concho</p>";
    }else{
        userName.innerHTML = "<p>홍길동</p>";
    }
}

userImg.onclick = () =>{
    userImg.src = "../images/pf2.png";
}