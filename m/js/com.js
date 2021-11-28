$(document).ready(function(){
    $('[data-click]').click(function(){
        var selector = $('.' + $(this).attr('data-click'));
        selector.addClass('active');
        selector.find('.close').click(function(){
            selector.removeClass('active');
        });
    });
})