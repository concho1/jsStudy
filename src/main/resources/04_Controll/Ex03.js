/*
    난수를 발생시켜서 추첨을 통해 경품을 받게 만들어 보자.

    <요구사항>
    - 1~10 사이의 숫자를 랜덤하게 뽑아 보게 하자.
    - 3번 : 냉장고 당첨 / 5번 : 노트북 당첨 /8번 : TV 당첨
    - 그 외 번호는 꽝
    난수를 발생시키는 함수
    Math.floor(Math.random() * 마지막 숫자) + 시작 숫자;
 */

let num = Math.floor(Math.random() * 10) + 1;
if(num == 3){
    document.write("냉장고");
}else if(num == 5){
    document.write("노트북");
}else if(num == 8){
    document.write("TV");
}else{
    document.write("꽝");
}