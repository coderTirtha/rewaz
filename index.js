$(document).ready(function() {
    $(".side-menu").hide();
    $(".settings-menu").hide();
    $(".fa-bars").click(function() {
        $(".side-menu").toggle(500);
    });
    $(".fa-cog").click(function() {
        $(".settings-menu").toggle(500);
    });
    $("#dark").click(function() {
        $("body").css("background-color", "#003366");
        $("body").css("color", "white");
        $(".settings-menu").hide(500);
        $(".side-menu a").css("color", "white");
        $(".side-menu a li").css("border-color", "white");
        $("a").css("color", "white");
    });
    $("#light").click(function() {
        $("body").css("background-color", "white");
        $("body").css("color", "black");
        $(".settings-menu").hide(500);
        $(".side-menu a").css("color", "black");
        $(".side-menu a li").css("border-color", "black");
        $("a").css("color", "black");
    });
    $(".side-menu a li").click(function() {
        $(".side-menu").hide(200);
    });
});