
/*
TITLE: More Iffy Lab
AUTHOR: Blake Conrad
CREATE DATE: Jan 06 2017
PURPOSE: 
LAST MODIFIED ON: FEB 05 2016
LAST MODIFIED BY: Blake Conrad
MODIFICATION HISTORY:
~ FEB 05 2016 initial commit
*/


function doLabWithIfElses(a, b){

    var strLat_Lon = prompt("What's your current latitude/longitude? (Example) 138.1 (space) 131.7");
    var destLat_Lon = prompt("What's your destination latitude/longitude? (Example) 138.1 (space) 131.7");
    
    var a = strLat_Lon.split(' ').map(Number);
    var b = destLat_Lon.split(' ').map(Number);

    var directions = "you should go more ";

    if(a[0] < b[0]){
        directions+="<b style=\"color:blue;\">north</b> ";
    }
    else if(a[0] > b[0]){
        directions+="<b style=\"color:red;\">south</b> ";
    }
    else{
        directions+="";
    }

    if(a[1] < b[1]) {
        directions+="<b style=\"color:orange;\">east</b> ";
    }
    else if(a[1] > b[1]) {
        directions+="<b style=\"color:green;\">west</b> ";
    }
    else{ 
        directions+="";
    }
    
    if(directions=="you should go more "){
        directions+="... well, you're already there!";
    }
    else{
        directions += " and that should get you there!";
        
    }
    outStr = "<h2> ";
    outStr += directions;
    outStr += " </h2><br>";
    var strResp = $(outStr).hide();
    $('#appendHere').append(strResp);
    strResp.fadeIn();
}


function doLabWithSwitchCases(a, b){
    
    var strLat_Lon = prompt("What's your current latitude/longitude? (Example) 138.1 (space) 131.7");
    var destLat_Lon = prompt("What's your destination latitude/longitude? (Example) 138.1 (space) 131.7");
    
    var a = strLat_Lon.split(' ').map(Number);
    var b = destLat_Lon.split(' ').map(Number);
    
    var directions = "you should go more ";

    switch(true){
    
        case(a[0] < b[0]):
            directions+="<b style=\"color:blue;\">north</b> ";
            
            
            
                                    case(a[1] < b[1]):
                                    directions+="<b style=\"color:orange;\">east</b> ";
                                    break;


                                case(a[1] > b[1]):
                                    directions+="<b style=\"color:orange;\">east</b> ";
                                    break;

                                case(a[1] == b[1]):
                                    directions+="";
                                    break;
            
            
            
            break;
        
        case(a[0] > b[0]):
            directions+="<b style=\"color:red;\">south</b> ";
            
            
                        
                                    case(a[1] < b[1]):
                                    directions+="<b style=\"color:orange;\">east</b> ";
                                    break;


                                case(a[1] > b[1]):
                                    directions+="<b style=\"color:orange;\">east</b> ";
                                    break;

                                case(a[1] == b[1]):
                                    directions+="";
                                    break;
            
            break;
        
        case(a[0] == b[0]):
            directions+="";
            
                        
                                    case(a[1] < b[1]):
                                    directions+="<b style=\"color:orange;\">east</b> ";
                                    break;


                                case(a[1] > b[1]):
                                    directions+="<b style=\"color:orange;\">east</b> ";
                                    break;

                                case(a[1] == b[1]):
                                    directions+="";
                                    break;
            
            break;
        

        
    
            
        default:
 
            break;
            
    }
           
     if(directions=="you should go more ") directions+="... well, you're already there!";
     else directions += " and that should get you there!";
    
    outStr = "<h2> ";
    outStr += directions;
    outStr += " </h2><br>";
    var strResp = $(outStr).hide();
    $('#appendHere').append(strResp);
    strResp.fadeIn(1000);
}
