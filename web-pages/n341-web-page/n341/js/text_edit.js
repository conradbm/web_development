/*
TITLE: Text Editing for Multi Write Lab
AUTHOR: Blake Conrad
CREATE DATE: Jan 06 2017
PURPOSE: 
LAST MODIFIED ON: Jan 08 2016
LAST MODIFIED BY: Blake Conrad
MODIFICATION HISTORY:
~ JAN 20 2016 ~ initial commit.
*/


//you call function on page load time but not call on button event,
// you will need to call function onclick event, you may add event 
// inline element style or event bining
function Choice(elem) {
    var box = document.getElementById("box");
    if (elem.id == "documentwrite") {
        document.write("HELLO JOHNSON");
    } else if (elem.id == "textcontent") {
        document.getElementById("experiment").textContent = "textContent";
    } else if (elem.id == "innerhtml"){
        document.getElementById("experiment").innerHTML = "innerHTML";
    };
};
