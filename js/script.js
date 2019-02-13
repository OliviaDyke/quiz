/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore = question1(q1Result) + question2(q2Result) + question3(q3Result);
        var ADDNAME = $("#name").val(); 
        var result = $(".result").text( ADDNAME + " ," + " your cereal is " + getAnswer(totalScore));
    });

});
// A totals to 45
// B is 35
// C is 12

    function question1 (q1Result) {
    
        if (q1Result === "A") {
            return 2; 
        } else if (q1Result === "B") {
            return 4; 
        } else if (q1Result === "C") {
            return 1; 
        }
    }

    function question2 (q2Result) {
        
    if (q2Result === "A") {
        return 2; 
    } else if (q2Result === "B") {
        return 4; 
    } else if (q2Result === "C") {
        return 1; 
    }
    }
     
    function question3 (q3Result) {
        
    if (q3Result === "A") {
        return 4;
    } else if (q3Result === "B") {
        return 2; 
    } else if (q3Result === "C") {
        return 1; 
    }
    }
    

 

 function getAnswer (totalScore) {
     
     if (totalScore === 3 || totalScore === 4) {
         return "cheerio"; 
     } else if  (totalScore === 5 || totalScore === 6) {
         return "lucky charms";
     } else {
         return "strawberry joe's os ";
     } 

 }