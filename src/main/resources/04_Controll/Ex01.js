/*
    자바랑 똑같다고 하심

    키보드를 이용하여 사용자 아이디와 비밀번호를 입력을 받아서 입력받은
    사용자 아이디가 "hong"이고, 입력받은 비밀번호가 "1234" 이면 "환영합니다." 라는 메세지를 화면에 출력해 보세요
 */

let inStr = prompt("아이디,비밀번호를 입력하세요.");
let inStrArr = inStr.split(",");
if(inStrArr[0] === "hong" && inStrArr[1] === "1234"){
    alert("환영합니다.");
    document.write("환영합니다.");
}