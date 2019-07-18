let alphabetsAndNumbers = Array.from("abcdefghijklmnopqrstuvwxyz123456789");
let max = 10

function passwordGenerator() {
    let password = []
    for (let i = 0; i < max; i++) {
        let random = Math.floor(Math.random() * alphabetsAndNumbers.length);
        let passwords = alphabetsAndNumbers[random].slice(0, 10);
        password.push(passwords);
    }
    return password.join("");
}

function compare(myPassword, callback) {
    let myArray = [];
    while (!(passwordGenerator().includes(myPassword))) {
        myArray.push(callback())

        // if (myArray.length > 10000000) break;
    }
    return myArray;
}

console.log(compare("advfdses21", passwordGenerator));
