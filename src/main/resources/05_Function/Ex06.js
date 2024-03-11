/*
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

const myAlarm = () =>{
    document.write("함수 실행 <br>");
}
let id = setInterval(myAlarm,  1000);
setTimeout(() => clearInterval(id), 10000);