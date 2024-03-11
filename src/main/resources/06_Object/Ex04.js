/*
    [문제] 학생 객체에 대한 정보를 키보드로 입력을 받아서 해당 학생 객체 정보를 화면에 보여주세요.
    (입력 받을 학생 객체 정보 : 학번, 이름, 학과, 연락처, 주소)

 */

const student = {
    id : "",
    name: "",
    doc: "",
    phoneNum: "",
    addr: ""
}

student.id = prompt("학번을 입력하세요. ");
student.name = prompt("이름을 입력하세요. ");
student.doc = prompt("학과를 입력하세요. ");
student.phoneNum = prompt("전화번호를 입력하세요. ");
student.addr = prompt("주소를 입력하세요. ");
document.write(`<ul>`);
for(d in student){
    document.write(`<li>${d} >>> ${student[d]} </li>`);
}
document.write(`</ul>`);
