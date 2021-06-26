// Đồng hồ đếm ngươc

var min = 10;
var sec = 0;
var timer = setInterval(function(){
    var min_text=min>=10?min:"0"+min;   // để đảm bảo luôn hiển thị phút giây ở 2 ký tự: vd 9p35 >> 09p35
    var sec_text=sec>=10?sec:"0"+sec;
    console.log(min_text + ":" +sec_text);
    sec--;
    if(sec<0){
        min--;
        sec = 59;
    }if(min<0){
        clearInterval(timer);
    }
},1000);