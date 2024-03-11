/*
    자바스크립트의 객체 생성 방법

    const(let) 객체명 = {
        속성: 값
        속성: 값
    }
 */

const product ={
    name : "Galaxy s24",
    type : "핸드폰",
    company: "삼성"
}

// 해당 객체의 속성을 화면에 출력하는 방법 - 첫번째 방법
document.write(`제품 이름 >>> ${product[`name`]} <br>`);
document.write(`제품 이름 >>> ${product[`type`]} <br>`);
document.write(`제품 이름 >>> ${product[`company`]} <br>`);

// 두번째 방법
document.write(`제품 이름 >>> ${product.name} <br>`);
document.write(`제품 이름 >>> ${product.type} <br>`);
document.write(`제품 이름 >>> ${product.company} <br>`);

//세번째 방법
for(let k in product){
    document.write(`제품 이름 >>> ${k} 의 값 ${product[k]} <br>`)
}