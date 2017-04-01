$(document).ready(function() {
    $('form').submit(function() {
      var myKey = '2a6ec48486077293a408c5f759f4dbd3';
      var city = $('.search').val();
      var message ="";
        $.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+myKey, function(res) {
          var temp = Math.round((res.main.temp) * (9/5) - 459.67);
          var name = res.name;
            message += "<h1>"+name+"</h1>";
            message += "<p> Temputure: "+temp+"</p>";
            console.log(res);
            $(".content").html(message);
        }, 'json');

        return false;
    });
});
