$(document).ready(function () {
    $("#menuButton").click(function () {
        $("#menu").slideToggle();
    });

    $("#btnHide").click(function () {
        $("#promoBox").hide();
    });

    $("#btnShow").click(function () {
        $("#promoBox").show();
    });

    $("#btnToggle").click(function () {
        $("#detailBox").toggle();
    });

    $("#menu li a").click(function () {
        $("#menu li a").removeClass("active");
        $(this).addClass("active");
    });
});