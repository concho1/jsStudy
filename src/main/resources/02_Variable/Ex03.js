/*
 * js 에서 입출략 대화 상자
 * 1. alert() : 알림(경고) 창
 *  - 특정 정보를 사용자에게 메세지 창으로 알려 주기 위해 주로 사용이 됨.
 *  예) window.alert("알림 내용 또는 경고 내용");
 *      alert("알림 내용");
 *
 * 2. confirm : 확인 창
 *  - 확인 또는 취소 버튼이 나타나는 알림창.
 *      예) window.confirm("문자열");
 *         confirm("문자열");
 *
 * 3. prompt() : 입력 창
 * - 키보드로 데이터를 입력받을 때 사용하는 알림창.
 * 예) window.prompt("문자열", [초기값 - 생략 가능]);
 *      prompt("문자열", [초기값 - 생략 가능]);
 * 
 */
//let flag = confirm("회식에 동의?");
// if else 는 0은 false, 0 이외는 true 펌웨어 코딩이랑 비슷한듯
/*
if(flag){
    console.log("동의");
}else{
    console.log("싫어");
}
*/
/*
 * 1. 문자열을 숫자로 바꾸어 주는 함수. number() (소수점도 가능)함수
 * ==> 괄호 안에 데이터를 넣어 주면 숫자로 변환해 주는 함수.
 *
 * 2. parseInt() 함수. (int 형)
 * ==> 동일한 작용
 */
let test1 = '10.12345';
let test2 = '10.12345';
let test3 = '10.12345';
console.log(parseInt(test1));
console.log(Number(test1));
console.log(parseFloat(test1));

let h = Number(prompt("당신의 키를 입력하세요...."));
let sta = (h - 100) * 0.9;
document.write("당신의 표준 몸무게는 "+sta + " 입니다.<br>");
document.write(`당신의 표준 몸무게는 ${sta} 입니다.`);
/*
 * ++로 문자열 연결하기 귀찮을 때는 템플릿 리터럴 방식을 쓰자.
 * 문자열과 변수를 섞어서 하나의 문자열로 만드는 표현 방식이다.
 * 키보드의 1옆에있는 백틱 ``을 쓰면 ${}로 변수삽입 가능(number) 도 삽입 가능
 */
