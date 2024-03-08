// 키보드로 두 수와 연산자를 입력 받아서 연산자에 해당하는 함수를 호출해서 결과 출력하기
function sol( ){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let cal = document.getElementById('cal').value;
    let result = "";
    num1 = Number(num1);
    num2 = Number(num2);
    console.log(num1);
    console.log(num2);
    switch (cal){
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            break;
    }

    console.log(result);
    document.getElementById("result").value = result;
}