function highlightName(container){
    var span = $("<span/>").text(container.html().replace("Welcome ","").replace("!",""));
    var nombre = container.html().replace("Welcome ","").replace("!","");
    if (nombre == "Tomas"){
        container.html(container.text().substring(0,8));
        container.append(span);
        container.append("!");
    }
}

$(document).ready(function(){
    $("#exercise7button").on("click",function() {
        $.getJSON('http://bootcamp.aws.af.cm/welcome/' + $('#Alias').val(), function (result) {
            var div = $("div");
            if (result.error == undefined) {
                div.html(result.response).css("color", "black");
            } else {
                div.html(result.error).css("color", "red");
            }
        }).done(function () {
            highlightName($("div"));
        });
    });
});