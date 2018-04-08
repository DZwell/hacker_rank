


function findRecurringChar(string) {
    let counter;
    const tracker = {};
    
    if (!string) {
        return -1;
    }
    
    for (let i = 0; i < string.length; i++) {
        if (!tracker[string[i]]) {
            tracker[string[i]] = 1;
        } else {
            tracker[string[i]]++;
        }
    }

    Object.keys(tracker).forEach((letter) => {
        if (!counter) {
            // Make a tuple cotaining the character and frequency seen
            counter = [[letter, tracker[letter]]];
        }
        else if (tracker[letter] > counter[0][1]) {
            counter = [[letter, tracker[letter]]];
        } else if (tracker[letter] === counter[0][1]) {
            counter.push([letter, tracker[letter]]);
        }
    });

    if (counter.length === string.length) {
        return -1;
    } else if(counter.length >= 1) {
        return counter.map(item => item[0]);
    } else {}
}

console.log(findRecurringChar('abababccccccccccz++++++++++++++'));