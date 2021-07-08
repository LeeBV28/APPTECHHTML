/*
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
var row = $("#row");
for(var i=0;i<n.length;i++ ){
    var ct = "<div class=\"conten col-md-3\">\n" +
        "            <div class=\"item\">\n" +
        "                <img src=\""+n[i].image+"\"/>\n" +   //hiển thị phần tử thư i của mảng p là một object có tên là image
        "                <h1>"+n[i].name+"</h1>\n" +
        "                <p>bộ thể thao độc đáo. Vô cùng thoáng mát cho ngày hè nóng bức</p>\n" +
        "                <h2>350.000 VNĐ</h2>\n" +
        "                <p class=\"back\">MUA NGAY</p>\n" +
        "            </div>\n" +
        "        </div>";
    row.append(ct);
}
*/

/*
function loadMore() {
    var p = [];// ti nua se lay tu
    $.ajax({ //
        url: "data/products.json",
        method:"GET",
        success:function (rs){ // callback
            p = rs;
            var row = $("#row");
            for (var i = 0; i < p.length; i++) {
                var ct = "<div class=\"conten col-md-3\">\n" +
                    "            <div class=\"item\">\n" +
                    "                <img src=\"" + p[i].image + "\"/>\n" +   //hiển thị phần tử thư i của mảng p là một object có tên là image
                    "                <h1>" + p[i].name + "</h1>\n" +
                    "                <p>bộ thể thao độc đáo. Vô cùng thoáng mát cho ngày hè nóng bức</p>\n" +
                    "                <h2>350.000 VNĐ</h2>\n" +
                    "                <p class=\"back\">MUA NGAY</p>\n" +
                    "            </div>\n" +
                    "        </div>"; // ct chi la 1 string thoi
                row.append(ct); // row.html(row.html() +ct)
                // row.prepend(ct) // row.html(ct+row.html());
            }
        }

    });
}
*/

function loadMore() {
    var p = [];
    $.ajax({ //
        url: "https://foodgroup.herokuapp.com/api/today-special", // giống như dùng file todaySpecial.json -- goi la Web API
        method:"GET",
        success:function (rs){ // callback
            p = rs.data; // chúng ta cần 1 array
            var row = $("#row");
            for (var i = 0; i < p.length; i++) {
                var ct = "<div class=\"conten col-md-3\">\n" +
                    "            <div class=\"item\">\n" +
                    "                <img src=\"" + p[i].image + "\"/>\n" +   //hiển thị phần tử thư i của mảng p là một object có tên là image
                    "                <h1>" + p[i].name + "</h1>\n" +
                    "                <p>bộ thể thao độc đáo. Vô cùng thoáng mát cho ngày hè nóng bức</p>\n" +
                    "                <h2>350.000 VNĐ</h2>\n" +
                    "                <p class=\"back\">MUA NGAY</p>\n" +
                    "            </div>\n" +
                    "        </div>"; // ct chi la 1 string thoi
                row.append(ct); // row.html(row.html() +ct)
                // row.prepend(ct) // row.html(ct+row.html());
            }
        }
    });
}



function loadMore2() {
    var p = [];
    $.ajax({ //
        url: "https://foodgroup.herokuapp.com/api/category/1", // giống như dùng file todaySpecial.json -- goi la Web API
        method:"GET",
        success:function (rs){ // callback
            p = rs.data.foods; // chúng ta cần 1 array
            var row = $("#box");
            for (var i = 0; i < p.length; i++) {
                var ct = "<div class=\"conten col-md-3\">\n" +
                    "            <div class=\"item\">\n" +
                    "                <img src=\"" + p[i].image + "\"/>\n" +   //hiển thị phần tử thư i của mảng p là một object có tên là image
                    "                <h1>" + p[i].name + "</h1>\n" +
                    "                <p>bộ thể thao độc đáo. Vô cùng thoáng mát cho ngày hè nóng bức</p>\n" +
                    "                <h2>350.000 VNĐ</h2>\n" +
                    "                <p class=\"back\">MUA NGAY</p>\n" +
                    "            </div>\n" +
                    "        </div>"; // ct chi la 1 string thoi
                row.append(ct); // row.html(row.html() +ct)
                // row.prepend(ct) // row.html(ct+row.html());
            }
        }
    });
}

function load(){
    var p = [];
    $.ajax({ //
        url: "https://foodgroup.herokuapp.com/api/category/1", // giống như dùng file todaySpecial.json -- goi la Web API
        method:"GET",
        success:function (rs){ // callback
            p = rs.data.foods; // chúng ta cần 1 array
            var row = $("#boxs1");
            for (var i = 0; i < p.length; i++) {
                var ct = "<div class=\"col-md-4\">\n" +
                    "            <img src=\""+p[i].image+"\">\n" +
                    "            <h1>"+ p[i].name +"</h1>\n" +
                    "            <div class=\"col-md-6\">\n" +
                    "                <h3>ID: "+ p[i].id+"</h3>\n" +
                    "            </div>\n" +
                    "            <div class=\"col-md-6\">\n" +
                    "                <h3>description: "+p[i].description +"</h3>\n" +
                    "            </div>\n" +
                    "            <p class=\"back\">Gía: "+p[i].price +"</p>\n" +
                    "        </div>"; // ct chi la 1 string thoi
                row.append(ct); // row.html(row.html() +ct)
                // row.prepend(ct) // row.html(ct+row.html());
            }
        }
    });
}









