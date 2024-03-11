const person = {
    name : "홍길동",
    eat : function (food) {
        document.write(`${this.name} 님이 ${food} 를 먹습니다.`);
    }
}

document.write(`이름 ${person.name} <br>`);
person.eat("커피");