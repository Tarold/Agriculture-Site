
$('.openMenu').click(function(){
    $('.menuDown').css("display", "none");
    $('.burgerMenu').css("display", "block");
    $('.menu').removeClass('d-flex justify-content-center');
    $('.menuUp').addClass('active');
    $('.burgerMenu').addClass('activeBurger');
    $(".active").slideDown(500);
    $(".openMenu").css("visibility", "hidden");
    $(".closeMenu").slideDown(500);
});
$('.closeMenu').click(function(){
    
    $('.menu').removeClass('d-flex justify-content-center');
    $(".active").slideUp(500);
    $(".closeMenu").slideUp(500);
    setTimeout(
        function() 
        {
            $(".openMenu").css("visibility", "visible");
            $('.menuUp').removeClass('active');
            $('.burgerMenu').removeClass('activeBurger');
            $('.menu').addClass('d-flex justify-content-center');
        }, 500);
});
$(window).on('resize', function(){
    if($(window).width() > 991) {
        $('.menuDown').css("display", "block");
        $('.burgerMenu').css("display", "none");

        $(".openMenu").css("visibility", "visible");
        $('.menuDown').removeClass('active');
        $('.burgerMenu').removeClass('activeBurger');
        $('.menu').addClass('d-flex justify-content-center');
        
        $(".active").slideUp(0);
        $(".closeMenu").slideUp(0);
    }
    if($(window).width() <= 991) {
        $('.menuDown').css("display", "none");
        $('.burgerMenu').css("display", "block");
    }
});
