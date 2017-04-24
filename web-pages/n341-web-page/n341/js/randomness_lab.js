/*
TITLE: Randomness Lab
AUTHOR: Blake Conrad
CREATE DATE: Jan 06 2017
PURPOSE: 
LAST MODIFIED ON: Jan 08 2016
LAST MODIFIED BY: Blake Conrad
MODIFICATION HISTORY:
~ FEB 01 2016 initial commit
*/

$(document).ready(function(){
    
    //Create a single Pirate object with at least 3 properties and 2 methods as described in the assignment instructions.
    function Pirate(strPosition){
        
        // Properties
        this.position = strPosition;
        this.angerLevel = 0;
        
        // Functions
        this.getPosition = function(){ alert(this.position); }
        this.getAngerLevel = function(){ alert(this.angerLevel); }
        this.garr = function(){ this.angerLevel = Math.floor(Math.random() * 10) + 1; }
        this.returnDiv = function(){
            
            // Create the div
            var pirateDiv = document.createElement("DIV");
            pirateDiv.setAttribute("id", this.position);
            pirateDiv.setAttribute("class","container");
            
            // Add the content
            var divContent = document.createTextNode(this.position + " is at anger level: " + parseInt(this.angerLevel) + ".");
            pirateDiv.appendChild(divContent);
            
            // Return the div
            return pirateDiv;
        };
    };      
    
    //Use the object to create a Captain and at least 3 crew mates.
    var captainPirate = new Pirate("Captain", 5, 3);
    captainPirate.getPosition();
    
    var crewPirate1 = new Pirate("CrewPirate1");
    crewPirate1.getPosition();
    
    var crewPirate2 = new Pirate("CrewPirate2");
    crewPirate2.getPosition();
    
    var crewPirate3 = new Pirate("CrewPirate3");
    crewPirate3.getPosition();
    
    
    
    //Each pirate object should use its own method to choose a random number that is stored in its own numeric property.
    captainPirate.garr();
    crewPirate1.garr();
    crewPirate2.garr();
    crewPirate3.garr();
    
    captainPirate.getAngerLevel();
    crewPirate1.getAngerLevel();
    crewPirate2.getAngerLevel();
    crewPirate3.getAngerLevel();
    
    
    //Each pirate object should use its own speak method to send output to its chosen html tag using an id.
    var div1 = captainPirate.returnDiv();
    var div2 = crewPirate1.returnDiv();
    var div3 = crewPirate2.returnDiv();
    var div4 = crewPirate3.returnDiv();
    
    document.getElementById('appendHere').appendChild(div1);
    document.getElementById('appendHere').appendChild(div2);
    document.getElementById('appendHere').appendChild(div3);
    document.getElementById('appendHere').appendChild(div4);
    
});

