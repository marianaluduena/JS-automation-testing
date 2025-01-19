/* Challenge 1.3: Password restore

Follow the eleven step-by-step appearing instructions, entering an appropriate value into the "New Password" field. This way you conduct a basic check of the form proper functioning. 
You are practically applying the Scripted Testing approach and checking the Basic Password criteria match.

See the TC after the variables and functions declarations.

*/


// New password query
let newPassTxt = document.querySelector("#first");

// Validation message that will be displayed once the new password is sended.
let validationMessage;

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
 * @param {*} expectedFormat
 */


function fillForm(newPass, tc, expectedFormat){

    // Here will the function fillText used to fill the form automatically

    fillText(newPassTxt, newPass);
 
    // Let's add the click event to the Submit button to be clicked when this function runs

    submitBtn.click();

    // Now, we have to keep in mind what message will be display with the result

    // If the validation message (format) matches the expected format, then the test case will pass
    // In this case, correctResult.innerHTML will display the message as FAILED, that's why it is skipped.

    if(validationMessage == expectedFormat){

        console.log(tc, "PASSED");

        // If not, then the test case will fail
    } else{

        console.log(tc, "FAILED");
    }

}

/*

PASSWORD REQUIREMENTS:

1. Minimal length 5 symbols

2. Maximum length 15 symbols

3. Contains at least one small letter, one capital letter, one symbol, and one number

4. Doesn't match the previous password "Passw0rd!7"

*/


/* TEST CASE 1: 

Enter "P@ssw0rD" as the password, which meets all the requirements, and then click on the "Submit" button. 
Expected result: "Valid Password".

*/

validationMessage = "Valid Password";

fillForm("P@ssw0rD", "TC-001: valid password format", "Valid Password");

/* TEST CASE 2: 

Enter "hElloW0rld" as the password, which does not meet all the requirements, and click the "Submit" button. 
Expected result: "Invalid Password".

*/

validationMessage = "Invalid Password";

fillForm("hElloW0rld", "TC-002: Invalid password format", "Invalid Password");

/* TEST CASE 3: 

Enter the same password as the saved one - "Passw0rd!7" and click the "Submit" button. 
Expected result: "Invalid Password".

*/

validationMessage = "Invalid Password";

fillForm("Passw0rd!7", "TC-003: Invalid password format", "Invalid Password");