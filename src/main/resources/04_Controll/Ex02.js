
let str = prompt("구글, 다음, 네이버 중 하나를 입력하세요");
let url;
switch (str) {
    case "구글":
        url = "www.google.com";
        break;
    case "네이버":
        url = "www.naver.com";
        break;
    case "다음":
        url = "www.dum.com";
        break;
    default:
        break;
}

