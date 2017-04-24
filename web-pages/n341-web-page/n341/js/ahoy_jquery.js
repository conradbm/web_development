/*
TITLE: Ahoy JQuery Lab
AUTHOR: Blake Conrad
CREATE DATE: March 20 2017
PURPOSE: 
LAST MODIFIED ON: March 20 2017
LAST MODIFIED BY: Blake Conrad
MODIFICATION HISTORY:
~ March 20 2017 initial commit
*/



/*
DONEProduce page output using $('p').html('message'); within a jQuery $(document).ready wrapper (no button needed).
1.0 pts
This criterion is linked to a Learning OutcomeCreate a button that calls the jQuery append() DONEmethod. Add text with a <br /> tag for readability.
5.0 pts
This criterion is linked to a Learning OutcomeCreate a button that calls the jQuery html() method to replace text.
5.0 pts
This criterion is linked to a Learning OutcomeValidate the html at https://validator.w3.org/
2.0 pts
This criterion is linked to a Learning OutcomeMeet all expectations listed in the Lab Guidelines (http://cs.iupui.edu/n341/n341LabGuidelines.html)
2.0 pts


*/

function btnFunction(){
    $('p').append("<br>")
    $('p').append("Appending all good things to your life.");
}

function jquery_append_html(){
    $( "p" ).html("REPLACED!!!! OH SNAP!");
}
$(document).ready(function(){
    
    $('p').html('message');
    
    // Add a button that appends text, and a <br />
    
});