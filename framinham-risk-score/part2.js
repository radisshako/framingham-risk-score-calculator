//The points variable
var points = 0;
//The form of the website
var form = document.getElementById("main_form");
console.log(form);
//gender, age, tenyear risk, and message variables at global scope
var genderGlobal = "";
var ageGlobal = 0;
var tenYearRisk;
var message = document.createElement('p');

//Calculate the points from age and gender
function pageOne(){
    //The submit button assigned
    var submitB = document.getElementById('submit1');
    console.log('Page one method called');
    //selecting all inputs of input type
    var allInputs = document.querySelectorAll('input');
    console.log(allInputs);
    //selecting all inputs of select type
    var listItems = document.querySelectorAll('select');
    console.log(listItems);
    //calculating for women
    //finding selected gender
    var gender = document.querySelector('input[name="genderInput"]:checked');
    console.log(gender);
    console.log(gender.value);
    //Do calculations for women
    if(gender.value == 'female'){
        console.log('gender entered was female');
        //set global gender to female
        genderGlobal = gender.value;
        //find age and assign to age variable
        var age = allInputs[0].value;
        //set the global age variable to the same value
        ageGlobal = allInputs[0].value;
        console.log(age);
        //Calculate the points 
        if(age >= 20 && age <= 34){
            points -= 7;
        }
        else if(age >= 35 && age <= 39){
            points -= 3;
        }
        else if(age >= 40 && age <= 44){
            //adds no points
        }
        else if(age >= 45 && age <= 49){
            points += 3;
        }
        else if(age >=50 && age <= 54){
            points += 6;
        }
        else if(age >= 55 && age <= 59){
            points += 8;

        }
        else if(age >= 60 && age <= 64){
            points += 10;
        }
        else if(age >= 65 && age <= 69){
            points += 12;
        }
        else if(age >= 70 && age <= 74){
            points += 14;
        }
        else if(age >= 75 && age <= 79){
            points += 16;
        }
        //display new points to console
        console.log("Points with gender and age " + points);











    }






    //male calculations
    if(gender.value == 'male'){
        console.log('gender entered was male');
        //set global gender to male
        genderGlobal = gender.value;
        //find age and assign to age variable
        var age = allInputs[0].value;
        //set the global age variable to the same value
        ageGlobal = allInputs[0].value;
        console.log(age);
        //Calculate the points 
        if(age >= 20 && age <= 34){
            points -= 9;
        }
        else if(age >= 35 && age <= 39){
            points -= 4;
        }
        else if(age >= 40 && age <= 44){
            //adds not points
        }
        else if(age >= 45 && age <= 49){
            points += 3;
        }
        else if(age >=50 && age <= 54){
            points += 6;
        }
        else if(age >= 55 && age <= 59){
            points += 8;

        }
        else if(age >= 60 && age <= 64){
            points += 10;
        }
        else if(age >= 65 && age <= 69){
            points += 11;
        }
        else if(age >= 70 && age <= 74){
            points += 12;
        }
        else if(age >= 75 && age <= 79){
            points += 13;
        }
        //display new points to console
        console.log("Points after age and gender " + points);






        






              
        


        
        
        

    }
    
    //finding children nodes of the page1 
    var firstPage = document.querySelector('#page1').children;
    console.log("This is the current page div " + firstPage); 
    //hidding all of page 1
    for(var j = 0; j < firstPage.length; j ++){
        firstPage[j].style.display = "none";
    } 



    //adding contents of page 2
    //creating new div for page 2
    var pageTwoDiv = document.createElement('div');
    //page 2 heading
    var pageTwoHeading = document.createElement("h2");
    //adding text to the new heading
    pageTwoHeading.innerText = "Please enter your cholesterol values";
    pageTwoDiv.append(pageTwoHeading);
    pageTwoDiv.setAttribute('class', 'page');
    pageTwoDiv.setAttribute('id', 'page2');


    //adding total cholesterol form content
    //label for total cholesterol
    var labeltChol = document.createElement('label');
    labeltChol.textContent = "Total cholesterol mg/dL";
    labeltChol.setAttribute('for', 'totalChol');
    labeltChol.setAttribute('id', 'labeltChol');
    pageTwoDiv.appendChild(labeltChol);
    //adding tChol drop down list
    var tCholList = document.createElement('select');
    tCholList.setAttribute('name', 'totalChol');
    tCholList.setAttribute('id', 'totalChol');
    tCholList.setAttribute('required', 'true');
    console.log(tCholList);
    //adding drop down items
    //option 1
    var optiontChol1 = document.createElement('option');
    optiontChol1.setAttribute('value', 'under160');
    optiontChol1.textContent = "Under 160";
    tCholList.appendChild(optiontChol1);
    //option2
    var optiontChol2 = document.createElement('option');
    optiontChol2.setAttribute('value', '160-199');
    optiontChol2.textContent = "160 - 199";
    tCholList.appendChild(optiontChol2);
    //option3
    var optiontChol3 = document.createElement('option');
    optiontChol3.setAttribute('value', '200-239');
    optiontChol3.textContent = "200 - 239";
    tCholList.appendChild(optiontChol3);
    //option 4
    var optiontChol4 = document.createElement('option');
    optiontChol4.setAttribute('value', '240-279');
    optiontChol4.textContent = "240 - 279";
    tCholList.appendChild(optiontChol4);
    //option 5
    var optiontChol5 = document.createElement('option');
    optiontChol5.setAttribute('value', '280orHigher');
    optiontChol5.textContent = "280 or Higher";
    tCholList.appendChild(optiontChol5);
    pageTwoDiv.appendChild(tCholList);









    //Adding hdl cholesterol
    //adding total cholestorol form content
    //label for total cholestorol
    var labelhdlChol = document.createElement('label');
    labelhdlChol.textContent = "HDL cholesterol mg/dL";
    labelhdlChol.setAttribute('for', 'hdlChol');
    labelhdlChol.setAttribute('id', 'labelhdlChol');
    console.log(labelhdlChol);
    pageTwoDiv.appendChild(labelhdlChol);
    //adding hdlChol drop down list
    var hdlCholList = document.createElement('select');
    hdlCholList.setAttribute('name', 'hdlChol');
    hdlCholList.setAttribute('id', 'hdlChol');
    hdlCholList.setAttribute('required', 'true');
    console.log(hdlCholList);
    //adding drop down items
    //option 1
    var optionhdlChol1 = document.createElement('option');
    optionhdlChol1.setAttribute('value', '60orHigher');
    optionhdlChol1.textContent = "60 or Higher";
    hdlCholList.appendChild(optionhdlChol1);
    //option 2
    var optionhdlChol2 = document.createElement('option');
    optionhdlChol2.setAttribute('value', '50-59');
    optionhdlChol2.textContent = "50 - 59";
    hdlCholList.appendChild(optionhdlChol2);
    //option 3
    var optionhdlChol3 = document.createElement('option');
    optionhdlChol3.setAttribute('value', '40-49');
    optionhdlChol3.textContent = "40 - 49";
    hdlCholList.appendChild(optionhdlChol3);
    //option 4
    var optionhdlChol4 = document.createElement('option');
    optionhdlChol4.setAttribute('value', 'under40');
    optionhdlChol4.textContent = "Under 40";
    hdlCholList.appendChild(optionhdlChol4);
    






    //Adding hdlChol items to the page two div
    pageTwoDiv.appendChild(hdlCholList);

    //add restart button to page 2
    var restartPage2 = document.createElement('button');
    restartPage2.setAttribute('id', 'restart2');
    restartPage2.setAttribute('onclick', 'restart()');
    restartPage2.setAttribute('class', 'restart');
    restartPage2.innerText = 'Restart';
    restartPage2.setAttribute('method', 'get');
    console.log("Page 2 submit button values " + restartPage2);
    pageTwoDiv.appendChild(restartPage2);
    






    //adding submission button to page 2
    var submitPage2 = document.createElement('input');
    submitPage2.setAttribute('id', 'submit2');
    submitPage2.setAttribute('onclick', 'pageTwo(); return false');
    submitPage2.setAttribute('type', 'submit');
    submitPage2.setAttribute('value', 'Submit');
    submitPage2.setAttribute('method', 'get');
    console.log("Page 2 submit button values " + submitPage2);
    pageTwoDiv.appendChild(submitPage2);



    

    //adding the page 2 dic to the form
    form.appendChild(pageTwoDiv);
    console.log(pageTwoDiv);
    console.log("Global gender was" + genderGlobal);
    console.log("Global age was :" + ageGlobal);



    //event listener
    var event1 = document.getElementById('submit1');
    event1.addEventListener("submit", pageOne, false);
}






























//Page 2 submit button function for total and hdl cholesterol
function pageTwo(){
    //women points calculation
    if(genderGlobal == 'female'){
        console.log("page2 gender is female");
        //Calculates the Total cholestorol points value
        //Get the cholesterol value input
        var totalChol = document.getElementById('totalChol');
        var tCholValue = totalChol.value;
        //dsiplay the input cholestorol to the console
        console.log(tCholValue);
        //alter the point value accordingly
        //check under 160 range
        if(tCholValue == "under160")
        {
                //Calculate the points 
            if(ageGlobal >= 20 && ageGlobal <= 39){
                //add nothing
            }
            else if(ageGlobal >= 40 && ageGlobal <= 49){
                //add nothing
            }
            else if(ageGlobal >= 50 && ageGlobal <= 59){
                //adds not points
            }
            else if(ageGlobal >= 60 && ageGlobal <= 69){
                //add nothing
            }
            else if(ageGlobal >=70 && ageGlobal <= 79){
                //add nothing
            }
        }
        //check 160-199 range
        if(tCholValue == "160-199")
        {
                //Calculate the points 
            if(ageGlobal >= 20 && ageGlobal <= 39){
                //add 4
                points += 4;
            }
            else if(ageGlobal >= 40 && ageGlobal <= 49){
                //add 3
                points += 3;
            }
            else if(ageGlobal >= 50 && ageGlobal <= 59){
                //adds 2
                points += 2;
            }
            else if(ageGlobal >= 60 && ageGlobal <= 69){
                //add 1
                points += 1;
            }
            else if(ageGlobal >=70 && ageGlobal <= 79){
                //add 1
                points += 1;
            }
        }
        //check 200-239 range
        if(tCholValue == "200-239")
        {
                //Calculate the points 
            if(ageGlobal >= 20 && ageGlobal <= 39){
                //add 8
                points += 8;
            }
            else if(ageGlobal >= 40 && ageGlobal <= 49){
                //add 6
                points += 6;
            }
            else if(ageGlobal >= 50 && ageGlobal <= 59){
                //adds 4
                points += 4;
            }
            else if(ageGlobal >= 60 && ageGlobal <= 69){
                //add 2
                points += 2;
            }
            else if(ageGlobal >=70 && ageGlobal <= 79){
                //add 1
                points += 1;
            }
        }
        //check 240-279 range
        if(tCholValue == "240-279")
        {
                //Calculate the points 
            if(ageGlobal >= 20 && ageGlobal <= 39){
                //add 11
                points += 11;
            }
            else if(ageGlobal >= 40 && ageGlobal <= 49){
                //add 8
                points += 8;
            }
            else if(ageGlobal >= 50 && ageGlobal <= 59){
                //adds 5
                points += 5;
            }
            else if(ageGlobal >= 60 && ageGlobal <= 69){
                //add 3
                points += 3;
            }
            else if(ageGlobal >=70 && ageGlobal <= 79){
                //add 2
                points += 2;
            }
        }
        //check 280orHigher range
        if(tCholValue == "280orHigher")
        {
                //Calculate the points 
            if(ageGlobal >= 20 && ageGlobal <= 39){
                //add 13
                points += 13;
            }
            else if(ageGlobal >= 40 && ageGlobal <= 49){
                //add 10
                points += 10;
            }
            else if(ageGlobal >= 50 && ageGlobal <= 59){
                //adds 7
                points += 7;
            }
            else if(ageGlobal >= 60 && ageGlobal <= 69){
                //add 4
                points += 4;
            }
            else if(ageGlobal >=70 && ageGlobal <= 79){
                //add 2
                points += 2;
            }
        }
        //display the new points
        console.log("points with tchol " + points);







        //Finding the hdl cholestorol value and adjusting points accordingly
        //Calculates the Total cholestorol points value
        //Get the hdlcholesterol value input
        var hdlChol = document.getElementById('hdlChol');
        var hdlCholValue = hdlChol.value;
        //dsiplay the input hdlcholestorol to the console
        console.log(hdlCholValue);
        if(hdlCholValue == "60orHigher"){
            //minus 1 point
            points -= 1;
        }
        else if(hdlCholValue == "50-59"){
            //add no points
        }
        else if(hdlCholValue == "40-49"){
            //add 1 point
            points += 1;
        }
        else if(hdlCholValue == "under40"){
            //add 2 points
            points += 2;
        }
        console.log("points after hdl chol " + points);
        
    }











    //male claculations
    if(genderGlobal == 'male'){
        //write gender to console
        console.log("page 2 gender is male");
         //Calculates the Total cholestorol points value
        //Get the cholesterol value input
        var totalChol = document.getElementById('totalChol');
        var tCholValue = totalChol.value;
        //dsiplay the input cholestorol to the console
        console.log(tCholValue);
        //alter the point value accordingly
        //check under 160 range
        if(tCholValue == "under160")
        {
                //Calculate the points 
            if(ageGlobal >= 20 && ageGlobal <= 39){
                //add nothing
            }
            else if(ageGlobal >= 40 && ageGlobal <= 49){
                //add nothing
            }
            else if(ageGlobal >= 50 && ageGlobal <= 59){
                //adds not points
            }
            else if(ageGlobal >= 60 && ageGlobal <= 69){
                //add nothing
            }
            else if(ageGlobal >=70 && ageGlobal <= 79){
                //add nothing
            }
        }
        //check 160-199 range
        if(tCholValue == "160-199")
        {
                //Calculate the points 
            if(ageGlobal >= 20 && ageGlobal <= 39){
                //add 4
                points += 4;
            }
            else if(ageGlobal >= 40 && ageGlobal <= 49){
                //add 3
                points += 3;
            }
            else if(ageGlobal >= 50 && ageGlobal <= 59){
                //adds 2
                points += 2;
            }
            else if(ageGlobal >= 60 && ageGlobal <= 69){
                //add 1
                points += 1;
            }
            else if(ageGlobal >=70 && ageGlobal <= 79){
                //add nothing
            }
        }
        //check 200-239 range
        if(tCholValue == "200-239")
        {
                //Calculate the points 
            if(ageGlobal >= 20 && ageGlobal <= 39){
                //add 7
                points += 7;
            }
            else if(ageGlobal >= 40 && ageGlobal <= 49){
                //add 5
                points += 5;
            }
            else if(ageGlobal >= 50 && ageGlobal <= 59){
                //adds 3
                points += 3;
            }
            else if(ageGlobal >= 60 && ageGlobal <= 69){
                //add 1
                points += 1;
            }
            else if(ageGlobal >=70 && ageGlobal <= 79){
                //add nothing
            }
        }
        //check 240-279 range
        if(tCholValue == "240-279")
        {
                //Calculate the points 
            if(ageGlobal >= 20 && ageGlobal <= 39){
                //add 9
                points += 9;
            }
            else if(ageGlobal >= 40 && ageGlobal <= 49){
                //add 6
                points += 6;
            }
            else if(ageGlobal >= 50 && ageGlobal <= 59){
                //adds 4
                points += 4;
            }
            else if(ageGlobal >= 60 && ageGlobal <= 69){
                //add 2
                points += 2;
            }
            else if(ageGlobal >=70 && ageGlobal <= 79){
                //add 1
                points += 1;
            }
        }
        //check 280orHigher range
        if(tCholValue == "280orHigher")
        {
                //Calculate the points 
            if(ageGlobal >= 20 && ageGlobal <= 39){
                //add 11
                points += 11;
            }
            else if(ageGlobal >= 40 && ageGlobal <= 49){
                //add 8
                points += 8;
            }
            else if(ageGlobal >= 50 && ageGlobal <= 59){
                //adds 5
                points += 5;
            }
            else if(ageGlobal >= 60 && ageGlobal <= 69){
                //add 3
                points += 3;
            }
            else if(ageGlobal >=70 && ageGlobal <= 79){
                //add 1
                points += 1;
            }
        }
        //display the new points
        console.log("Points after tchol " + points)

    











    





        //Finding the hdl cholestorol value and adjusting points accordingly
        //Calculates the Total cholestorol points value
        //Get the hdlcholesterol value input
        var hdlChol = document.getElementById('hdlChol');
        var hdlCholValue = hdlChol.value;
        //dsiplay the input hdlcholestorol to the console
        console.log(hdlCholValue);
        if(hdlCholValue == "60orHigher"){
            //minus 1 point
            points -= 1;
        }
        else if(hdlCholValue == "50-59"){
            //add no points
        }
        else if(hdlCholValue == "40-49"){
            //add 1 point
            points += 1;
        }
        else if(hdlCholValue == "under40"){
            //add 2 points
            points += 2;
        }
        console.log("points after hdl chol " + points);
    }
















    //Clearing elements from page 2
    //finding children nodes of page class
    var secondPage = document.querySelector('#page2').children;
    console.log("This is the current page div " + secondPage); 
    //hidding all of page 1
    for(var j = 0; j < secondPage.length; j ++){
        secondPage[j].style.display = "none";
    } 




    //inserting elements from page 3
    var pageThreeDiv = document.createElement('div');
    pageThreeDiv.setAttribute('class', 'page');
    pageThreeDiv.setAttribute('id', 'page3');
    var pageThreeHeading = document.createElement('h2');
    pageThreeHeading.textContent = "Smoking Status";
    pageThreeDiv.appendChild(pageThreeHeading);

    //radio elements for smoker button
    var smokerLabel = document.createElement('label');
    smokerLabel.setAttribute('for', 'smoker');
    smokerLabel.setAttribute('id', 'smokerLabel');
    smokerLabel.textContent = 'Smoker';
    var smokerRadio = document.createElement('input');
    smokerRadio.setAttribute('type', 'radio');
    smokerRadio.setAttribute('id', 'smoker');
    smokerRadio.setAttribute('value', 'smoker');
    smokerRadio.setAttribute('name', 'smokingStatus');
    smokerRadio.setAttribute('required', 'true');
    pageThreeDiv.appendChild(smokerLabel);
    pageThreeDiv.appendChild(smokerRadio);

    //radio elemnts for non-smoker button
    var nonsmokerLabel = document.createElement('label');
    nonsmokerLabel.setAttribute('for', 'smoker');
    nonsmokerLabel.textContent = 'Non-Smoker';
    nonsmokerLabel.setAttribute('id', 'nonSmokerLabel');
    var nonsmokerRadio = document.createElement('input');
    nonsmokerRadio.setAttribute('type', 'radio');
    nonsmokerRadio.setAttribute('id', 'nonSmoker');
    nonsmokerRadio.setAttribute('value', 'nonSmoker');
    nonsmokerRadio.setAttribute('name', 'smokingStatus');
    nonsmokerRadio.setAttribute('required', 'true');
    pageThreeDiv.appendChild(nonsmokerLabel);
    pageThreeDiv.appendChild(nonsmokerRadio);

    //testing in console
    console.log(smokerRadio);




    //add restart button to page 3
    var restartPage3 = document.createElement('button');
    restartPage3.setAttribute('id', 'restart3');
    restartPage3.setAttribute('onclick', 'restart()');
    restartPage3.setAttribute('class', 'restart');
    //restartPage2.setAttribute('type', 'submit');
    //restartPage2.setAttribute('value', 'Submit');
    restartPage3.innerText = 'Restart';
    restartPage3.setAttribute('method', 'get');
    console.log("Page 3 submit button values " + restartPage3);
    pageThreeDiv.appendChild(restartPage3);
    

    //adding submission button to page 3
    var submitPage3 = document.createElement('input');
    submitPage3.setAttribute('id', 'submit3');
    submitPage3.setAttribute('onclick', 'pageThree(); return false');
    submitPage3.setAttribute('type', 'submit');
    submitPage3.setAttribute('value', 'Submit');
    submitPage3.setAttribute('method', 'get');
    console.log("Page 2 submit button values " + submitPage3);
    pageThreeDiv.appendChild(submitPage3);
    console.log(submitPage3);
    






    //adding div to the page
    form.appendChild(pageThreeDiv);
    





    //event listener
    var event1 = document.getElementById('submit2');
    event1.addEventListener("submit", pageTwo, false);
    

}








//Page three function for smokers or non smokers
function pageThree(){
    //calculate the points accounting for smoking status
    //The submit button assigned
    var submitB3 = document.getElementById('submit2');
    console.log('Page three method called');
    //finding selected smoking status
    var smokerOrNot = document.querySelector('input[name="smokingStatus"]:checked');
    console.log(smokerOrNot);
    console.log(smokerOrNot.value);



    //assigning points to women
    if(smokerOrNot.value == 'smoker'){
        //checking gender
        console.log(genderGlobal);
        if(genderGlobal == 'female'){
            //check to see the age and adjust accordingly
            //Calculate the points 
            if(ageGlobal >= 20 && ageGlobal <= 39){
                //add 9
                points += 9;
            }
            else if(ageGlobal >= 40 && ageGlobal <= 49){
                //add 7
                points += 7;
            }
            else if(ageGlobal >= 50 && ageGlobal <= 59){
                //adds 4
                points += 4;
            }
            else if(ageGlobal >= 60 && ageGlobal <= 69){
                //add 2
                points += 2;
            }
            else if(ageGlobal >=70 && ageGlobal <= 79){
                //add 1
                points += 1;
            }
        

        }
        else if(genderGlobal == 'male'){
            //check to see the age and adjust accordingly
            //Calculate the points 
            if(ageGlobal >= 20 && ageGlobal <= 39){
                //add 8
                points += 8;
            }
            else if(ageGlobal >= 40 && ageGlobal <= 49){
                //add 5
                points += 5;
            }
            else if(ageGlobal >= 50 && ageGlobal <= 59){
                //adds 3
                points += 3;
            }
            else if(ageGlobal >= 60 && ageGlobal <= 69){
                //add 1
                points += 1;
            }
            else if(ageGlobal >=70 && ageGlobal <= 79){
                //add 1
                points += 1;
            }
        }
    }
     //testing smokingStatus points
     console.log("points after " + smokerOrNot.value+ " "  + points);









    //Clearing elements from page 2
    //finding children nodes of page class
    var thirdPage = document.querySelector('#page3').children;
    console.log("This is the current page div " + thirdPage); 
    //hidding all of page 1
    for(var j = 0; j < thirdPage.length; j ++){
        thirdPage[j].style.display = "none";
    } 




    //Adding elements for page 4
    //creating new div for page 4
    var pageFourDiv = document.createElement('div');
    //page 4 heading
    var pageFourHeading = document.createElement("h2");
    //adding text to the new heading
    pageFourHeading.innerText = "Blood Pressure";
    pageFourDiv.append(pageFourHeading);
    pageFourDiv.setAttribute('class', 'page');
    pageFourDiv.setAttribute('id', 'page4');



    //radio elements for untreated button
    var untreatedLabel = document.createElement('label');
    untreatedLabel.setAttribute('for', 'untreated');
    untreatedLabel.setAttribute('id', 'untreatedLabel');
    untreatedLabel.textContent = 'Untreated';
    var untreatedRadio = document.createElement('input');
    untreatedRadio.setAttribute('type', 'radio');
    untreatedRadio.setAttribute('id', 'untreated');
    untreatedRadio.setAttribute('value', 'untreated');
    untreatedRadio.setAttribute('name', 'treatmentStatus');
    untreatedRadio.setAttribute('required', 'true');
    pageFourDiv.appendChild(untreatedLabel);
    pageFourDiv.appendChild(untreatedRadio);

    //radio elemnts for treated button
    var treatedLabel = document.createElement('label');
    treatedLabel.setAttribute('for', 'treated');
    treatedLabel.setAttribute('id', 'treatedLabel');
    treatedLabel.textContent = 'Treated';
    var treatedRadio = document.createElement('input');
    treatedRadio.setAttribute('type', 'radio');
    treatedRadio.setAttribute('id', 'treated');
    treatedRadio.setAttribute('value', 'treated');
    treatedRadio.setAttribute('name', 'treatmentStatus');
    treatedRadio.setAttribute('required', 'true');
    pageFourDiv.appendChild(treatedLabel);
    pageFourDiv.appendChild(treatedRadio);


    



    //adding systolic blood pressure input
    //label for systolic blood pressure
    var labelBP = document.createElement('label');
    labelBP.textContent = "Systolic blood pressure, mm Hg";
    labelBP.setAttribute('for', 'systolicInput');
    labelBP.setAttribute('id', 'labelBP');
    pageFourDiv.appendChild(labelBP);
    //adding blood pressure drop down list
    var bpList = document.createElement('select');
    bpList.setAttribute('name', 'systolicInput');
    bpList.setAttribute('id', 'systolicInput');
    bpList.setAttribute('required', 'true');
    console.log(bpList);
    //adding drop down items
    //option 1
    var optionbp1 = document.createElement('option');
    optionbp1.setAttribute('value', 'under120');
    optionbp1.textContent = "Under 120";
    bpList.appendChild(optionbp1);
    //option2
    var optionbp2 = document.createElement('option');
    optionbp2.setAttribute('value', '120-129');
    optionbp2.textContent = "120 - 129";
    bpList.appendChild(optionbp2);
    
    //option3
    var optionbp3 = document.createElement('option');
    optionbp3.setAttribute('value', '130-139');
    optionbp3.textContent = "130 -139";
    bpList.appendChild(optionbp3);
    
    //option 4
    var optionbp4 = document.createElement('option');
    optionbp4.setAttribute('value', '140-159');
    optionbp4.textContent = "140 - 159";
    bpList.appendChild(optionbp4);
    
    //option 5
    var optionbp5 = document.createElement('option');
    optionbp5.setAttribute('value', '160orHigher');
    optionbp5.textContent = "160 or Higher";
    bpList.appendChild(optionbp5);
    
    //adding bpList to pageFourDiv
    pageFourDiv.appendChild(bpList);
    //testing in console
    console.log(treatedRadio);


    //add restart button to page 4
    var restartPage4 = document.createElement('button');
    restartPage4.setAttribute('id', 'restart4');
    restartPage4.setAttribute('onclick', 'restart()');
    restartPage4.setAttribute('class', 'restart');
    //restartPage2.setAttribute('type', 'submit');
    //restartPage2.setAttribute('value', 'Submit');
    restartPage4.innerText = 'Restart';
    restartPage4.setAttribute('method', 'get');
    console.log("Page 4 submit button values " + restartPage4);
    pageFourDiv.appendChild(restartPage4);


    //adding submission button to page 4
    var submitPage4 = document.createElement('input');
    submitPage4.setAttribute('id', 'submit4');
    submitPage4.setAttribute('onclick', 'pageFour(); return false');
    submitPage4.setAttribute('type', 'submit');
    submitPage4.setAttribute('value', 'Submit');
    submitPage4.setAttribute('method', 'get');
    console.log("Page 2 submit button values " + submitPage4);
    pageFourDiv.appendChild(submitPage4);
    console.log(submitPage4);


    //adding page four div to the form
    form.appendChild(pageFourDiv);


















    var event1 = document.getElementById('submit3');
    event1.addEventListener("submit", pageThree, false);

}












//Page four blood pressure function
function pageFour(){
    //check points for women
    if(genderGlobal == 'female'){
        //Calculate points after accounting for systolic blood pressure
        //get whether it is treated or untreated
        var treatmentStatus = document.querySelector('input[name="treatmentStatus"]:checked');
        var treatmentValue = treatmentStatus.value;
        console.log("The treament status is " + treatmentStatus.value);
        //find the blood pressure then check the range and adjust accordingly
        var bloodPressure = document.getElementById('systolicInput');
        var bpValue = bloodPressure.value;
        console.log("The blood pressure was: " + bpValue);

        //calculate the points to be changed if untreated
        if(treatmentValue == "untreated"){
            //check the bp
            if(bpValue == "under120"){
                //add nothing
            }
            else if(bpValue == "120-129"){
                //add 1
                points += 1;
            }
            else if(bpValue == "130-139"){
                //add 2
                points += 2;
            }
            else if(bpValue == "140-159"){
                //add 3
                points += 3;
            }
            else if(bpValue == "160orHigher"){
                //add 4
                points += 4;
            }
        }

        //calculate the points to be changed if treated
        if(treatmentValue == "treated"){
            //check the bp
            if(bpValue == "under120"){
                //add nothing
            }
            else if(bpValue == "120-129"){
                //add 3
                points += 3;
            }
            else if(bpValue == "130-139"){
                //add 4
                points += 4;
            }
            else if(bpValue == "140-159"){
                //add 5
                points += 5;
            }
            else if(bpValue == "160orHigher"){
                //add 6
                points += 6;
            }
        }
        //testing blood pressure in console
        console.log("Points with BP is: " + points);
    }
    if(genderGlobal == 'male'){
        //calculate points for men
          //Calculate points after accounting for systolic blood pressure
        //get whether it is treated or untreated
        var treatmentStatus = document.querySelector('input[name="treatmentStatus"]:checked');
        var treatmentValue = treatmentStatus.value;
        console.log("The treament status is " + treatmentStatus.value);
        //find the blood pressure then check the range and adjust accordingly
        var bloodPressure = document.getElementById('systolicInput');
        var bpValue = bloodPressure.value;
        console.log("The blood pressure was: " + bpValue);

        //calculate the points to be changed if untreated
        if(treatmentValue == "untreated"){
            //check the bp
            if(bpValue == "under120"){
                //add nothing
            }
            else if(bpValue == "120-129"){
                //add nothing
            }
            else if(bpValue == "130-139"){
                //add 1
                points += 1;
            }
            else if(bpValue == "140-159"){
                //add 1
                points += 1;
            }
            else if(bpValue == "160orHigher"){
                //add 2
                points += 2;
            }
        }

        //calculate the points to be changed if treated
        if(treatmentValue == "treated"){
            //check the bp
            if(bpValue == "under120"){
                //add nothing
            }
            else if(bpValue == "120-129"){
                //add 1
                points += 1;
            }
            else if(bpValue == "130-139"){
                //add 2
                points += 2;
            }
            else if(bpValue == "140-159"){
                //add 2
                points += 2;
            }
            else if(bpValue == "160orHigher"){
                //add 3
                points += 3;
            }
        }
        //testing blood pressure in console
        console.log("Points with BP is: " + points);


    }





    //clear all elements in page four
    //finding children nodes of page class
    var fourthPage = document.querySelector('#page4').children;
    console.log("This is the current page div " + fourthPage); 
    //hidding all of page 1
    for(var j = 0; j < fourthPage.length; j ++){
        fourthPage[j].style.display = "none";
    } 






    

    //Calculating then changing the ten year risk for men
    if(genderGlobal == 'male'){
        //calculating the ten year risk results for men
        if(points <= 0){
            tenYearRisk = "1";
        }
        else if(points >= 1 && points <= 4){
            tenYearRisk = 1;
        }
        else if(points >= 5 && points <= 6){
            tenYearRisk = 2;
        }
        else if(points == 7){
            tenYearRisk = 3;
        }
        else if(points == 8){
            tenYearRisk = 4;
        }
        else if(points == 9){
            tenYearRisk = 5;
        }
        else if(points == 10){
            tenYearRisk = 6;
        }
        else if(points == 11){
            tenYearRisk = 8;
        }
        else if(points == 12){
            tenYearRisk = 10;
        }
        else if(points == 13){
            tenYearRisk = 12;
        }
        else if(points == 14){
            tenYearRisk = 14;
        }
        else if(points == 15){
            tenYearRisk = 20;
        }
        else if(points == 16){
            tenYearRisk = 25;
        }
        else if(points >= 17){
            tenYearRisk = "30";
        }
    }



    
    

    //Calculating the ten year risk for women
    if(genderGlobal == 'female'){
        //calculating the ten year risk results for men
        if(points < 9){
            tenYearRisk = "1";
        }
        else if(points >= 9 && points <= 12){
            tenYearRisk = 1;
        }
        else if(points >= 13 && points <= 14){
            tenYearRisk = 2;
        }
        else if(points == 15){
            tenYearRisk = 3;
        }
        else if(points == 16){
            tenYearRisk = 4;
        }
        else if(points == 17){
            tenYearRisk = 5;
        }
        else if(points == 18){
            tenYearRisk = 6;
        }
        else if(points == 19){
            tenYearRisk = 8;
        }
        else if(points == 20){
            tenYearRisk = 11;
        }
        else if(points == 21){
            tenYearRisk = 14;
        }
        else if(points == 22){
            tenYearRisk = 17;
        }
        else if(points == 23){
            tenYearRisk = 22;
        }
        else if(points == 24){
            tenYearRisk = 27;
        }
        else if(points >= 25){
            tenYearRisk = "30";
        }
    }
    


    //testing ten year risk score in console
    console.log("The final points were " + points + " so tenYearRisk is: " + tenYearRisk );



    

    //creating new div for display page
    var pageFiveDiv = document.createElement('div');
    //setting id for page 5
    pageFiveDiv.setAttribute('id', 'page5');
    //page 2 heading
    var pageFiveHeading = document.createElement("h2");
    pageFiveHeading.innerText = "Your Ten Year Risk of Cardiovascular Disease";
    pageFiveDiv.appendChild(pageFiveHeading);


    //add restart button to page 4
    var restartPage5 = document.createElement('button');
    restartPage5.setAttribute('id', 'restart5');
    restartPage5.setAttribute('onclick', 'restart()');
    restartPage5.setAttribute('class', 'restart');
    //restartPage2.setAttribute('type', 'submit');
    //restartPage2.setAttribute('value', 'Submit');
    restartPage5.innerText = 'Restart';
    restartPage5.setAttribute('method', 'get');
    console.log("Page 3 submit button values " + restartPage5);

    
    //adding a canvas for the results page
    var pieCanvas = document.createElement('canvas');
    pieCanvas.setAttribute('id', 'can');
    //checking canvas attributes
    console.log(pieCanvas);
    //setting the canvas width and height
    pieCanvas.setAttribute('width', '400');
    pieCanvas.setAttribute('height', '400');
    //var context = pieCanvas.getContext("2d");
    var context = pieCanvas.getContext("2d");
    var angle = 0;
    var percentages;
    //if the ten year risk is a number use it to calculate the percentages
    if(typeof(tenYearRisk) == 'number'){
        //write to console the type
        console.log("Ten year risk was a number");
        percentages = [tenYearRisk, (100 - tenYearRisk)];
        //dislay without < or >
        var chartText = ['Disease ' + tenYearRisk + "%", 'No Disease ' + (100 - tenYearRisk) + "%"];
        message.innerText = "Your risk is " + tenYearRisk + "%";
    }
    //if the ten year risk is a string use a greater or less than size
    else if(typeof(tenYearRisk == 'string')){
        //Write the type to console
        console.log(typeof(tenYearRisk));
        percentages = [Number(tenYearRisk), (100 - Number(tenYearRisk))]
         // if tenyear risk is string type display with < >
        if(tenYearRisk === "1"){
            var chartText = ['Disease <' + Number(tenYearRisk) + "%", 'No Disease >' + (100 - Number(tenYearRisk)) + "%"];
            message.innerText = "Congrats your risk is < 1%";
        }
        else if(tenYearRisk === "30"){
            var chartText = ['Disease >' + Number(tenYearRisk) + "%", 'No Disease <' + (100 - Number(tenYearRisk)) + "%"];
            message.innerText = "Your risk is > 30%";
        }
        

    }
    //Drawing a pie chart on canvas
    //variables for colours
    var sum = 0;
    var pieColours = ['#990011FF','#4831D4'];
    //calculating total
    for(var h = 0; h < percentages.length; h++)
    {
        sum += percentages[h];
    }
    //size to reduce chart by
    var sizeReduce = 20;
    //new width and height variables
    var newWidth = (pieCanvas.width - sizeReduce) / 2
    var newHeight = (pieCanvas.height - sizeReduce) / 2
    //drawing the pie chart
    for (var i = 0; i < percentages.length; i++) {
        context.strokeStyle ='gray';
        context.lineWidth = 0.5;
        context.fillStyle = pieColours[i];
        context.beginPath();
        context.moveTo(newWidth, newHeight);
        var radius = newHeight - sizeReduce / 2;
        var length =  (percentages[i] / sum) * 2 * Math.PI;
        context.arc(newWidth , newHeight, radius, angle, angle + length, false);
        context.lineTo(newWidth, newHeight);
        context.fill();
        context.stroke();
        context.fillStyle ='black';
        context.font = "25px Courier";
        context.textAlign = "center";
        context.textBaseline = "middle";
        var center = angle + length / 1.5
        context.fillText(chartText[i], newWidth + Math.cos(center) * (radius/2) , newHeight + Math.sin(center) * (radius/2));
        angle += Math.PI * 2 * (percentages[i] / sum);
    }

    
    


    //adding the canvas to the page
    pageFiveDiv.appendChild(pieCanvas);
    //checking page five contents
    console.log(pageFiveDiv);
    console.log(typeof('h'));

    //adding the risk score message to the final page
    
    pageFiveDiv.appendChild(message);

    pageFiveDiv.appendChild(restartPage5);



    //adding the div to the form
    form.appendChild(pageFiveDiv);


    //event listener
    var event1 = document.getElementById('submit4');
    event1.addEventListener("submit", pageFour, false);

}








//Restart form function
function restart(){
    required = 'false';
    var pagesList = document.getElementsByClassName('page');
    console.log(pagesList);
    //clear all inputs
    ageGlobal = 0;
    genderGlobal = 0;
    points = 0;
    //setting the required element to false for inputs
    var inputItems = document.querySelectorAll('input');
    //checking items
    console.log("All input items are" + inputItems);
    //remove the required attribute when restarting form
    for(var i = 0; i < inputItems.length; i++){
        if(inputItems[i].getAttribute('type') == 'radio'){
            console.log(inputItems[i].id + " reset a radiobutton to not required");
            inputItems[i].removeAttribute('required');

        }

    }
    
}

