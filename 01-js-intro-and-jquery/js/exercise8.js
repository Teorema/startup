$(document).ready(function(){
    $("#exercise7button").on("click",function(){
        $.getJSON('http://bootcamp.aws.af.cm/welcome/'+$('#Alias').val(),function(result){
            $("div").html(result.response);
        });
    });
});