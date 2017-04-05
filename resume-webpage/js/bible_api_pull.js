

/********************************************************************************************/
/* When: Occurs when the browser loads bible_api/index.html page
/* Purpose: Basically should just load up the functions that we will need for the web page
/*              nothing should actually get called in this, just loaded.
/********************************************************************************************/
$(document).ready(function(){

    /**************************************************************************/
    /* When: Occurs when the form id=target is clicked
    /* Purpose: Update the id=scripture div inside of bible_api/index.html
    /**************************************************************************/
    $('#target').submit(function(event){
        
        // Next up ... dynamically accept the users choice!!!! Each input has it's own ID now!
        $('#loading-indicator').show();
        
        // Load the data
        var book = $("#bookInput").val();
        var chapter= $("#chapterInput").val();
        //var keywordInput = $("#searchInput").val();
        var book_chapter = book+chapter;
        
        // Pass the data
        jQuery.ajax({
            url:'http://getbible.net/json',
            dataType: 'jsonp',
            data: 'p='+book_chapter+'&v=kjv',
            jsonp: 'getbible',
            success:function(json){
               
                // set text direction
                if (json.direction == 'RTL'){
                    var direction = 'rtl';
                } else {
                    var direction = 'ltr'; 
                }
                /********************************************/
                /* Formatting for verses being returned     */
                /********************************************/
                if (json.type == 'verse'){
                    var output = '';
                        jQuery.each(json.book, function(index, value) {
                            output += '<center><b>'+value.book_name+' '+value.chapter_nr+'</b></center><br/><p class="'+direction+'">';
                            jQuery.each(value.chapter, function(index, value) {
                                
                                output += '  <small class="ltr">' +value.verse_nr+ '</small>  ';
                                output += value.verse;
                                output += '<br/>';
                            });
                            output += '</p>';
                        });
                    jQuery('#scripture').html(output);  // <---- this is the div id we update
                } 
                /********************************************/
                /* Formatting for chapters being returned   */
                /********************************************/
                else if (json.type == 'chapter'){
                    var output = '<center><h3><b>'+json.book_name+' '+json.chapter_nr+'</b></h3></center><br/><p class="'+direction+'">';
                    jQuery.each(json.chapter, function(index, value) {
                        if(value.verse.includes(keywordInput)){
                            output += '  <small class="ltr">' +value.verse_nr+ '</small>  ';
                            output += value.verse;
                            output += '<br/>';
                        }
                    });
                    output += '</p>';
                    jQuery('#scripture').html(output);  // <---- this is the div id we update
                } 
                /********************************************/
                /* Formatting for books being returned      */
                /********************************************/
                else if (json.type == 'book'){
                    var output = '';
                    jQuery.each(json.book, function(index, value) {
                        output += '<center><h1><b>'+json.book_name+' '+value.chapter_nr+'</b></h1></center><br/><p class="'+direction+'">';
                        jQuery.each(value.chapter, function(index, value) {
                            output += '  <small class="ltr">' +value.verse_nr+ '</small>  ';
                            output += value.verse;
                            output += '<br/>';
                        });
                    output += '</p>';
                });
                if(addTo){
                    jQuery('#scripture').html(output);  // <---- this is the div id we update
                }
              }
             $('#loading-indicator').hide();
            },
            error:function(){
                jQuery('#scripture').html('<h2>No scripture was returned, please try again!</h2>'); // <---- this is the div id we update
             },
        });
        
       
        event.preventDefault();
    });

    /**************************************************************************/
    /* When: Occurs when the navbar drop downs are clicked
    /* Purpose: Dynamically pop up a menu of interesting options
    /**************************************************************************/
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