/*
TITLE: Pick Me Lab
AUTHOR: Blake Conrad
CREATE DATE: March 20 2017
PURPOSE: 
LAST MODIFIED ON: March 20 2017
LAST MODIFIED BY: Blake Conrad
MODIFICATION HISTORY:
~ March 20 2017 initial commit
*/


/*
Create at least 10 html tags labelled with various classes and ids to be used for jQuery selection.
1.0 pts
Create at least 7 buttons using jQuery event registration with named functions.
5.0 pts
Button1 will demonstrate a jQuery selection by tag name that shows visible results on your page.
2.0 pts
Button2 will demonstrate a jQuery selection by class that shows visible results on your page.
2.0 pts
Button3 will demonstrate a jQuery selection by id that shows visible results on your page.
2.0 pts
Button 4 will apply multiple instructions to a jQuery selection in a single line of code.
3.0 pts
Button5 will demonstrate a filtered jQuery selection by tag name that shows visible results on your page.
2.0 pts
Button6 will demonstrate a filtered jQuery selection by class that shows visible results on your page.
2.0 pts
Button7 will demonstrate a filtered jQuery selection by id that shows visible results on your page.
2.0 pts
Meet all expectations listed in the Lab Guidelines (http://cs.iupui.edu/n341/n341LabGuidelines.html)
3.0 pts
Extra Credit: Turn in by due date, meet ALL above requirements with perfection and do something exceptionally creative with your page. Consider using images or creating something with exceptional functionality. (+2)
0.0 pts
Total Points: 24.0

*/
var j=1;
function createCallback( i ){
  if(i == 1){
      return function f1(){
          //alert("1");
          $('li').html( "item 1 modified by tag via button 1" );
      };
  }
  else if(i == 2){
      return function f2(){
          //alert("2");
          $("ul.the_list").children().text("items modified by class via button 2");
      };
  }
  else if(i == 3){
      return function f3(){
          //alert("3");
            $('#item_'+j).html( "item "+j+" modified by tag via button 3" );
          j++;
          if(j >= 10){
              j=1;
          }
      };
  }
  else if(i == 4){
      return function f4(){
          //alert("4");
        $("#item_1").css("color", "red").slideUp(2000).slideDown(2000);
      
      };
  }
  else if(i == 5){
      return function f5(){
          //alert("5");
        $( "li" ).filter( ":even" ).css("color", "blue").slideUp(2000).slideDown(2000);
      };
  }
  else if(i == 6){
      return function f6(){
          //alert("6");
        $( ".the_list" ).filter( ":even" ).css("color", "blue").slideUp(2000).slideDown(2000);
      };
  }
  else if(i == 7){
      return function f7(){
          $( "#item_5" ).filter( ":even" ).css("color", "blue").slideUp(2000).slideDown(2000);
      };
  }
}


$(document).ready(function(){
    
    
    for(var i = 1; i <= 7; i++) {
        $('#button_' + i).on('click', createCallback( i ) );
    }
    // Add a button that appends text, and a <br />
    
});