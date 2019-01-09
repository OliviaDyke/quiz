/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
    });

});


    function question1 (q1Result) {
    
        if (q1Result === "A") {
            return 5; 
        } else if (q1Result === "B") {
            return 10; 
        } else if (answer1 === "C") {
            return 2; 
        }
    }

    function question2 () {
        
    if (answer2 === "A") {
        return 10; 
    } else if (answer2 === "B") {
        return 20; 
    } else if (answer2 === "C") {
        return 4; 
    }
    }
    
    function question3 () {
        
    if (answer3 === "A") {
        return 30;
    } else if (answer3 === "B") {
        return 15; 
    } else if (answer3 === "C") {
        return 6; 
    }
    }
    

 function total () {
     if ( cheerios > 5 && cheerios < 15) {
         return "You are Cheerios!"; 
     }
 }