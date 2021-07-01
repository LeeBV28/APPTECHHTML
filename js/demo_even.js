
function demo_1(){
    alert("Bạn vừa gọi function demo")
}

function demo_2(){
    console.log("function demo2");
}
function demo_3(){
    console.log("function demo3");
}
function textInput(ab){
    console.log(ab+"    text ....");
}

function test_this(e){
    var v = e.value;  // trả về giá trị người dùng nhập vào input
    console.log(v);
}

// bài tap dông ho dem nguoc

function timerCountdown(e){
    var code = event.keyCode;
    if(code == 13){
        var v = e.value;
        if(v>=1){
            var min = v;
            var sec = 0;
            var timer = setInterval(function (){
                var min_txt = min>=10?min:"0"+min; // toán tử 3 ngôi
                var sec_txt = sec>=10?sec:"0"+sec;                

                //console.log(min_txt+":"+sec_txt);
                var box_min = document.getElementById("box-min");
                box_min.innerText = min_txt;
                var box_sec = document.getElementById("box-sec");
                box_sec.innerText = sec_txt;

                sec--;
                if(sec<0){
                    min--;
                    sec=59;
                }
                if(min <0){
                    clearInterval(timer);
                }
            },100);
        }
    }
}


var reward  = [
    "Lamboghini v8",
    "SH 150i",
    "Honda Dream",
    "Honda Dream",
    "Tủ lạnh Toshiba",
    "Tủ lạnh Toshiba",
    "Tủ lạnh Toshiba",
    "Chuột máy tính Fuhlen",
    "Chuột máy tính Fuhlen",
    "Chuột máy tính Fuhlen",
    "Chuột máy tính Fuhlen",
    "Chuột máy tính Fuhlen",
    "Chuột máy tính Fuhlen",
    "Chuột máy tính Fuhlen",
    "Chuột máy tính Fuhlen",
    "Chuột máy tính Fuhlen",
    "Chuột máy tính Fuhlen",
    "Chuột máy tính Fuhlen",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
    "Bút bi Thiên long",
]
    
function chonQua(){
    var count = 50;
    var timer = setInterval(function (){
        // chon qua ngau nhieu tu danh sach
        var i = Math.random()*40;
        i = parseInt(i);// 1 số ngẫu nhiên trong danh sach
        // in ra kết quả
        var kq = document.getElementById("ketqua");
        kq.innerText = "Món quà nhận được: "+reward[i]; 
        // chuyển đến lần chọn tiếp theo
        count--;
        if(count <=0){
            clearInterval(timer);
        }
    },50);
}