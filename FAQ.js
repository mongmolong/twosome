$(document).ready(function () {
    $(".menu>li").click(function () {
        let aa = $(this).index();
        $(".menu>li").removeClass("cl");
        $(".menu>li").eq(aa).addClass("cl");

        $(".contents").removeClass("ve");
        $(".contents").eq(aa).addClass("ve");
    });


    $(".que>li").click(function () {
        let answ = $(this).hasClass("an")

        if (answ) {
            $(this).removeClass("an");

        } else {
            $(".que>li").removeClass("an");
            $(this).addClass("an");
        }
    });

});

