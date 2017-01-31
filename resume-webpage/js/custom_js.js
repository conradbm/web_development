$(document).ready(function(){
    
});


var edu_btn = true;
var hobbies_btn = true;
var prog_lang_btn = true;

function appendText(btn) {
    
    // If Button is a "+"
    if(btn.id == "education-btn" && (edu_btn == true)){
        edu_btn=false;
        $("#education-btn").css({backgroundColor: "#800000"});
        $('#education-btn').text(function(i, oldText) {
            return oldText === '+' ? '-' : oldText;
        });
        

        var education_item = $("<div class='container'><ul><li><h4>Academic</h4><ul><li>B.S. in Computer Science from <a href='http://cs.iupui.edu' target='_blank'>Purdue University</a>.</li><li>Minor in Mathematics.</li></li></ul></ul><ul><li><h4>Professional</h4><ul><li>Developed new solutions to large scale software projects in an internship with the <a href='http://www.trac.army.mil/' target='_blank'>Department of Defense</a>.</li></li></ul></div>").hide();
        $('#appendHere').append(education_item);
        //new_item.show('fast');
        education_item.slideDown();

        
    // If Button is a "-"
    }else if (btn.id == "education-btn" && !(edu_btn==true)){
        
        edu_btn=true;
        
        $("#education-btn").css({backgroundColor: "#483D8B"});

        
        $('#education-btn').text(function(i, oldText) {
            return oldText === '-' ? '+' : oldText;
        });
        
        
        $('#appendHere').children().slideUp(500, function() {
            $('#appendHere').empty();
        });
        
        
    }
    
    // If Button is a "+"
    else if(btn.id == "hobbies-btn" && (hobbies_btn == true)){
        
        hobbies_btn=false;
        
        $("#hobbies-btn").css({backgroundColor: "#800000"});
        
        $('#hobbies-btn').text(function(i, oldText) {
            return oldText === '+' ? '-' : oldText;
        });
        
        var hobbies_item = $("<div class='container'><ul><li><h4>Computed Science Related</h4><ul><li>Competing in <a href='https://www.kaggle.com/bmconrad' target='_blank'>Kaggle Competitions</a>.</li><li>Contributing to <a href='http://stackoverflow.com/users/4304526/bmc' target='_blank'>Stack Exchange Communities</a>.</li></ul> </li><li><h4>Non-Computer Science Related</h4><ul><li>Learning new ways to utilize my skills to help those around me in a <a href='http://indymeals.com' target='_blank'> meaningful way.</a></li><li>Understanding how I can help those around me <a href='https://www.facebook.com/The-Creative-Change-Project-303593586466151/' target='_blank'>in need.</a></li></ul></li></ul></div>").hide();
        
        $('#appendHere2').append(hobbies_item);
        
        hobbies_item.slideDown();

    // If Button is a "-"
    }else if (btn.id == "hobbies-btn" && !(hobbies_btn==true)){
        
        hobbies_btn=true;
        
        $("#hobbies-btn").css({backgroundColor: "#483D8B"});
        
        $('#hobbies-btn').text(function(i, oldText) {
            return oldText === '-' ? '+' : oldText;
        });
        
        $('#appendHere2').children().slideUp(500, function() {
            $('#appendHere2').empty();
        });
        
    }
    else if (btn.id == "prog-lang-btn" &&  (prog_lang_btn==true)){
        
        prog_lang_btn=false;
        
        $("#prog-lang-btn").css({backgroundColor: "#800000"});
        
        $('#prog-lang-btn').text(function(i, oldText) {
            return oldText === '+' ? '-' : oldText;
        });
        
        var prog_lang_item = $("<div class='container'><ul><li><h4>Object Oriented Programming</h4><ul><li>C</li><li>C++</li><li>Python</li><li>Java</li></ul></li><li><h4>Procedural Scripting Programming</h4><ul><li>Batch (MS-DOS/Windows)</li><li>Bash (Unix/MAC)</li><li>Cshell (Linux)</li></ul></li><li><h4>Internet Programming</h4><ul><li>HTML5</li><li>CSS3</li><li>Javascript</li><li>JQuery</li><li>Bootstrap</li><li>PHP</li><li>AJAX</li></ul><li><h4>Machine Learning &amp; Data Analysis Programming</h4><ul><li>Python (<a href='http://ipython.org/notebook.html' target='_blank'> IPython Notebook</a>, <a href='http://www.numpy.org' target='_blank'> NumPy</a>, <a href='http://pandas.pydata.org' target='_blank'> Pandas</a>, <a href='http://scipy.org/scipylib/index.html' target='_blank'>SciPy</a>, <a href='http://scikit-learn.org/stable/' target='_blank'>Scikit-learn </a>, and <a href='http://matplotlib.org' target='_blank'>Matplotlib</a> libraries) </li><li>R (<a href='https://github.com/topepo/caret' target='_blank'>caret</a>, <a href='https://github.com/yhat/ggplot' target='_blank'>ggplot2</a>, <a href='https://stat.ethz.ch/R-manual/R-patched/library/stats/html/glm.html' target='_blank'>Generalized Logistic Models</a>, <a href='https://cran.r-project.org/web/packages/randomForest/index.html' target='_blank'> Random Forest Models</a>, and <a href='https://cran.r-project.org/web/packages/AppliedPredictiveModeling/index.html' target='_blank'>other predictive modeling packages</a>)</li><li><a ref='http://www.mathworks.com/' target=‘_blank’>MATLAB</a></li></ul></li><li><h4>Mobile Programming</h4><ul><li>Objective-C (iOS/Xcode)</li></ul></li><li><h4>Database Programming</h4><ul><li>SQL Server</li><li>MySQL</li></ul></li><li><h4>Functional Programming</h4><ul><li>Scheme</li></ul></li></ul></ul></ul></div>").hide();
        
        $('#appendHere3').append(prog_lang_item);
        
        prog_lang_item.slideDown();
    }
    else if (btn.id == "prog-lang-btn" && !(prog_lang_btn==true)){
        
        prog_lang_btn=true;
        
        $("#prog-lang-btn").css({backgroundColor: "#483D8B"});
        
        $('#prog-lang-btn').text(function(i, oldText) {
            return oldText === '-' ? '+' : oldText;
        });
        
        $('#appendHere3').children().slideUp(500, function() {
            $('#appendHere3').empty();
        });
    }
};

""
    
    