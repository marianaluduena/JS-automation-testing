/* Challenge 1.3: Password restore


PASSWORD REQUIREMENTS:

1. Minimal length 5 symbols

2. Maximum length 15 symbols

3. Contains at least one small letter, one capital letter, one symbol, and one number

4. Doesn't match the previous password "Passw0rd!7"


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

    // Here will the function fillText fill the form automatically

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


/* TEST CASE 1: Valid password format

Enter "P@ssw0rD" as the password, which meets all the requirements, and then click on the "Submit" button. 
Expected result: "Valid Password".

*/

validationMessage = "Valid Password";

fillForm("P@ssw0rD", "TC-001: valid password format", "Valid Password");


/* Improvement suggestion

- Showing the user a success messagge or icon to let them know their password was successfully retored
will improve the user's experience.
*/



/* TEST CASE 2: Missing special character password

Enter "hElloW0rld" as the password, which does not meet all the requirements, and click the "Submit" button. 
Expected result: "Invalid Password".

*/

validationMessage = "Invalid Password";

fillForm("hElloW0rld", "TC-002: Missing special character password", "Invalid Password");


/* Improvement suggestion

- Showing the user an error messagge or icon to let them know their password is missing a special character to
match valid password format.
*/



/* TEST CASE 3: Password already restored

Enter the same password as the saved one - "Passw0rd!7" and click the "Submit" button. 
Expected result: "Invalid Password".

*/

validationMessage = "Invalid Password";

fillForm("Passw0rd!7", "TC-003: Password already restored", "Invalid Password");


/* Improvement suggestion

- Showing the user an error messagge or icon to let them know their password was already saved before, matching
the previous password.
*/



/* TEST CASE 4: Empty password field

Leave the "New Password" field empty and click "Submit" button. 
Expected result: "Invalid Password".

*/

validationMessage = "Invalid Password";

fillForm("", "TC-004: Empty password field", "Invalid Password");


/* Improvement suggestion

- Showing the user an error messagge or icon to let them know they must input a new password.
*/



/* TEST CASE 5: 4 characters long password

Enter "Mo7%" as the password, which is less than 5 characters long, and click the "Submit" button.
Expected result: "Invalid Password".

*/

validationMessage = "Invalid Password";

fillForm("Mo7%", "TC-005: 4 characters long password", "Invalid Password");


/* Improvement suggestion

- Showing the user an error messagge or icon to let them know their password must be at least 5 characters long.
*/


/* TEST CASE 6: Characters exceeded password

Enter "asdfghjklpoiuytrewq" as the password, which exceeds 15 characters, and then click the "Submit" button. 
Expected result: "Invalid Password".

*/

validationMessage = "Invalid Password";

fillForm("asdfghjklpoiuytrewq", "TC-006: Characters exceeded password", "Invalid Password");



/* Improvement suggestion

- Show the user an error messagge could be usefull, letting them know the password entered is too long.

- The message could show the user how many characters are allowed.

*/



/* TEST CASE 7: Only uppercase letters password

Enter "ONLYCAPITAL" as the password, which contains only uppercase letters, and then click on the "Submit" button. 
xpected result: "Invalid Password".

*/


validationMessage = "Invalid Password";

fillForm("ONLYCAPITAL", "TC-007: Only uppercase letters password", "Invalid Password");

/* Improvement suggestion

- Showing the user an error messagge saying that the password is missing at least one number, one small letter and  
one special character.

*/


/* TEST CASE 8: Only lowercase letters password

Enter "onlylower" as the password, which contains only lowercase letters, and then click on the "Submit" button. 
Expected result: "Invalid Password".

*/


validationMessage = "Invalid Password";

fillForm("onlylower", "TC-008: Only lowercase letters password", "Invalid Password");

/* Improvement suggestion

- Showing the user an error messagge saying that the password is missing at least one number, one capital letter and  
one symbol.

*/

/* TEST CASE 9: Only numbers password

Enter "001122" as the password containing only digits and click the "Submit" button. 
Expected result: "Invalid Password".

*/


validationMessage = "Invalid Password";

fillForm("001122", "TC-009: Only numbers password", "Invalid Password");

/* Improvement suggestion


*/


/* TEST CASE 10: Only symbols password

Enter "@@@@@" as the password, which contains only special characters, and click the "Submit" button. 
Expected result: "Invalid Password".

*/


validationMessage = "Invalid Password";

fillForm("@@@@@", "TC-010: Only special characters password", "Invalid Password");

/* Improvement suggestion



*/

/* TEST CASE 11: Not allowed symbols password

Enter "Κωδικός" as the password, which contains the not-allowed symbol, and then click on the "Submit" button. 
Expected result: "Invalid Password".

*/


validationMessage = "Invalid Password";

fillForm("@@@@@", "TC-011: Only not allowed password", "Invalid Password");

/* Improvement suggestion



*/