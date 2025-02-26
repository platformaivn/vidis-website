$(document).ready(function(e) {
    $('.detail-item__tab').click(function(){
        $('.detail-item__tab').removeClass('active');
        var id_tab=$(this).attr('href');
        $(this).addClass('active');
        $('.detail-content_tab').css({'display':'none'});
        $(id_tab).fadeIn();
        return false;
    });
    var detailOwl = $("#detailOwl");
    detailOwl.owlCarousel({
        rtl:false,
        loop:false,
        margin:1,
        dots:false,
        lazyLoad: true,
        nav:false,
        responsive:{
            0:{
                items:4
            },
            600:{
                items:5
            },
            1000:{
                items:6
            }
        }
    });
    $(".detail-next").click(function(){
        detailOwl.trigger('next.owl');
    });
    $(".detail-prev").click(function(){
        detailOwl.trigger('prev.owl');
    });
    $('#minus').click(function(event) {
        var number = $('.amount').val();
        if(number > 1) number = parseInt(number) - 1;
        else number = 1;
        $('.amount').val(number);
        return false;
    });
    $('#plus').click(function(event) {
        var number = $('.amount').val();
        number = parseInt(number) + 1;
        $('.amount').val(number);
        return false;
    });
});