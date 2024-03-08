/*
    콜백함수
    - 자바스크립트에서는 함수도 하나의 자료형임.
    - 따라서 매걔변수로 함수를 전달할 수 있음.
    - 이렇게 매걔변수로 넘어가는 함수를 콜백함수 라고 함.
 */
function  print(v){
    document.write(`${v} 번째 함수 호출 !!! <br>`);
}

function  callThreeTimes(call){
    for(let i=1; i <= 3; i++){
        call(i);
    }
}

callThreeTimes(print);