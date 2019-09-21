/*
Table of Contents
    1. Variables
        - Regular Expressions - match
        - Password Values - the values that will be in the password

    2. Class
*/

/***********************************
            Variables
************************************/
const passwordRegex = {
    bad: /[/d]/,
    weak: /[\w]/,
    medium: /^[\w\d]$/,
    high: /^[]$/,
}

const passwordValues = {
    alphabets: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    numbers: '1234567890',
    speical: '[]{}<>()!@#$%^&*-_+=|.,;`~/',
}

/***********************************
                Class 
************************************/
class Password {
    constructor(generatedPassword, length) {
        this.generatedPassword = generatedPassword;
        this.length = length;
    }

    createPassword(array) {
        for (let key of array) {
            passwordValues[key];

            // passwordValues['alphabets']
            
        }
    }

    strength(password, strength) {

    }

}

/***********************************
            Functions 
************************************/
function selectedInputs(values) {
    /*
        When the user selects any of the passwordValues keys then push them into an array
        default will be lowercase if nothing is picked by the user
    */

    var selectedValues = [/* 'lowerAlphabets' */];

    for (let i = 0; i < selectedValues.length; i++) {
        selectedValues.push(values)
    }


    // return an array that has the selected passwordValue keys ['alphabets', 'numbers']
}

function truncatePassword() {

}
