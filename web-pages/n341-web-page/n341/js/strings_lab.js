/*
TITLE: Strings Lab
AUTHOR: Blake Conrad
CREATE DATE: Jan 06 2017
PURPOSE: 
LAST MODIFIED ON: FEB 18 2017
LAST MODIFIED BY: Blake Conrad
MODIFICATION HISTORY:
~ FEB 18 2017 initial commit
*/



/*
Strings Rubric
Criteria	Ratings	Pts
This criterion is linked to a Learning Outcome Prompt the user for the name of the queen's significant other (or just a friend).
1.0 pts
This criterion is linked to a Learning Outcome Use the name to create ship names for 12 different ships.
12.0 pts
This criterion is linked to a Learning Outcome Be sure to use charAt()
1.0 pts
This criterion is linked to a Learning Outcome Be sure to use indexOf()
1.0 pts
This criterion is linked to a Learning Outcome Be sure to use substring()
1.0 pts
This criterion is linked to a Learning Outcome Be sure to use trim()
1.0 pts
This criterion is linked to a Learning Outcome Be sure to use replace()
1.0 pts
This criterion is linked to a Learning Outcome Be sure to use toUpperCase()
1.0 pts
This criterion is linked to a Learning Outcome Be sure to use toLowerCase()
1.0 pts
This criterion is linked to a Learning Outcome Store the ship names into an array.
2.0 pts
This criterion is linked to a Learning Outcome Write the names to a page element in the form of a list.
*/
$(document).ready(function(){
    
    //Get the name
    var strName = "";
    var strQuestion = "What is the name of the Queen's significant other?";
    var strDefault = "Coffee Captain Blake";
    strName = prompt(strQuestion, strDefault);

    //Create 12 ships
    var ships = [];
    ships.push(strName.charAt(0));
    ships.push(strName.indexOf(1));
    ships.push(strName.substring(0,2));
    ships.push(strName.trim());
    ships.push(strName.replace('a','z'));
    ships.push(strName.toUpperCase());
    ships.push(strName.toLowerCase());
    ships.push(strName.split(" "));
    ships.push(strName.charAt(2));
    ships.push(strName.indexOf(0));
    ships.push(strName.substring(2,4));
    ships.push(strName.substring(5,strName.length));


    // CREATE UL OBJECT
    $("#appendHere").append('<ul id=theList></ul>');
    
    for(var i = 0; i < ships.length; i++){
        // CREATE AND APPEND LI ITEMS
        $("#theList").append('<li id=item'+ i.toString() + '>'+ships[i]+'</li>');
    }
    
});