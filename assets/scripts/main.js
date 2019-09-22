/*
Table of Contents
    1. Variables
        - Regular Expressions - match
        - Password Values - the values that will be in the password

    2. Classes
*/


/***********************************
            Variables
************************************/

/***********************************
                Classes 
************************************/
class Password {
    constructor() {
        this.generatedPassword = null;
    }

    createPassword(array) {
        const passwordValues = {
                letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
                numbers: '1234567890',
                symbols: '[]{}<>()!@#$%^&*-_+=|.,;`~/',
            } 
        let hash = '';
        let charCombine = '';

        for (let key of array) {
            charCombine += passwordValues[key];    
        }

        for (let i = 0; i < this.length(); i++) {
            hash += charCombine[Math.floor(Math.random() * charCombine.length)];
        }
    
        return this.generatedPassword = hash;
    }

    strength() {
        const passwordRegex = {
                bad: /[/d]/,
                weak: /[\w]/,
                medium: /^[\w\d]$/,
                high: /^[]$/,
            }
        
    }

    length() {
        const max = document.querySelector('input[type="range"]').value 
        const length = document.querySelector('.passwordLength').textContent = max
        return max;
    }
}

var password = new Password();

/***********************************
            Functions 
************************************/
function selectedInputs() {
    /*
        if user checks numbers then
        push into an empty arr

        if user clicks on numbers again
        filter element from arr
        
    
    
    */

    
    // return an array that has the selected passwordValue keys ['alphabets', 'numbers']
}


/***********************************
            Event Listeners 
************************************/
document.querySelector('input[type="range"]').addEventListener('click', function displayValue() {
    password.length();
});

document.querySelector('.password-btn').addEventListener('click', function displayPassword() {
    document.querySelector('.generated-password').textContent = password.createPassword(['numbers', 'letters', 'symbols']);
});