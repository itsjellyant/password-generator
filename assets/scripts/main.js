/*
Table of Contents
    1. Variables
        - Regular Expressions - match
        - Password Values - the values that will be in the password

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
    capitalAlphabets: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    LowerAlphabets: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '1234567890',
    speical: '[]{}<>()!@#$%^&*-_+=|.,;`~/',
}

/***********************************
        Password Generator 
************************************/
class Password {
    constructor() {
        this.generatedPassword = [];
    }

    createPassword(values) {
        
    }

    getStrength(password, strength) {

    }

}


