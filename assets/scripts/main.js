class GeneratedPassword {

    constructor(letters, numbers, symbols, length) {
        this.letters = letters;
        this.numbers = numbers;
        this.symbols = symbols;
        this.length = length;
    }

    createPassword() {

        const passwordChars = `${this.letters}${this.numbers}${this.symbols}`;

        return [...window.crypto.getRandomValues(new Uint32Array(this.length))]
                .map(uniqueNumber => passwordChars[uniqueNumber % passwordChars.length])
                .join('');

    }
}

const password = new GeneratedPassword(
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    '0123456789',
    '"!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~"',
    12
)

class Options extends GeneratedPassword {
    
    constructor() {
        super()
    }
}


class DisplayUi {

    showPassword() {

        generatePasswordBtn = document.querySelector('.password-btn').addEventListener('click', () => {
            document.querySelector('.generated-password').textContent = password.createPassword()
        });

    }

    showPasswordLength() {

    }

    animateToggles() {
        
    }

}

const display = new DisplayUi()

display.showPassword()
