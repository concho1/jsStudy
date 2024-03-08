/*
    함수를 정의하는 방법(두번째) - 무명(익명)함수
    -   무명함수는 이름이 없는 함수를 말함. 이벤트 처리 등에 주로 사용이 됨.
        함수를 무명으로 만드는 경우에는 주로 함수를 재사용하지 않는 경우에 사용이 됨.
 */
const 함수 = () => {
    document.write(`함수 내부 코드입니다1. <br>`);
    document.write(`함수 내부 코드입니다2. <br>`);
    document.write(`함수 내부 코드입니다3. <br>`);
    document.write(`함수 내부 코드입니다4. <br>`);
}
//무명함수 호출
함수();
console.log(typeof 함수);