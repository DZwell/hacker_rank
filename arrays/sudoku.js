/**
 * Return whether given 2D array is valid sudoku
 * @param {Array} grid 
 */
function sudoku2(grid) {
    for (let i = 0; i < grid.length; i++) {
        const filteredRow = grid[i].filter(item => item !== '.');
        const filteredColumn = getColumn(grid, i).filter(item => item !== '.');
        // strip duplicates, if length/size match, valid sedoku
        if (filteredRow.length !== new Set(filteredRow).size || filteredColumn.length !== new Set(filteredColumn).size) {
            return false;
        }
    }
    return true;
}

/**
 * Return column of 2D array
 * @param {Array} array 
 * @param {Int} i 
 */
const getColumn = (array, i) => array.map(item =>
    item[i]
);

const get3x3 = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            
        }
    }
}

const grid =
[['.', '.', '.', '1', '4', '.', '.', '2', '.'],
['.', '.', '6', '.', '.', '.', '.', '.', '.'],
['.', '.', '.', '.', '.', '.', '.', '.', '.'],
['.', '.', '1', '.', '.', '.', '.', '.', '.'],
['.', '6', '7', '.', '.', '.', '.', '.', '9'],
['.', '1', '.', '.', '.', '.', '8', '1', '.'],
['.', '3', '.', '.', '.', '.', '.', '.', '6'],
['.', '.', '.', '.', '.', '7', '.', '.', '.'],
['.', '.', '.', '5', '.', '.', '.', '7', '.']];

console.log(sudoku2(grid));