/*
TITLE: Iffy Lab
AUTHOR: Blake Conrad
CREATE DATE: Jan 06 2017
PURPOSE: 
LAST MODIFIED ON: FEB 05 2016
LAST MODIFIED BY: Blake Conrad
MODIFICATION HISTORY:
~ FEB 05 2016 initial commit
*/


/*
Get the users logical answer
*/
function getLogicalAnswer(strAns){

    var returnString="";
    if(strAns.includes("YES") || strAns.includes("YEAH") || strAns.includes("YUP") || strAns.includes("SURE")){
        returnString = "Great, they're giving out free drinks in the lobby!";   
    }
    else if(strAns.includes("NO") || strAns.includes("NAH") || strAns.includes("NOPE") || strAns.includes("NAY")){
        returnString = "Ah, for real? They're giving out free stuff ... No coffee for you!";
    }
    else{
        returnString = "Dude, do you even know what's going on ? ... It's free coffee day in the lobby..";
    }
    
    return returnString;
}

/*
Identity: ready
Parameters: launch function
Return Value: void
*/
$(document).ready(function(){
    var strAns = prompt("Did you arrive to the Starbucks on time?","Sure dude, what's a starbucks?");
    var strResp = $("<h2> " + getLogicalAnswer(strAns.toUpperCase()) + " </h2>").hide();
    $('#appendHere').append(strResp);
    strResp.fadeIn('slow');
});
