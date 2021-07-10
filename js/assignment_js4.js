loadjson();

function loadjson(){
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather",
        method: "GET",
        // url có chỉ số: q=hanoi,vietnam&&units=metric&appid=09a71427c59d38d6a34f89b47d75975c có thể viết thành data
        data:{
            q:"saigon,vietnam",  // Có thẻ thay đổi các chỉ số này theo API
            units: "metric",
            appid: "09a71427c59d38d6a34f89b47d75975c",

        },
        success: function (rs){
            $("#temp").text(rs.main.temp);
            $("#hum").text(rs.main.humidity);
            $("#wind").text(rs.wind.speed);
            $("#name").text(rs.name);
            $("#contry").text(rs.sys.country);
            $("#des").text(rs.weather[0].description);   
        }
    });
}