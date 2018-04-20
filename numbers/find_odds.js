/*
 * Complete the function below.
 */
function oddNumbers(l, r) {
    const odds = [];
    for (let i = l; i <= r; i++) {
        if (i % 2 === 1) {
            odds.push(i);
        }
    }
    return odds;
}

console.log(oddNumbers(3, 9));
