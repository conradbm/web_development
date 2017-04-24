/*
TITLE: Data Science Resource Center
AUTHOR: Blake Conrad
CREATE DATE: April 24 2017
PURPOSE: 
LAST MODIFIED ON: April 22 2017
LAST MODIFIED BY: Blake Conrad
MODIFICATION HISTORY:
~ March 20 2017 initial commit
~ March 24 2017 scrape form
~ April 22 2017 clean up scraped form
~ April 24 2017 work on custom form checking
*/


/*
This submissions requirements:

Create a complete version of your form with a professional appearance   5.0 pts

Functions use block documentation and are commented well    2.0 pts

Files contain proper header block documentation     2.0 pts
jQuery validation plugin is properly used to ensure that no fields are left empty   4.0 pts

jQuery validation plugin is properly used to ensure that only numeric responses are accepted in numeric fields.     2.0 pts

Display all form entry problems to the user in a functional way.    5.0 pts
Submit button accurately echoes data only after it passes validation    5.0 pts
Total Points: 25.0

*/
$(document).ready(function(){
        
    /* Declare all of the rules and messages for the validation form */
    $("#commentForm").validate({
        rules: {
            cname: {							//<input name="cname">
                required: true,
                maxlength: 10
            },
            cpassword: {							//<input name="cpassword">
                required: true,
                minlength: 5
            },
            datePicker: {						//<input name="datePicker">
                required: true,
                date: true
            },
            ctel: {							  //<input name="cetel">
                required: true,
                phoneUS: true,
                maxlength: 10
            },
            cemail: {							//<input name="cemail">
                required: true,
                email: true
            }
        }, // end rules
        messages: {                             // These messages are displayed when user input doesn't match the rules
            cname: {							//<input name="cname">
                required: "Please enter a username",
                maxlength: $.validator.format("Must not have more than {0} characters")
            },
            cpassword: {							//<input name="cpassword">
                required: "Please provide a password",
                minlength: $.validator.format("Must have at least {0} characters")
            },
            datePicker: {								//<input name="datePicker">
                required: "Please enter a prehistoric date",
                date: "Please enter a valid prehistoric date"
            },
            ctel: {							//<input name="ctel">
                required: "Please enter a Bedrock phone number",
                digits: "Please enter Bedrock digits only",
                maxlength: 10
            },
            cemail: {							//<input name="email">
                required: "Please enter an email address",
                email: "Please enter a valid email address"
            }
        }  // end messages
    }); // end commentForm.validate


    
    /*Declare a an autocomplete function to load up on runtime and be attached to the ID #tags  */
    $( function() {
        var availableTags = [
          "ActionScript",
          "AppleScript",
          "Asp",
          "BASIC",
          "C",
          "C++",
          "Clojure",
          "COBOL",
          "ColdFusion",
          "Erlang",
          "Fortran",
          "Groovy",
          "Haskell",
          "Java",
          "JavaScript",
          "Lisp",
          "Perl",
          "PHP",
          "Python",
          "Ruby",
          "Scala",
          "Scheme"
        ];
        $( "#tags" ).autocomplete({
          source: availableTags
        });
    } );
    
    /* Declare a function to load the datePicker functionality in the form */
    $( function() {
        $( "#datepicker" ).datepicker();
    } );
  
    
    /* Declare a function to give spinner functionality in the form */
    $( function() {
        var spinner = $( "#spinner" ).spinner();

        $( "#disable" ).on( "click", function() {
          if ( spinner.spinner( "option", "disabled" ) ) {
            spinner.spinner( "enable" );
          } else {
            spinner.spinner( "disable" );
          }
        });
        $( "#destroy" ).on( "click", function() {
          if ( spinner.spinner( "instance" ) ) {
            spinner.spinner( "destroy" );
          } else {
            spinner.spinner();
          }
        });
        $( "#getvalue" ).on( "click", function() {
          alert( spinner.spinner( "value" ) );
        });
        $( "#setvalue" ).on( "click", function() {
          spinner.spinner( "value", 5 );
        });

        $( "button" ).button();
  } );
    
    
    /* Instantiate the existence of the tabs for the top of our information page */
    $( "#tabs" ).tabs();
    
    /* Instantiate the existence of the rules of the form to be completed before finishing */
    $("#commentForm").validate();

    /*
    Function for form submittion: 
       meant to:
         - scrape
         - save 
         - and display the contents of a form
    */
    $("#commentForm").submit(function(event){
        
        
        // Clearly get all inputs
        var $inputs = $('#commentForm :input');

        /* Values Contains All Input Field Values */
        var values = {};
        $inputs.each(function() {
            values[this.name] = $(this).val();
        });
       
        // Clearly store all variables
       var score = values["spinner"];
       var name = values["name"];
       var email = values["email"];
       var url = values["url"];
       var interest = values["aoi"];
        var cPw = values["password"];
        var favLang = values["tags"];
        var teli = values["tel"];
        var thedate = values["date"];
       var probs = values["currprobs"];
       var comment = values["comment"];
        
       var radio1 = values["radio1"];
       var radio2 = values["radio2"];
       var radio3 = values["radio3"];
       var radio4 = values["radio4"];
       var radio5 = values["radio5"];
       var radio6 = values["radio6"];
       var checkbox1 = values["checkBoxItem"];
        

        

        // Clearly output the contents of required fields
        $("#results").append("<p>Thank you, "+name+". You're form input is now been processed as:</p>");
        $("#results").append("<p>Password: " + cPw  + "</p>");
        $("#results").append("<p>Phone: " + teli + "</p>"); 
        $("#results").append("<p>Comment: " + comment + "</p>");
        
        
        
        // Check all of our optional fields to see the user decided to put anything in them
        if(score != ""){
            $("#results").append("<p>Love for science is at a rank of:  " + score  + "</p>");
        }
        
        if(url != ""){
            $("#results").append("<p>URL:  " + url+ "</p>");
        }
        
        if(email != ""){
            $("#results").append("<p>Email:  " + email + "</p>");
        }
        
        if(thedate != ""){
            $("#results").append("<p>Date:  " + thedate + "</p>");
        }

        if(favLang != ""){
            $("#results").append("<p>Favorite Language:  " + favLang + "</p>");
        }
        if(probs != ""){
            $("#results").append("<p>Current Problems:  " + probs + "</p>");
        }
        if(interest != ""){
            $("#results").append("<p>Area of Interest:  " + interest+ "</p>");
        }
        
        
        // Check the optional radio and checkbox inputs and append accordingly if necessary
        if($("#radio4").prop('checked')){
            $("#results").append("<p>Experience level 1:  " + $("#radio4").prop("value") + "</p>"); 
        }
        if($("#radio5").prop('checked')){
            $("#results").append("<p>Experience level 2:  " + $("#radio5").prop("value") + "</p>"); 
        }
        if($("#radio6").prop('checked')){
            $("#results").append("<p>Experience level 3:  " + $("#radio6").prop("value") + "</p>");  
        }
       if($("#radio1").prop('checked')){
            $("#results").append("<p>Age group 1:  " + $("#radio1").prop("value") + "</p>"); 
        }
        if($("#radio2").prop('checked')){
             $("#results").append("<p>Age group 2:  " + $("#radio2").prop("value") + "</p>"); 
        }
        
        if($("#radio3").prop('checked')){
           $("#results").append("<p>Age group 3:  " + $("#radio3").prop("value") + "</p>"); 
        }
        if($("#checkBoxItem").prop('checked')){
            $("#checkBoxItem").append("<p>It looks like you do like competing in Kaggle Competitions.</p>");
        }
        
        
        // Clear all form data after processing
        var elements = document.getElementsByTagName("input");
        for (var ii=0; ii < elements.length; ii++) {
            if(elements["submitInput"] == elements[ii]) continue; // Skip overriding the submit button
             if(elements["resetBtn"] == elements[ii]) continue; 
            elements[ii].value = "";
        }
        var commentBox = document.getElementById("ccomment");
        commentBox.value = "";
        
        
        // Clear radio buttons
        $('input[type=radio]').prop('checked', function () {
            return this.getAttribute('checked') == 'checked';
        });
        
        // Clear checkbox
       $('#checkBoxItem').prop('checked', function () {
            return this.getAttribute('checked') == 'checked';
        });
        
        
        // prevent traditionl submit function to go off
       event.preventDefault();
    });
    
    
    /*
    Function: Reset button, meant to reset the content in the form
    */
    $("#resetBtn").on("click", function(){
        
        // Clear all form data after processing
        var elements = document.getElementsByTagName("input");
        for (var ii=0; ii < elements.length; ii++) {
            if(elements["submitInput"] == elements[ii]) continue; // Skip overriding the subm
            if(elements["resetBtn"] == elements[ii]) continue; 
            elements[ii].value = "";
        }
        var commentBox = document.getElementById("ccomment");
        commentBox.value = "";
        
        // Clear radio buttons
        $('input[type=radio]').prop('checked', function () {
            
            return this.getAttribute('checked') == 'checked';
        });
        // Clear checkbox
        $('#checkBoxItem').prop('checked', function () {
            return this.getAttribute('checked') == 'checked';
        });
    });

});



