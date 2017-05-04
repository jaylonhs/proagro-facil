$(function() {
    $('.menu-dropdown').mouseover(function() {
        $(this).addClass('active');
    });
    
    $('.menu-dropdown').mouseout(function() {
        $(this).removeClass('active');
    });
});