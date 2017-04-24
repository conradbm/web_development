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



/*
Identity: f1
Parameters: id of a div object, a numeric number
Return Value: null
*/
function f1(divId, intNumber){
    var latteTxt = "installing " +intNumber.toString()+ " coffee pots. ";
    alert(latteTxt);
    document.getElementById(divId).textContent += latteTxt
}
/*
Identity: f2
Parameters: id of a div object, a numeric number
Return Value: null
*/
function f2(divId, intNumber){
    var latteTxt = "brewing up " +intNumber.toString()+ " lattes. ";
    alert(latteTxt);
    document.getElementById(divId).textContent += latteTxt;
}

/*
Identity: f3
Parameters: id of a div object, a numeric number
Return Value: null
*/
function f3(divId, intNumber){
    var latteTxt = "shaking up " +intNumber.toString()+ " ice teas. ";
    alert(latteTxt);
    document.getElementById(divId).textContent += latteTxt
}


/*
Identity: f4
Parameters: id of a div object, a numeric number
Return Value: null
*/
function f4(divId, intNumber){
    var latteTxt = "steaming up " +intNumber.toString()+ " cafe mochas. ";
    alert(latteTxt);
    document.getElementById(divId).textContent += latteTxt
}

/*
Identity: f5
Parameters: id of a div object, a numeric number
Return Value: null
*/
function f5(divId, intNumber){
    var latteTxt = "flirring up " +intNumber.toString()+ " furry milkshakes.";
    alert(latteTxt);
    document.getElementById(divId).textContent += latteTxt
}

/*
Identity: f6
Parameters: id of a div object, a numeric number
Return Value: null
*/
function f6(divId, intNumber){
    var latteTxt = "flapping up" +intNumber.toString()+ " flappachinos. ";
    alert(latteTxt);
    document.getElementById(divId).textContent += latteTxt
}

/*
Identity: ready
Parameters: launch function
Return Value: void
*/
$(document).ready(function(){
    alert("The coffee brewing has begun!");
    f1("appendHere",1);
    f2("appendHere",2);
    f3("appendHere", 3);
    f4("appendHere",4);
    f5("appendHere",5);
    f6("appendHere",6);
    
});
