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
let submitBtn = document.querySelector("form > div._challengeFormActions_28npv_109 > button._challengeButtons_28npv_115.btn.btn-primary")

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
 * @param {*} newNickName
 * @param {*} newFirstName
 * @param {*} newLastName
 * @param {*} tc test case
 * @param {*} expectedFormat
 */


function fillForm(newNickName, newFirstName, newLastName, tc, expectedFormat){

    // Here will the function fillText fill the form automatically

    fillText(nickNameTxt, newNickName);
    fillText(firstNameTxt, newFirstName);
    fillText(lastNameTxt, newLastName);
 
    // Let's add the click event to the Submit button to be clicked when this function runs

    submitBtn.click();

    // Now, we have to keep in mind what message will be display with the result

    // If the validation message (format) matches the expected format, then the test case will pass
    // In this case, correctResult.innerHTML will display the message as FAILED, that's why it is skipped.

    if(validationMessage == expectedFormat){

        console.log(tc, "Your profile updated. PASSED");

        // If not, then the test case will fail
    } else{

        console.log(tc, "Couldn't udpate your profile. FAILED");
    }

}


/* TEST CASE 1: Valid Data

Enter Nickname: "skyline7", First Name: "Michael", Last Name: "Henderson", and press "Submit". 
Expected Result: "Your profile updated".

*/

validationMessage = "Your profile updated";

fillForm("skyline7", "Michael", "Henderson", "TC-001: Valid format", "Your profile updated");


/* TEST CASE 2: Short values

Enter "k_3", First Name: "J", Last Name: "Z", and press "Submit". 
Expected Result: "User input error". The entered values are shorter than the min length.

*/

validationMessage = "User input error. The entered values are shorter than the min length";

fillForm("k_3", "J", "Z", "TC-002: Short values", "User input error. The entered values are shorter than the min length.");


/* TEST CASE 3: Long values


Enter Nickname: "longnick9_", First Name: "MaximilianaElizabethMontgomery", Last Name: "AlexanderHamiltonJeffersonSmith", and press "Submit". 
Expected Result: "User input error". The entered values exceed the max length.

*/

validationMessage = "User input error. The entered values are shorter than the max length";

fillForm("longnick9_", "MaximilianaElizabethMontgomery", "AlexanderHamiltonJeffersonSmith", "TC-003: Long values", "User input error. The entered values exceed the max length.");


/* TEST CASE 4: Empy form


Leave Nickname, First Name, and Last Name fields empty, and press "Submit". Expected Result: "User input error".

*/

validationMessage = "User input error";

fillForm(" ", " ", " ", "TC-004: Empty form", "User input error");


/* TEST CASE 5: Not allowed characters


Enter Nickname: "123-AA", First Name "X Æ A-12", Last Name "X Æ A-12", and press "Submit". 
Expected Result: "User input error". Nickname, First Name and Last Name contain not allowed characters.

*/

validationMessage = "User input error. Nickname, First Name and Last Name contain not allowed characters.";

fillForm("123-AA", "X Æ A-12", "X Æ A-12", "TC-005: Not allowed characters", "User input error. Nickname, First Name and Last Name contain not allowed characters. ");


/* TEST CASE 6: Not allowed characters in one field

Enter Nickname: "@@@@@", First Name "Christopher", Last Name "c", and press "Submit". 
Expected Result: "User input error". Nickname contains not allowed characters.

*/


validationMessage = "User input error. Nickname contains not allowed characters.";

fillForm("@@@@@", "Christopher", "Williams", "TC-006: Not allowed characters in one field", "User input error. Nickname contains not allowed characters. ");