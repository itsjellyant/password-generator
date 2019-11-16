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

        this.generatedPassword = hash;

        return hash;
    }

    /*The length shortens the password if the user wants to by using the range input */
    length() {
        const max = document.querySelector('input[type="range"]').value;
        const length = document.querySelector('.passwordLength').textContent = max;

        return max;
    }
}

class Setting extends Password {
    /* Returns an array that can be passed into the createPassword method and those will be the password values*/ 
    getToggles() {
        var enables = [];
        event.target.toggleAttribute('enabled');
        event.target.classList.toggle('enabled');
        event.target.parentNode.classList.toggle('container__enabled');

        // get all enables
        var attrs = document.querySelectorAll('.toggle__circle');

        for (let i = 0; i < attrs.length; i++) {
            
            if (attrs[i].attributes.enabled) {
                enables.push(attrs[i].dataset.hash);
            }
        }

        return enables;
    }

}

const password = new Password();
const setting = new Setting();

/***********************************
            Event Listeners 
************************************/
document.querySelector('input[type="range"]').addEventListener('mousemove', function displayValue() {
    password.length();
});

document.querySelector('.password-btn').addEventListener('click', function displayPassword() {
    password.createPassword(setting.getToggles());
    document.querySelector('.generated-password').textContent = password.createPassword(setting.getToggles());
});

document.querySelectorAll('.toggle__circle').forEach(circle => circle.addEventListener('click', setting.getToggles));
