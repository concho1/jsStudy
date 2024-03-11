
let btc = document.getElementById("bta");
btc.addEventListener("click", eventC)

function  eventC(){
    let text1 = document.getElementById("txt1");
    if(text1 == ""){
        alert("내용을 작성하세요");
    }else{
        let text2 = document.getElementById("txt2");
        text2.innerText = text1.innerText;
    }
}
