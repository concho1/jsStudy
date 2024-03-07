/*
    키보드로 회원의 이름과 나이, 연락처를 입력받아서 화면에 출력해 보세요.
    document.write()함수를 이용할 것.
 */

let inStr = prompt("회원의 이름,나이,연락처 를 입력하세요.");
let inStrArr = inStr.split(",");

document.write(`
    <ui>
        <li>이름 : 
            <h1>${inStrArr[0]}</h1>
        </li>
        <li>나이 : 
            <h1>${inStrArr[1]}</h1>
        </li>
        <li>연락처 : 
            <h1>${inStrArr[2]}</h1>
        </li>
    </ui>
`);