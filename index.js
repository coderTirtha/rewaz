var imageCount = 2;
var imageCount2018 = 1;
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
        $("body").css("background-color", "#000033");
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
    $(".next-2017").click(function() {
        imageCount += 1;
        if (imageCount <= 15) {
            $(".photo-gallery-2017 img").attr("src", "images/2017/img" + imageCount + ".webp");
        } else {
            imageCount = 2;
            $(".photo-gallery-2017 img").attr("src", "images/2017/img" + imageCount + ".webp");
        }
    });
    $(".prev-2017").click(function() {
        imageCount -= 1;
        if (imageCount < 2) {
            imageCount = 15;
            $(".photo-gallery-2017 img").attr("src", "images/2017/img" + imageCount + ".webp");
        } else {
            $(".photo-gallery-2017 img").attr("src", "images/2017/img" + imageCount + ".webp");
        }
    });

    $(".next-2018").click(function() {
        imageCount2018 += 1;
        if (imageCount2018 <= 19) {
            $(".photo-gallery-2018 img").attr("src", "images/2018/img" + imageCount2018 + ".webp");
        } else {
            imageCount2018 = 1;
            $(".photo-gallery-2018 img").attr("src", "images/2018/img" + imageCount2018 + ".webp");
        }
    });
    $(".prev-2018").click(function() {
        imageCount2018 -= 1;
        if (imageCount2018 < 1) {
            imageCount2018 = 19;
            $(".photo-gallery-2018 img").attr("src", "images/2018/img" + imageCount2018 + ".webp");
        } else {
            $(".photo-gallery-2018 img").attr("src", "images/2018/img" + imageCount2018 + ".webp");
        }
    });

    $(".next-2019").click(function() {
        imageCount2018 += 1;
        if (imageCount2018 <= 13) {
            $(".photo-gallery-2019 img").attr("src", "images/2019/img" + imageCount2018 + ".webp");
        } else {
            imageCount2018 = 1;
            $(".photo-gallery-2019 img").attr("src", "images/2019/img" + imageCount2018 + ".webp");
        }
    });
    $(".prev-2019").click(function() {
        imageCount2018 -= 1;
        if (imageCount2018 < 1) {
            imageCount2018 = 13;
            $(".photo-gallery-2019 img").attr("src", "images/2019/img" + imageCount2018 + ".webp");
        } else {
            $(".photo-gallery-2019 img").attr("src", "images/2019/img" + imageCount2018 + ".webp");
        }
    });
});