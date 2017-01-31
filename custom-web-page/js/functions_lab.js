/*
TITLE: Function Lab
AUTHOR: Blake Conrad
CREATE DATE: Jan 06 2017
PURPOSE: 
LAST MODIFIED ON: Jan 08 2016
LAST MODIFIED BY: Blake Conrad
MODIFICATION HISTORY:
~ JAN 31 2016 initial commit
*/



// Six functions to determine what the user wants
function f1(divId, number){
    alert("f1");
    
    h3child = document.createElement("H2");
    h3text = document.createTextNode(number.toString());
    h3child.appendChild(h3text);
    document.getElementById(divId).appendChild(h3child);
    
}
function f2(divId, number){
    alert("f2");
    
    h3child = document.createElement("H2");
    h3text = document.createTextNode(number.toString());
    h3child.appendChild(h3text);
    document.getElementById(divId).appendChild(h3child);
}
function f3(divId, number){
    alert("f3");
    
    h3child = document.createElement("H2");
    h3text = document.createTextNode(number.toString());
    h3child.appendChild(h3text);
    document.getElementById(divId).appendChild(h3child);
}

function f4(divId, number){
    alert("f4");
    
    h3child = document.createElement("H2");
    h3text = document.createTextNode(number.toString());
    h3child.appendChild(h3text);
    document.getElementById(divId).appendChild(h3child);
}
function f5(divId, number){
    alert("f5");
    
    h3child = document.createElement("H2");
    h3text = document.createTextNode(number.toString());
    h3child.appendChild(h3text);
    document.getElementById(divId).appendChild(h3child);
}
function f6(divId, number){
    alert("f6");
    
    h3child = document.createElement("H2");
    h3text = document.createTextNode(number.toString());
    h3child.appendChild(h3text);
    document.getElementById(divId).appendChild(h3child);
}

$(document).ready(function(){
    alert("The coffee brewing has begun!");
    f1("appendHere","1");
    f2("appendHere","2");
    f3("appendHere", "3");
    f4("appendHere","4");
    f5("appendHere","5");
    f6("appendHere","6");
});
