/*
TITLE: Web Page Redux -- Assignment 1
AUTHOR: Blake Conrad
CREATE DATE: Jan 06 2017
PURPOSE: 
LAST MODIFIED ON: Jan 08 2016
LAST MODIFIED BY: Blake Conrad
MODIFICATION HISTORY:
~ JAN 06 2016 ~ Lauched the site.
~ JAN 07 2016 ~ Edited the image buffering.
~ JAN 08 2016 ~ Updated the site to be w3 compatible.
*/

// Create array of images.
var images = ["images/coffee.png",
              "images/coffee2.png",
              "images/coffee3.png",
              "images/coffee4.png"];

// Default index set to 0.
var curImageIndex = 0;

 //Remember the ID of the interval so we can stop it, then return to it later.
var intervalId;

// Function called when object is hovered.
function startImageCycle(element){
    
    //Cycle the image now so feels responsive. Remove if not wanted.
    cycleImage(element);
    
    /*
    //setInterval receives 3 args:
        //1. A Function.
        //2. Time interval in milli seconds.
        //3. The argument to pass into the function.
    // Then the setInterval essentially is a while loop that iteratively does the function you pass into it
    */
    intervalId = setInterval(cycleImage,500,element);
}

// Function called when object is un-hovered.
function stopImageCycle(element){
    clearInterval(intervalId);
}


// Function that has a loops through indices to update an img tag's src property, i.e.. update an image.
function cycleImage(element){
    curImageIndex++;
    if(curImageIndex >= images.length) {
        curImageIndex = 0;
    }
    $(element).attr("src", images[curImageIndex]);
}
