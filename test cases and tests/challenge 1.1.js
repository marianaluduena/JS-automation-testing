// Challenge 1.1: Number addition


// First field's query
let fistNumTxt = document.querySelector("#first");

// Second field's query
let secondNumbTxt = document.querySelector("#second");

// Message's query
let expectedResultTxt = document.querySelector("#testForm > p:nth-child(2)");

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
    

/* TEST CASE 1: 

Enter "1" and "2" into the input fields, then click on the "Calculate" button. 
Expected Result: "3". 

*/






/* TEST CASE 2: 

Input "-2" and "4" into the input fields where one number is negative, then click on the "Calculate" button. 
Expected Result: "2".

*/

/* TEST CASE 3: 

Enter "1.5" and "2.5" into the input fields; both are decimal fractions, then click on the "Calculate" button. Expected 
Result: "4.0".

*/

/* TEST CASE 4: 

Enter "abc" in the First Number input field and "1" in the Second Number input field, then click on the "Calculate" button. 
Expected Result: "User input error".

*/


/* TEST CASE 5: 

Leave both input fields blank and then click on the "Calculate" button. 
Expected Result: "User input error".

*/


/* TEST CASE 6: 

Input "10000000000" into the first input field, which is too large, and set the second value to "1", then click on the "Calculate" button. 
Expected Result: "Application Error".

*/

