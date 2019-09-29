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
var circles = document.querySelectorAll('.toggle__circle');


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

    }

    getToggles() {
        
    }

}

function toggleCircle() {
    var enables = [];
    this.toggleAttribute('enabled');
    this.classList.toggle('enabled');
    this.parentNode.classList.toggle('container__enabled');
    
    // get all enables
    var attrs = document.querySelectorAll('.toggle__circle');

    for (let i = 0; i < attrs.length; i++) {
        
        if (attrs[i].attributes.enabled) {
            enables.push(attrs[i].dataset.hash);
        }
    }

    return console.log(enables);
}


var password = new Password();
var setting = new Setting();

/***********************************
            Event Listeners 
************************************/
document.querySelector('input[type="range"]').addEventListener('click', function displayValue() {
    password.length();
});

document.querySelector('.password-btn').addEventListener('click', function displayPassword() {
    password.createPassword();
    document.querySelector('.generated-password').textContent = password.hash;
});

circles.forEach(circles => circles.addEventListener('click', toggleCircle))