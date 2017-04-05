    
/********************************************************************************************/
/* When: Occurs when the browser loads bible_api/index.html page
/* Purpose: Basically should just load up the functions that we will need for the web page
/*              nothing should actually get called in this, just loaded.
/********************************************************************************************/
$(document).ready(function(){

    $('#submitForm').submit(function(e){
        e.preventDefault(); // Prevent Default Submission

        $.ajax({
            url: 'mailer.php',
            type: 'POST',
            data: $(this).serialize(), // it will serialize the form data
            dataType: 'html'
            })
        .done(function(data){
         $('#submitForm').fadeOut('slow', function(){ 
              $('#submitForm').fadeIn('slow').html(data);
            });
        })
        .fail(function(){
             alert('Ajax Submit Failed ...'); 
        });
    });

    
    $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
          // Avoid following the href location when clicking
          event.preventDefault();
          // Avoid having the menu to close when clicking
          event.stopPropagation();
          // If a menu is already open we close it
          $('ul.dropdown-menu [data-toggle=dropdown]').parent().removeClass('open');
          // opening the one you clicked on
          $(this).parent().addClass('open');

        var menu = $(this).parent().find("ul");
        var menupos = $(menu).offset();

        if (menupos.left + menu.width() > $(window).width()) {
            var newpos = -$(menu).width();
            menu.css({ left: newpos });    
        } else {
            var newpos = $(this).parent().width();
            menu.css({ left: newpos });
        }
    });
});
 