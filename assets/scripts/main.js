const length = 20
const numbers = Array.from("123456789");
const upperCaseAlphabets = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
const lowerCaseAlphabets = Array.from("abcdefghijklmnopqrstuvwxyz");
const symbols = Array.from("")

const button = document.querySelector("#password");
const input = document.querySelector("#password-input");

button.addEventListener("click", passwordGenerator);

function passwordGenerator() {
    let password = [];
    let allCharacters = numbers.concat(upperCaseAlphabets, lowerCaseAlphabets);
    let uniquePassword = function(array) {
        let random = Math.floor(Math.random() * allCharacters.length);
        let characters = allCharacters[random];
        if (array.length > length) {
            return;
        } else {
            password.push(characters);
            uniquePassword(password);
        }
    }
    uniquePassword(password);
    return input.setAttribute("value", `${password.slice(0, length).join("")}`);
}




