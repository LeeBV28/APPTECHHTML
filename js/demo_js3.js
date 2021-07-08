var t=document.getElementById("title");
t.innerText="Đây là nội dung tôi viết từ js";
t.style.color="red";  // Dổi thông tin thuộc tính css cho phần từ t được gán vào HTML
t.style.fontSize="50px";  // đấu - bỏ đi chuyển chữ tiếp thành in hoa: font-size --> fontSize

var c=document.getElementById("html");
c.innerHTML= "<i>Nội Dung chuyển vào cả HTML</i>";

var h=document.getElementById(row);
var ct = "<div class=\"conten col-md-3\">\n" +
    "            <div class=\"item\">\n" +
    "                <img src=\"images/ass3.4.jpg\"/>\n" +
    "                <h1>hip pants 1</h1>\n" +
    "                <p>bộ thể thao độc đáo. Vô cùng thoáng mát cho ngày hè nóng bức</p>\n" +
    "                <h2>350.000 VNĐ</h2>\n" +
    "                <p class=\"back\">MUA NGAY</p>\n" +
    "            </div>\n" +
    "        </div>";
row.innerHTML = ct; // Chuyển cả chuỗi ct vào row
row.innerHTML = ct + ct; // cộng thêm một ct nữa chuyển vào row >> row.innerHTML += ct;


//thay thế một object vào
var ob=document.getElementById("object");
var p = {
    image:"images/ass3.4.jpg",
    name:"hip pants 1"
};
for(var i=0; i<4; i++){
    var b = "<div class=\"conten col-md-3\">\n" +
        "            <div class=\"item\">\n" +
        "                <img src=\""+p.image+"\"/>\n" +
        "                <h1>"+p.name+"</h1>\n" +
        "                <p>bộ thể thao độc đáo. Vô cùng thoáng mát cho ngày hè nóng bức</p>\n" +
        "                <h2>350.000 VNĐ</h2>\n" +
        "                <p class=\"back\">MUA NGAY</p>\n" +
        "            </div>\n" +
        "        </div>";
    ob.innerHTML += b;
}

// Thay thế bằng 1 mảng object;

var arr=document.getElementById("arr");
// khai báo một arr object; cả khảng [] là một mảng {} là một object các như điền giá trị trong mảng mỗi mảng cách nhau bằng dấy ,

var n=[
    {
        image:"images/ass3.4.jpg",
        name:"hip pants 1"
    },
    {
        image:"images/ass3.5.jpg",
        name:"hip pants 2"
    },
    {
        image:"images/ass3.6.jpg",
        name:"hip pants 3"
    },
    {
        image:"images/ass3.7.jpg",
        name:"hip pants 4"
    },
];
for(var i =0; i<n.length; i++){
    var m = "<div class=\"conten col-md-3\">\n" +
        "            <div class=\"item\">\n" +
        "                <img src=\""+n[i].image+"\"/>\n" +   //hiển thị phần tử thư i của mảng p là một object có tên là image
        "                <h1>"+n[i].name+"</h1>\n" +
        "                <p>bộ thể thao độc đáo. Vô cùng thoáng mát cho ngày hè nóng bức</p>\n" +
        "                <h2>350.000 VNĐ</h2>\n" +
        "                <p class=\"back\">MUA NGAY</p>\n" +
        "            </div>\n" +
        "        </div>";
    arr.innerHTML += m;
}

// viết gọn:
document.getElementById("h2").innerHTML = "Đây là nội dung được chuyển từ JS sang và đã viết gọn phần khai báo ở JS:";



