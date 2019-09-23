/*
Table of Contents
    1. Variables
        - Toggles


    2. Classes
        - Password

    3. Event Listeners
        - Range Input
        - Generate Password Button
*/


/***********************************
            Variables
************************************/
var toggle = document.querySelectorAll('input[type="checkbox"]');


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
    
        return hash;
    }

    get hash() {
        return this.createPassword(['numbers', 'letters', 'symbols']);
    }

    set hash(hash) {
        this.generatedPassword = hash;
        return hash;
    }

    static strength() {
        const passwordRegex = {
                bad: /[/d]/,
                weak: /[\w]/,
                medium: /^[\w\d]$/,
                high: /^[]$/,
            }
        
    }

    length() {
        const max = document.querySelector('input[type="range"]').value;
        const length = document.querySelector('.passwordLength').textContent = max;

        return max;
    }
}

class Setting extends Password {
    constructor() {
        this.activeToggle = [
            /*numbers */
            /*symbols */
            /*...*/
        ];
    }

    get toggle() {
        /*
        if user checks numbers then
        push into an empty arr

        if user clicks on numbers again
        filter element from arr    
    */

    
    }

    set toggle() {

    }
}

var password = new Password();
var setting = new Setting();
var setToggle = setting.toggle();

/***********************************
            Event Listeners 
************************************/
document.querySelector('input[type="range"]').addEventListener('click', function displayValue() {
    password.length();
});

document.querySelector('.password-btn').addEventListener('click', function displayPassword() {
    password.createPassword(['numbers', 'letters', 'symbols'] /*setToggle */);
    document.querySelector('.generated-password').textContent = password.hash
});