/* Challenge 1.3: Password restore

Follow the eleven step-by-step appearing instructions, entering an appropriate value into the "New Password" field. This way you conduct a basic check of the form proper functioning. 
You are practically applying the Scripted Testing approach and checking the Basic Password criteria match.

See the TC after the variables and functions declarations.

*/


// New password query
let newPassTxt = document.querySelector("#first");

// 
let result;

// Submit Btn query
let submitBtn = document.querySelector("form > div._challengeFormActions_1a4cy_109 > button._challengeButtons_1a4cy_115.btn.btn-primary");


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
    
    /** Function that converts the txt values (variables's queries) to data and fill the form automatically
 * 
 * @param {*} newPass
 * @param {*} tc test case
 * @param {*} expectedResult 
 */


function fillForm(newPass, tc, expectedResult){

    // Here will the function fillText used to fill the form automatically

    fillText(newPassTxt, newPass);
 
    // Let's add the click event to the Submit button to be clicked when this function runs

    submitBtn.click();

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

Enter "P@ssw0rD" as the password, which meets all the requirements, and then click on the "Submit" button. 
Expected result: "Valid Password".

*/