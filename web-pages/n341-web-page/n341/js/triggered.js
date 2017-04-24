/*
TITLE: Triggered
AUTHOR: Blake Conrad
CREATE DATE: March 20 2017
PURPOSE: 
LAST MODIFIED ON: March 20 2017
LAST MODIFIED BY: Blake Conrad
MODIFICATION HISTORY:
~ March 20 2017 initial commit
*/


/*
Create a page with a Document or Window event besides document.ready or scroll.
Include a keyboard event besides keyup.
Include a mouse event besides click.
*/

function keyDownFunction(){
    var textAdd = "<p> You just keydown'd </p>";
    $("#appendHere").append(textAdd);
}
function windowHandler(){
    alert("Setting up your window hander.");
    var textAdd = "<p> Your window handler is set up. </p>";
    $("#appendHere").append(textAdd);
}

function mouseEnterFunction(){
    
    
}

$(document).ready(function(){
    $( "#boxed" ).mouseenter(function() {
        $("#boxed").append("<p>Welcome to the box.</p>");
    });
    
    
});

$(document).keydown(function(){ keyDownFunction(); });

$(window).ready(function(){ windowHandler(); });

