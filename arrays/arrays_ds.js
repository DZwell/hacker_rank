/**
 * Given int 'n', print elements in 'array' from beginning to 'n' (exclusive) 
 * in reverse order as space separated string
 * @param {Integer} n 
 * @param {Array} array 
 */

function printArray(n, array) {
    const newArr = array.splice(0, n).reverse();
    const stringifiedArray = newArr.join(' ');
    console.log(stringifiedArray);
}

printArray(4, [1, 4, 3, 2, 5, 6, 7, 8]);