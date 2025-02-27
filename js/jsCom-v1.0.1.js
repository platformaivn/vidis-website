jQuery(document).ready(function() {   
    // Lazy Load
    var myLazyLoad = new LazyLoad({
        elements_selector: ".lazy"
    });
    // Back top
    $('body').append('<div id="top" ><img src="/cdn/17/images/commont/top.png" alt="top"/></div>');
    $(window).scroll(function() {
        if($(window).scrollTop() > 100) {
            $('#top').fadeIn();
        } else {
            $('#top').fadeOut();
        }
    });
    $('#top').click(function() {
        $('html, body').animate({scrollTop:0},500);
    });
    $('.search i').click(function() {
        $('#timkiem').toggleClass('show');
    });
    // Menu 
    $('#menu ul li').hover(
        function(){
             $(this).children('ul').stop().slideDown();
        },
        function(){
            $(this).children('ul').css({'display':'none'});
        }
    );
    $(window).scroll(function(event) {
        var $window = $(window);
        if($window.scrollTop() > $('.header').height()){
            $('.header').addClass('fixed');           
        }else{
            $('.header').removeClass('fixed');
        }
    }); 

    ///// Icon Chat FB
    $('.js-facebook-messenger-box').click(function(event){
        if($('.js-facebook-messenger-box').hasClass("open")){
            $('.js-facebook-messenger-box').removeClass('open');
            $('.js-facebook-messenger-box').addClass('rotate');
        }else{
            $('.js-facebook-messenger-box').removeClass('rotate');
            $('.js-facebook-messenger-box').addClass('open');
        }
        if($('.js-facebook-messenger-container').hasClass("open")){
            $('.js-facebook-messenger-container').removeClass('open');
        }else{
            $('.js-facebook-messenger-container').addClass('open');}
    });
});
