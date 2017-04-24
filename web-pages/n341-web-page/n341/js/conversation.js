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


//Output string should be a readable message.
$(document).ready(function(){
    
    //Input the user's pirate name with a prompt that uses a default value.
    //Store the pirate name in a variable with the str prefix.
    var strName = "";
    var strQuestion = "What is your name?";
    var strDefault = "Coffee Captain Blake";
    strName = prompt(strQuestion, strDefault);
    
    
    
    //Prompt the user for the number of gold doubloons they plundered. Also use a default value.
    //Store the number in a variable with the str prefix.
    var strNumBalloons = "";
    var strNumBalloonsQuestion = "the number of gold doubloons you plundered?";
    var defaultNumBallons = "100";
    strNumBalloons = prompt(strNumBalloonsQuestion, defaultNumBallons);
    
    //Perform parseInt() on the number of gold doubloons to convert the string to an integer.
    var intNumBalloons = parseInt(strNumBalloons);
    
    //Multiply the converted number of gold doubloons by the value of one doubloon ($287) to determine the profit.
    //Store the calculated profit in a variable with the int prefix.
    var intProfit = intNumBalloons * 287;
    
    //Output a concatenated string including the user's pirate name, the number of gold doubloons,
    //  and the total profit in USD to a page element using textContent.
    var outStr = strName + " " + intNumBalloons.toString() + " " + intProfit.toString() + ".";
    
    alert(outStr);
    document.getElementById('appendHere').textContent = outStr;
});