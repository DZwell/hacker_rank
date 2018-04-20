function sumOfTwo(a, b, v) {
    const sorted1 = a.sort();
    const sorted2 = b.sort();


}

function binarySearch(array, n) {
    let looking = true;
    let midpoint = array.length / 2;

    while (looking) {
        if (array[midpoint] === n) {
            return array.indexOf(n);
        } else if (array[midpoint] > n) {
            midpoint = midpoint / 2;
        } else if (array[midpoint] < n) {
            midpoint = midpoint + (midpoint / 2);
        }
    }

    
    
}


[1, 5, 9, 13, 26]
