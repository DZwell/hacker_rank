/**
 * Return first non repeating character in a string
 * @param {String} s 
 */
function firstNotRepeatingCharacter(s) {
    let firstNotRepeating;
    const tracker = {};

    for (let i = 0; i < s.length; i++) {
        if (!tracker[s[i]]) {
            tracker[s[i]] = { index: i, count: 1 };
        } else {
            tracker[s[i]].count++;
        }
    }

    Object.keys(tracker).forEach((key) => {
        if (tracker[key].count < 2) {
            if (!firstNotRepeating) {
                firstNotRepeating = key;
            } 

            else if (tracker[firstNotRepeating].index > tracker[key].index) {
                firstNotRepeating = key;
            }
        }
    });

    firstNotRepeating = !firstNotRepeating ? '_' : firstNotRepeating

    return firstNotRepeating;
}

console.log(firstNotRepeatingCharacter('aeaava'));
