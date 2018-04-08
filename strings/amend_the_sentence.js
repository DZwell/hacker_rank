

function amendTheSentence(string) {
    let startingPlace = 0;
    let startingChar;
    let newString = '';

    for (let i = 1; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase()) {
            const startingChar = string[startingPlace].toLowerCase();
            newString += `${startingChar}${string.slice(startingPlace + 1, i)} `;
            startingPlace = i;
        }
    }
    startingChar = string[startingPlace].toLowerCase();
    newString += `${startingChar}${string.slice(startingPlace + 1, string.length)}`;
    return newString;
}

console.log(amendTheSentence('')); 