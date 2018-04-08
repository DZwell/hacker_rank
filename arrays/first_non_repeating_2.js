/**
 * Return first instance of non repating letter in a given string
 * @param {String} str 
 */
function firstNonRepeatingLetter (str) {
    let foundNonRepeated;
    const tracker = {};

    for (let i = 0; i < str.length; i++) {
        if (!tracker[str.charAt(i)] || !tracker[str.charAt(i)].toLowerCase()) {
            tracker[str.charAt(i)] = {
                count: 1,
                index: i,
                isUpperCase: str.charAt(i).toLowerCase(),
            };
        } else {
            tracker[str.charAt(i)].count++;
        }
    }

    Object.keys(tracker).forEach((item) => {
        if (tracker[item].count < 2) {
            
            if (!foundNonRepeated) {
                foundNonRepeated = item;
            }
            
            else if (tracker[foundNonRepeated].index > tracker[item].index) {
                foundNonRepeated = item;
            }
        }
    });

    foundNonRepeated = !foundNonRepeated ? '' : foundNonRepeated;

    return foundNonRepeated;
}

console.log(firstNonRepeatingLetter('aqww'));