const max = 20
const numbers = Array.from("123456789");
const upperCaseAlphabets = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
const lowerCaseAlphabets = Array.from("abcdefghijklmnopqrstuvwxyz");

const button = document.querySelector("#password");
const input = document.querySelector("#input");

button.addEventListener("click", passwordGenerator);

function passwordGenerator() {
    let password = [];
    let allCharacters = numbers.concat(upperCaseAlphabets, lowerCaseAlphabets);
    for(let i = 0; i < max; i++) {
        let random = Math.floor(Math.random() * allCharacters.length);
        let characters = allCharacters[random]
        password.push(characters);
    }
    return input.setAttribute("value", `${password.slice(0, max).join("")}`);
}

