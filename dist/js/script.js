$(document).ready(function() {

    $(".sidebar-toggler").on("click", function() {
        $(".sidebar").toggleClass("sidebar-visible");
    });
    $("main").on("click", function() {
        $(".sidebar").removeClass("sidebar-visible");
    });
});