/*
TITLE: Shaker
AUTHOR: Blake Conrad
CREATE DATE: March 20 2017
PURPOSE: 
LAST MODIFIED ON: March 20 2017
LAST MODIFIED BY: Blake Conrad
MODIFICATION HISTORY:
~ March 20 2017 initial commit
*/


/*
Mozilla vs. IE results:

The only noticable difference I saw was that in IE the animations were not as fluid, wheras in mozilla things looked more natural.

*/


$(document).ready(function(){
    $( "#hidebtn" ).click(function() {
      $( "#clickme" ).hide( "slow", function() {
        //
      });
    });
    $( "#togglebtn" ).click(function() {
        $( "p" ).toggle();
    });
    $( "#showbtn" ).click(function() {
        $( "#clickme" ).show();
    });    
    $( "#slideupbtn" ).click(function() {
        $( "#clickme").slideUp("slow").slideDown("slow");
    });
    $( "#slidedownbtn" ).click(function() {
        $( "#clickme").slideDown( "slow").slideUp("slow").slideDown("slow");
    });
    $( "#fadeinbtn" ).click(function() {
        $( "div:hidden:first" ).fadeIn( "slow" );
    });
    $( "#fadeoutbtn" ).click(function() {
        $( ".quiet" ).fadeOut( "slow" );
    });
    
});

