/**
 * Return first instance of duplicate element
 * @param {Array} a 
 */
function firstDuplicate(a) {
    let elementToReturn;
    const tracker = {};

    for (let i = 0; i < a.length; i++){
        if (tracker[a[i]]) {
            elementToReturn = a[i];
            break;
        }
        tracker[a[i]] = true;
    };

    if (elementToReturn) {
        return elementToReturn;
    }
    return -1;

}

console.log(firstDuplicate([2, 3, 3, 1, 5, 2]));
