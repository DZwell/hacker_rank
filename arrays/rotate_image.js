function rotateImage(a) {
    // Deep copy original array
    const copy = JSON.parse(JSON.stringify(a));

    
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            a[i][j] = copy[copy.length - (j + 1)][i];
        }
    }

    return a;
}

const array = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]];

console.log(rotateImage(array));