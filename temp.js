$(function () {
    click = 0;
    $('#online').click(function () {
        if (click == 0) {
            click = 1;
            $('.status_box').addClass("animated fadeInDown");
            $('.status_box').css({ 'display': 'block' });
            console.log(click);
        }
        else {
            click = 0;
            $('.status_box').css({ 'display': 'none' });
            console.log(click);
        }
    });
});
