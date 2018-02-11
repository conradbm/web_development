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
        

        var education_item = $("<div class='container'><ul><li><h4>Academic</h4><ul><li><a href='http://www.purdue.edu/' target='_blank'>Purdue University</a> | B.S Computer Science | <em>May 2017</em><ul><li>Minor in Mathematics</li></ul></li></li><li><a href='http://www.imse.ksu.edu/grad/msor/index.html' target='_blank'> Kansas State University</a> | M.S Operations Research | <em>May 2020</em></li></ul></ul><ul><li><h4>Professional</h4><ul><li><a href='http://www.trac.army.mil/' target='_blank'>Department of Defense</a> <a href=\"http://smart.asee.org/\" target=\"_blank\">S.M.A.R.T Scholar</a> | <em>Cohort 2015</em></li><li>Awarded <em>Excellence in Analysis</em> for contributions to <em>Network Analysis</em> and <em>Warfighting Simulation Development</em> | <em>August 2016</em></li><li>Accepted as full time Operations Research Analyst with <a href='http://www.trac.army.mil/' target='_blank'>TRADOC Analysis Center</a> for the Department of the Army</li> | <em>June 2017</em></li><li><em>Outstanding Achievement Award</em> in recognition as database project lead for Airforce led Joint Wideband Satellite Reconassance (WSR) Analysis of Alternatives (AoA) Sattelite Communications Bandwidth (SATCOM) Follow on study  | <em>November 2017</em></li></ul></div>").hide();
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
        
        var hobbies_item = $("<div class='container'><ul><li><h4>Computed Science</h4><ul><li>Contributing to <a href='http://stackoverflow.com/users/4304526/bmc' target='_blank'>Stack Exchange Communities</a></li><li>Contributing to <a href='https://www.kaggle.com/bmconrad' target='_blank'>Kaggle</a></li><li>Answering real questions with data</li><li>Data visualization and communication</li><li>Applying computer science to communities in need</li></ul> </li><li><h4>Community Related</h4><ul><li>Support efforts to discovering patterns leading to <a href='https://www.facebook.com/The-Creative-Change-Project-303593586466151/' target='_blank'>homelessness in Indianapolis</a></li><li>Contributing technology and database support to <a href='https://www.facebook.com/The-Creative-Change-Project-303593586466151/' target='_blank'>The Creative Change Project</a> to detect long term solutions to fighting homelessness in Indianapolis</li></ul></li></ul></div>").hide();
        
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
        
        var prog_lang_item = $("<div class='container'><ul><li><h4>Object Oriented</h4><ul><li>C</li><li>C++</li><li>Python</li><li>Java</li></ul></li><li><h4>Functional</h4><ul><li>Scheme</li></ul></li><li><h4>Machine Learning, Data Mining, &amp; Data Science</h4><ul><li>Python (Packages including: Jupyter/iPython, NumPy, Pandas, SciPy, Sklearn, Natural Language Tools Kit, Vader Sentiment, Tensorflow, SimPy, Matplotlib, and Seaborn)</li><li>R (Packages including: caret, glm, rf, rpart, kmeans, tidyverse, ggplot2, dplyr, and tidyr, and Author of <a href='https://github.com/conradbm/madmR' target='_blank'>madmR</a>)</li></ul></li><li><h4>Mathematical Optimization </h4><ul><li><a href='https://www.lindo.com/'>LINGO</a></li><li><a href='https://support.office.com/en-us/article/define-and-solve-a-problem-by-using-solver-5d1a388f-079d-43ac-a7eb-f63e45925040'>Excel Solver</a></li><li>MATLAB</li></ul></li><li><h4>Scripting</h4><ul><li>Batch (MS-DOS/Windows)</li><li>Bash (Unix/MAC)</li><li>C-Shell (Linux)</li><li>VBA<ul><li>Access</li><li>Excel</li></ul></li></ul></li><li><h4>Version Control</h4><ul><li>Git</li><li>CVS</li></ul></li><li><h4>Web</h4><ul><li>HTML5</li><li>CSS3</li><li>Javascript</li><li>JQuery</li><li>PHP</li><li>AJAX</li><li><a href='https://d3js.org/' target='_blank'>D3.js</a></li><li><a href='http://getbootstrap.com/' target='_blank'>Bootstrap Framework</a></li><li> <a href='http://flask.pocoo.org/' target='_blank'>Flask Framework</a></li></ul><li><h4>Mobile</h4><ul><li>Objective-C (iOS/Xcode)</li></ul></li><li><h4>Database Programming</h4><ul><li>SQL Server</li><li>MySQL</li></ul></li></ul></ul></ul></div>").hide();
        
        
        
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