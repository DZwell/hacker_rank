


function containsDuplicates(a) {
    let found = false;
    const tracker = {};

    a.forEach(currentItem => {
        if (tracker[currentItem]) {
            found = true;
        }
        tracker[currentItem] = true;
    });
    return found;
}

console.log(containsDuplicates([1, 2, 3, 1]));


