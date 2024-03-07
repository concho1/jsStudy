/*
 * 키보드로 두 수를 입력받아서 덧셈, 뺄셈, 곱셈, 나눗셈 작업을 진행해 보세요 document.write()함수를 이용하여 화면에 출력할 걳
 * (주의) 나눗셈은 기본적으로 자료형을 double 형으로 형변환 한 뒤 나눗셈 작업을 진행함.
 */
/*
let inStr = prompt("두 수를 ','기준으로 입력하세요.");
let inStrArr = inStr.split(",");
let inIntArr = [];
inStrArr.forEach( n => {
        inIntArr.push(Number(n));
    }
)
document.write(`a + b = ${inIntArr[0] + inIntArr[1]}<br>`);
document.write(`a - b = ${inIntArr[0] - inIntArr[1]}<br>`);
document.write(`a * b = ${inIntArr[0] * inIntArr[1]}<br>`);
document.write(`a / b = ${(inIntArr[0] / inIntArr[1]).toFixed(3)}<br>`);
*/
function printName(){
    let name;
    name = document.getElementById('name').value;
    document.getElementById("result").innerText = name;
}