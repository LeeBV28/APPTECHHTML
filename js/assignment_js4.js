loadjson();

function loadjson(){
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=hanoi,vietnam&&units=metric&appid=09a71427c59d38d6a34f89b47d75975c",
        method: "GET",
        success: function (rs){

        }
    });
}