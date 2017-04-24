/*
TITLE: Web Page Redux -- Assignment 1
AUTHOR: Blake Conrad
CREATE DATE: Jan 09 2017
PURPOSE: 
LAST MODIFIED ON: Jan 09 2016
LAST MODIFIED BY: Blake Conrad
MODIFICATION HISTORY:
~ JAN 09 2016 ~ Create drop down functionality in mobile view
*/


/* 
Not yet functional, but shouldn't be hard to fix with some time and effort.
Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon 
*/
function addResponsiveFunction() {
    var x = document.getElementById("myNavBar");
    if (x.className === "navBarOptions") {
        //x.className += " responsive";
        alert("Added the responsive class to #myNavBar");
    } else {
        //x.className = "navBarOptions";
        alert("Did not add the responsive class to #myNavBar");
    }
}