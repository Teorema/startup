function checkRedirect(){
    window.location = 'http://bootcamp.aws.af.cm/welcome/'+$('#Alias').val();
}

$(document).ready(function(){
    $("#exercise7button").on("click",checkRedirect);
});