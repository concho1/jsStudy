let arr = [];
for(let i = 1; i<10; i++){
    arr.push(i);
}
arr = arr.concat(["1",2,3,4,5,6,7,8,9]);
arr.shift();
arr.unshift("fist");
for(let i = 0; i<20; i++){
    document.write(` ${arr.at(i)}  `);
}

// unshift() 배열의 처음에 요소 넣기
// shift() 배열의 처음 요소 삭제
// sort()   오름차순
// reverse()    내림차순