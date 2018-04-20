



function findFirstSubstringOccurrence(s, x) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] === x[0]) {
            const hasSubstring = x === s.slice(i, x.length + i);

            if (hasSubstring) {
                return i;
            }
        }
    }
    return -1;
}

function findFirstSubstringOccurrence(s, x) {
    const regex = new RegExp(x);

    if (regex.test(s)) {
        return s.indexOf(x);
    }
    return -1;
}

// console.log(findFirstSubstringOccurrence('sst', 'st'));