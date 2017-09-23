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
        

        var education_item = $("<div class='container'><ul><li><h4>Academic</h4><ul><li>B.S from <a href='http://www.purdue.edu/' target='_blank'>Purdue University's</a> School of Computer Science<ul><li>Minor in Mathematics</li></ul></li></li><li>Currently studying at Kansas State University for an <a href='http://www.imse.ksu.edu/grad/msor/index.html' target='_blank'>M.S in Operations Research</a></li></ul></ul><ul><li><h4>Professional</h4><ul><li>Recruited by the <a href='http://www.trac.army.mil/' target='_blank'>Department of Defense</a> as a <a href=\"http://smart.asee.org/\" target=\"_blank\">S.M.A.R.T Scholar</a> </li><li>Awarded the <em>2016 Excellence in Analysis Award</em> for contributions in <em>Network Analysis</em> and <em>Wargaming Simulation</em> feature support, software development, and project analysis</li><li>Accepted a full time Operations Research Analyst position at the <a href='http://www.trac.army.mil/' target='_blank'>TRADOC Analysis Center</a> for the Department of the Army in 2017</li></li></ul></div>").hide();
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
        
        var hobbies_item = $("<div class='container'><ul><li><h4>Computed Science Related</h4><ul><li>Contributing to <a href='http://stackoverflow.com/users/4304526/bmc' target='_blank'>Stack Exchange Communities</a></li><li>Contributing to <a href='https://www.kaggle.com/bmconrad' target='_blank'>Kaggle</a></li><li>Statistical Modeling</li><li>Data Visualization and Communication</li><li>Applied Mathematics in Humanities, Finance, and Medicine</li></ul> </li><li><h4>Community Related</h4><ul><li>Support and analysis efforts to solve patterns and habits involving <a href='https://www.facebook.com/The-Creative-Change-Project-303593586466151/' target='_blank'>homelessness in Indianapolis</a></li><li>Contributed to database support with <a href='https://www.facebook.com/The-Creative-Change-Project-303593586466151/' target='_blank'>The Creative Change Project</a> to detect long term solutions to fighting homelessness in Indianapolis</li></ul></li></ul></div>").hide();
        
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
        
        var prog_lang_item = $("<div class='container'><ul><li><h4>Object Oriented Programming</h4><ul><li>C</li><li>C++</li><li>Python</li><li>Java</li></ul></li><li><h4>Machine Learning, Data Mining, &amp; Data Science Programming</h4><ul><li>Python (<a href='http://ipython.org/notebook.html' target='_blank'> Jupyter Notebook</a>, <a href='http://www.numpy.org' target='_blank'> NumPy</a>, <a href='http://pandas.pydata.org' target='_blank'> Pandas</a>, <a href='http://scipy.org/scipylib/index.html' target='_blank'>SciPy</a>, <a href='http://scikit-learn.org/stable/' target='_blank'>Scikit-learn </a>, <a href='https://www.nltk.org/api/nltk.html' target='_blank'>NLTK </a>, <a https://pypi.python.org/pypi/vaderSentiment' target='_blank'>Vader Sentiment </a>, <a href='http://matplotlib.org' target='_blank'>Matplotlib</a>, <a href='https://seaborn.pydata.org/' target='_blank'>Seaborn</a>)</li><li>R (<a href='https://github.com/topepo/caret' target='_blank'>caret</a>, <a href='https://github.com/yhat/ggplot' target='_blank'>ggplot2</a>, <a href='https://stat.ethz.ch/R-manual/R-patched/library/stats/html/glm.html' target='_blank'>glm</a>, <a href='https://cran.r-project.org/web/packages/randomForest/index.html' target='_blank'>rf, rpart, ect..</a>, and <a href='https://cran.r-project.org/web/packages/AppliedPredictiveModeling/index.html' target='_blank'>other predictive modeling packages</a> )</li><li><a ref='http://www.mathworks.com/' target=‘_blank’>MATLAB</a></li></ul></li><li><h4>Procedural Scripting Programming</h4><ul><li>Batch (MS-DOS/Windows)</li><li>Bash (Unix/MAC)</li><li>C-Shell (Linux)</li><li>VBA<ul><li>Access</li><li>Excel</li></ul></li></ul></li><li><h4>Version Control Programming</h4><ul><li>Git</li><li>CVS</li></ul></li><li><h4>Internet Programming</h4><ul><li>HTML5</li><li>CSS3</li><li>Javascript</li><li>JQuery</li><li>PHP</li><li>AJAX</li><li><a href='https://d3js.org/' target='_blank'>D3.js</a></li><li><a href='http://getbootstrap.com/' target='_blank'>Bootstrap Framework</a></li><li> <a href='http://flask.pocoo.org/' target='_blank'>Flask Framework</a></li></ul><li><h4>Mobile Programming</h4><ul><li>Objective-C (iOS/Xcode)</li></ul></li><li><h4>Database Programming</h4><ul><li>SQL Server</li><li>MySQL</li></ul></li><li><h4>Functional Programming</h4><ul><li>Scheme</li></ul></li></ul></ul></ul></div>").hide();
        
        
        
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