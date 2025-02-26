var $animation_elements = $('.check-in-view');
var $window = $(window);

setInterval(check_if_in_view, 15000);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            
            $('.ellip-cir .ellipse').css({
                'animation': 'offset 8s linear forwards',
                '-webkit-animation': 'offset 8s linear forwards',
            });
            $(".utility-item .why-item:nth-of-type(1)").css({
                'animation': 'fade 0.1s linear forwards',
                '-webkit-animation': 'fade 0.1s linear forwards',
            });
            $(".utility-item .why-item:nth-of-type(2)").css({
                'animation': 'fade 1.4s linear forwards',
                '-webkit-animation': 'fade 1.4s linear forwards',
            });
            $(".utility-item .why-item:nth-of-type(3)").css({
                'animation': 'fade 3s linear forwards',
                '-webkit-animation': 'fade 3s linear forwards',
            });
            $(".utility-item .why-item:nth-of-type(4)").css({
                'animation': 'fade 4s linear forwards',
                '-webkit-animation': 'fade 4s linear forwards',
            });
            $(".utility-item .why-item:nth-of-type(5)").css({
                'animation': 'fade 6s linear forwards',
                '-webkit-animation': 'fade 6s linear forwards',
            });
        } else {
            $('.ellip-cir .ellipse').removeAttr('style');
            $(".utility-item .why-item").removeAttr('style');
            
        }
    });

};
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');