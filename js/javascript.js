$(document).ready(function() {
    $("a#on").click(function(){
        $("body>div:nth-child(1)").addClass("show")
    });

    $("a#in").click(function(){
        $("body>div:nth-child(2)").addClass("show")
    });


    $("button#button").click(function(){
        $("body>div:nth-child(1)").removeClass("show")
    });
    $("button#button2").click(function(){
        $("body>div:nth-child(2)").removeClass("show")
    });



    $('video').videoPlayer({
        'videoClass' : 'video'
    });

});