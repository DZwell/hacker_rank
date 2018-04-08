/**
 * Return element in array that appears an odd number of times
 * @param {Array} integers 
 */
function findOdd (integers) {
    let foundOdd;
    const tracker = {};

    integers.forEach(element => {
        if (!tracker[element]) {
            tracker[element] = 1;
        } else {
            tracker[element]++;
        }
    });

    Object.keys(tracker).forEach((item) => {
        if (tracker[item] % 2 === 1) {
            foundOdd = item;
        }
    });
    return foundOdd;
}


console.log(findOdd([0, 0, 1]));
