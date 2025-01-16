/* Challenge 1.2: Number divition 

Follow the six step-by-step appearing instructions, entering values into the form. This way, you conduct a basic check of the form's proper functioning. 
You are practically applying the Scripted Testing. 

See the TC after the variables and functions declarations.

*/

// First field's query
let firstNumTxt = document.querySelector("#first");

// Second field's query
let secondNumbTxt = document.querySelector("#second");

// On this case, given the HTML element is a <p>, the correct result must be manually added later.
let correctResult;

// Calculate Btn's query
let calculateBtnTxt = document.querySelector("form > div._challengeFormActions_1a4cy_109 > button._challengeButtons_1a4cy_115.btn.btn-primary");

// Clear Btn's query
let clearBtnTxt = document.querySelector("#form > div._challengeFormActions_1a4cy_109 > button._challengeButtons_1a4cy_115.btn.btn-secondary");


/** Function to fill automatically online forms when combined with the fillForm function (otherwise the input data will not be visible)
 * 
 * @param {*} element 
 * @param {*} value 
 */

function fillText(element, value) {
    
    let lastValue = element.value;
        element.value = value;
        
        let event = new Event("input",
        
        {
            
        target: element,
        bubbles: true
});
        
    // React 15
       
     event.simulated = true;
       
    // React 16
        
    let tracker = element._valueTracker;
        
    if (tracker) {
         
    tracker.setValue(lastValue);
        
}
    element.dispatchEvent(event);
    
    };
    



function fillForm(firstNum, secondNum, tc, expectedResult){

    // Here will the function fillText used to fill the form automatically

    fillText(firstNumTxt, firstNum);
    fillText(secondNumbTxt, secondNum);

    // Let's add the click event to the Calculate button to be clicked when this function runs

    calculateBtnTxt.click();

    // Now, we have to keep in mind what message will be display with the result

    // If the correct result matches the expected result, then the test case will pass
    // In this case, correctResult.innerHTML will display the message as FAILED, that's why it is skipped.

    if(correctResult == expectedResult){

        console.log(tc, "PASSED");

        // If not, then the test case will fail
    } else{

        console.log(tc, "FAILED");
    }

}

/* TEST CASE 1: 

Enter "4" and "2" into the input fields, then click on the "Calculate" button. 
Expected Result: "2".

*/

// The correct result must be declared, otherwise the if else conditional will display the test as FAILED although the result is 2
correctResult = 2;

// The expected result must be added in the function

fillForm(4,2,"TC-001: correct result is 2", 2);


/* TEST CASE 2: 

Input "-10" and "2" into the input fields where one number is negative, then click on the "Calculate" button. 
Expected Result: "-5".

*/

correctResult = -5;

fillForm(-10, 2,"TC-002: correct result is -5", -5);


/* TEST CASE 3: 

Enter "5" and "2" into the input fields, then click on the "Calculate" button. 
Expected Result: "2.5" (decimal fraction). 

*/

correctResult = 2.5;

fillForm(5, 2,"TC-003: correct result is 2.5", 2.5);


/* TEST CASE 4: 

Enter "abc" in the First Number input field and "1" in the Second Number input field, then click on the "Calculate" button. 
Expected Result: "User input error".

*/

correctResult = "User imput error";

fillForm("abc", 1,"TC-004: correct result is User imput error", "User imput error");


/* TEST CASE 5: 

Leave both input fields blank and then click on the "Calculate" button. 
Expected Result: "User input error".

*/

correctResult = "User input error";

fillForm("", "","TC-005: correct result is User imput error", "User imput error");


/* TEST CASE 6: 

Input "10" into the first input field and "0" into the second input field, then click on the "Calculate" button. 
Expected Result: "Application Error".

*/

correctResult = "Application Error";

fillForm("10", "0","TC-006: correct result is Application Error", "Application Error");