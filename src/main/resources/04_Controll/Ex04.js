// 1-100사이의 4배수이면서 6배수인 숫자 화면에 출력
for(let i= 1; i < 100; i++){
    i++;
    if(i%5 === 0){
        document.write(`<span style="color: red">${i} , </span>`);
    }else if(i%6 === 0){
        document.write(`<span style="color: aqua">${i} , </span>`);
    }else if(i%7 === 0){
        document.write(`<span style="color: green">${i} , </span>`);
    }
}
