var correct=0;
var answer =document.getElementById("answer");
answer.style.visibility = "hidden";

var time = 20;
var sec = "";

var x = setInterval(function(){
    sec = time;

    document.getElementById("time").innerHTML = sec+"초";
    time--;

    if (time < 0){
        clearInterval(x);
        document.getElementById("time").innerHTML = "시간초과";
        check();
    }
},1000)

function check(){
    var a =document.getElementById("A1").value
    if(a == 1950){
        correct+=1;
    }
    var b =document.getElementById("A2").value
    if(b == "홍길동전"){
        correct+=1;
    }
    var c =document.getElementById("A3").value
    if(c == "로마"){
        correct+=1;
    }
    var d =document.getElementById("A4").value
    if(d == "electronic"){
        correct+=1;
    }
    var e =document.getElementById("A5").value
    if(e == "퇴계이황"){
        correct+=1;
    }
    document.getElementById("result").innerHTML = correct;
    answer.style.visibility = "visible";
}
