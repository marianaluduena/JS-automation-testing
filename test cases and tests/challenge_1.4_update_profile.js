/* Challenge 1.4: Update Profile

Follow the five step-by-step appearing instructions, entering an appropriate value into the "Nickname", "First Name", and "Last Name" fields. This way you conduct a basic check of the form proper functioning.

*/


// Nickname
let nickNameTxt = document.querySelector("#first");

// First name

let firstNameTxt = document.querySelector("#second");


// Last name

let lastNameTxt = document.querySelector("#third");


// Submit Btn query
let submitBtn = document.querySelector("#form > div._challengeFormActions_28npv_109 > button._challengeButtons_28npv_115.btn.btn-primary")


// Validation message that will be displayed once the profile is updated.
let validationMessage;


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


/* TEST CASE 1: Valid Data

Enter Nickname: "skyline7", First Name: "Michael", Last Name: "Henderson", and press "Submit". 
Expected Result: "Your profile updated".

*/