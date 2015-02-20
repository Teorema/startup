$(document).ready(function() {
    $("#callSpotify").on("click", function () {
        $("#results").html("");
        $.getJSON('https://api.spotify.com/v1/search', {q: $("#artist").val(), type: 'album'}, function (result) {
            console.log(result);
            $("#title").text($("#artist").val() + " Albums");
            $.each(result.albums.items, function (i, e) {
                var article = $("<article/>");
                var h3 = $("<h3>" + e.name + "</h3>");
                var div = $("<div/>");
                var img = $("<img/>").attr("width", e.images[2].width).attr("src", e.images[2].url).attr("height", e.images[2].height);
                div.append(img);
                var p = $("<p/>");
                p.html("<a href='" + e.href + "'>Link To Spotify</a>");
                div.append(p.clone());
                p.html(e.type);
                div.append(p.clone());
                article.append(h3, [div]);
                $("#results").append(article.clone());
            });
        }).fail(function(){
            $("#title").text("No Albums Found");
        });
    });
});