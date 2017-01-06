// Executes when HTML-Document is loaded and DOM is ready
$(document).ready(function() {
            
            
    var width = $(window).width(); 
    var height = $(window).height(); 

    if ((width >= 400  ) && (height >= 616)) {

        $('.navOptions').css({
            float: 'left'
        });

    }
    else {}
});
        
// When the size of the screen changes.
$(window).on('resize', function(){
    var win = $(this); //this = window
    if (win.height() >= 820) { /* ... */ }
    if (win.width() >= 1280) { /* ... */ }
});

// When the user scrolls
$(window).scroll(function(){

    if($(window).scrollTop() <= 
       $(".half-right").height() - $(".sign-in-form").height())
    {
        $("#sign-in-movable").css("padding-top",$(window).scrollTop());
    }
    else{
        $("#sign-in-movable").css("padding-bottom",$(window).scrollTop());
    }
});
        
// On hovers
$("#sign-in-email").hover(function(){
    $(this).css("border", "1px solid #87cefa");
    }, function(){
        $(this).css("border", "none");
});
$("#sign-in-password").hover(function(){
    $(this).css("border", "1px solid #87cefa");
    }, function(){
        $(this).css("border", "none");
});