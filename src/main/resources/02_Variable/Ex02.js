// 자바스크립트에서 키보드로 입력 받는 방법.
// var 타입 사용시 재할당하면 타입이 안바뀌지만
// let 타입 사용시에는 재할당하면 타입이 바뀜
let name = prompt("이름을 입력하세요...");
document.write("<b>"+name+"</b> 님 환영합니다.<br>");

name = 150;
document.write("name >>> " + name);
console.log(typeof(name));
