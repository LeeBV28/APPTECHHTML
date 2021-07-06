
loadpage();

function loadpage(){
    var p = [];
    $.ajax ({
        url: "https://foodgroup.herokuapp.com/api/category/1",
        method:"GET",
        success: function(ts){
            p = ts.data.foods;
            // console.log(p);
            var row = $("#as_js3");
            // console.log(row);
            for(var i=0; i<p.length; i++){
                var ct = "<div class=\"col\">\n" +
                    "                    <div class=\"card h-100\">\n" +
                    "                        <img src=\""+p[i].image+"\" class=\"card-img-top\" alt=\"...\">\n" +
                    "                        <div class=\"card-body\">\n" +
                    "                            <h5 class=\"card-title\">"+ p[i].name +"</h5>\n" +
                    "                            <p class=\"card-text\">"+ p[i].description +"</p>\n" +
                    "                            <p class=\"btn btn-primary text-center\">Price: "+ p[i].price +"</p>\n" +
                    "                        </div>\n" +
                    "                    </div>\n" +
                    "                </div>";
                row.append(ct);
            }
        }
    });
}
properties();
function properties(){
    var p = [];
    $.ajax({
       url: "https://foodgroup.herokuapp.com/api/food/1",
        method: "GET",
        success: function (ab){
           p = ab.data;
           // console.log(p);
           var row = $("#as_j3_1");
           var ct = "<div class=\"alert alert-success\" role=\"alert\">\n" +
               "          <p>Chi tiết món: "+ p.name +" </p>\n" +
               "        </div>\n" +
               "        <div class=\"card mb-3\">\n" +
               "          <img src=\""+ p.image +"\" class=\"card-img-top\" alt=\"...\">\n" +
               "          <div class=\"card-body\">\n" +
               "            <h5 class=\"card-title\">"+ p.name +"</h5>\n" +
               "            <p class=\"card-text\">"+ p.description +"</p>\n" +
               "            <p class=\"card-text\"><small class=\"text-muted\">Price: "+ p.price +"</small></p>\n" +
               "          </div>\n" +
               "        </div>";
           // console.log(ct)
           row.append(ct);
        }
    });
}

