/*
TITLE: Arrays and Looping Lab
AUTHOR: Blake Conrad
CREATE DATE: Jan 06 2017
PURPOSE: 
LAST MODIFIED ON: Jan 08 2016
LAST MODIFIED BY: Blake Conrad
MODIFICATION HISTORY:
~ JAN 23 2016 initial commit
*/

/*

Arrays & Loopiness Rubric
Criteria	Ratings	Pts
Prompt the user for a single character
1.0 pts
Check for valid data - exactly ONE single character
2.0 pts
Convert the character to ascii using parseAscii()
2.0 pts
Store the ascii code in a variable with the int prefix.
1.0 pts
Convert the ascii to an 8-digit binary number using parseBin()
2.0 pts
Check for exactly 8 digits in the binary number. Pad with 0s if necessary.
1.0 pts
Store each 1 or 0 of the binary number into an array using the split method
4.0 pts
Loop through the array and write "true" for each 1 and "false" for each 0 in the binary array
4.0 pts
Send output to a page element.
*/


function isASCII(str) {
    return /^[\x00-\x7F]*$/.test(str);
}

$(document).ready(function(){
    
    // Get the input
    var strQuestion = "Please enter exactly ONE single character.";
    var strDefault = "Example: 'a' or 'b'";
    strAscii = prompt(strQuestion, strDefault);
    
    // make sure it is a single character
    if(strAscii.length == 1)
    {
        // get the single letter as an int
        intAscii = strAscii.charCodeAt(0); 
        
        // make sure it is a valid ascii character
        if((intAscii >= 65 && intAscii <= 90) || (intAscii >= 97 && intAscii <= 122)){
            
            // padd with a 0 and make the int a binary
            strbinAscii = '0' + intAscii.toString(2); 
            
            // make sure there is exactly 8 bits to loop through
            if(strbinAscii.length == 8){
                
                // split the array by bits
                binArr = strbinAscii.split("");
                
                // confirmation write ..
                document.getElementById('appendHere').textContent += binArr + "   :    ";

                // write out each bit as TRUE of FALSE based on the array value
                for(var i = 0; i < binArr.length; i++){
                    
                    // logic to determine the on and off bits
                    if(binArr[i] == "1"){
                        document.getElementById('appendHere').textContent += "TRUE ";
                    }
                    else if(binArr[i] == "0"){
                        document.getElementById('appendHere').textContent += "FALSE ";
                    }
                }
            }
        }
    
    }
    


    document.getElementById('appendHere').textContent = outStr;
});