$(function () {
    $(document).scroll(function () {
        var $nav = $(".navigation-wrapper");
        $nav.toggleClass('scrolled', $(this).scrollTop() > 250);
    });
});