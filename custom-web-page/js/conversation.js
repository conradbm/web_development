/*
TITLE: Multi Writes Lab
AUTHOR: Blake Conrad
CREATE DATE: Jan 06 2017
PURPOSE: 
LAST MODIFIED ON: Jan 08 2016
LAST MODIFIED BY: Blake Conrad
MODIFICATION HISTORY:
~ JAN 23 2016 initial commit
*/

$(document).ready(function(){
    strName = "";
    var strQuestion = "What is your name?";
    var strDefault = "Coffee Captain Blake";
    strName = prompt(strQuestion, strDefault);
    var strOutput = "";
    var strName = "Blake-O";
    var strGreeting = "Good morning ";
    strOutput = strGreeting + strName;
    alert(strOutput);
    var strNumber = "15";
    var strNewNumber = "";
    alert("You have this many cannonballs: " + strNumber);
    
    var intNumber = parseInt(strNumber);
    var intNewNumber = intNumber - 2;
    var strNewNumber = intNewNumber.toString();
    alert("You now have this many cannonballs: " + strNewNumber);
});