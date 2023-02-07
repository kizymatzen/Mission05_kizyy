$(document).ready(function () {
    $("#btnsubm").click(function () {

   
        //Get values from html form & assign to variables
        var assignments = parseFloat($("#assignments").val()) || 0;
        var groupProject = parseFloat($("#groupProject").val()) || 0;
        var quizzes = parseFloat($("#quizzes").val()) || 0;
        var midtermExam = parseFloat($("#midtermExam").val()) || 0;
        var finalExam = parseFloat($("#finalExam").val()) || 0;
        var intex = parseFloat($("#intex").val()) || 0;

        //validate values
        if (assignments < 0 || assignments > 100 ||
            groupProject < 0 || groupProject > 100 ||
            quizzes < 0 || quizzes > 100 ||
            midtermExam < 0 || midtermExam > 100 ||
            finalExam < 0 || finalExam > 100 ||
            intex < 0 || intex > 100) {
            alert("All scores must be between 0 and 100");
            return;
        }

        //Calculate Final Percentage
        var finalPercentage = (assignments * 0.5) + (groupProject * 0.1) + (quizzes * 0.1) + (midtermExam * 0.1) + (finalExam * 0.1) + (intex * 0.1);


        //Final Grade Letter Condition
        var letterGrade;
        if (finalPercentage >= 94) {
            letterGrade = "A";
        } else if (finalPercentage >= 90) {
            letterGrade = "A-";
        } else if (finalPercentage >= 87) {
            letterGrade = "B+";
        } else if (finalPercentage >= 84) {
            letterGrade = "B";
        } else if (finalPercentage >= 80) {
            letterGrade = "B-";
        } else if (finalPercentage >= 77) {
            letterGrade = "C+";
        } else if (finalPercentage >= 74) {
            letterGrade = "C";
        } else if (finalPercentage >= 70) {
            letterGrade = "C-";
        } else if (finalPercentage >= 67) {
            letterGrade = "D+";
        } else if (finalPercentage >= 64) {
            letterGrade = "D";
        } else if (finalPercentage >= 60) {
            letterGrade = "D-";
        } else {
            letterGrade = "E";
        }

        //Display Final Percentage & letter grade
        $('#result').html('Final Percentage: ' + finalPercentage + '<br>Letter Grade: ' + letterGrade);


    });
});