// // IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// // SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// // DEFINE ANY FUNCTION NEEDED
// // FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
// function retrieveMostFrequentlyUsedWords(literatureText, wordsToExclude) {
//     var string = '';
//     var maxCount = 0;
//     var count = 1;
//     var textArray = literatureText.split(' ').sort().filter(word => !wordsToExclude.includes(word));

//     textArray.forEach((element, index) => {
//         if (index > 0 && index !== textArray.length - 1) {
//             if (element === textArray[index + 1]) {
//                 count++;
//             } else {
//                 count = count > maxCount ? maxCount : count;
//             }
//         }
//     });

//     var wordCount = textArray.reduce((map, word) => {
//         map[word] = ++map[word] || 1;
//         return map;
//     }, {});

//     Object.keys(wordCount).forEach(element => {
//         count = wordCount[element];

//         if (count > maxCount) {
//             maxCount = count;
//             string = element;
//         } else if (count === maxCount){
//             string += ` ${element}`
//         }
//     });
    
//     return string;
// }

// var string = 'hey hey yo yo yo here we are a a a plant hey yo';

// var exclude = ['a', 'are'];

// // const string = 'rose is a flower rose is a pond a flower rose flower in garden garden garden pond pond rose is a rose is a rose is a rose is a';

// // const exclude = ['rose', 'is', 'a'];

// console.log(retrieveMostFrequentlyUsedWords(string, exclude));


// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
function retrieveMostFrequentlyUsedWords(literatureText, wordsToExclude) {
    var strings = [];
    var maxCount = 0;
    var count = 1;
    var textArray = literatureText.split(' ').sort().filter(word => wordsToExclude.indexOf(word) === -1);

    console.log(textArray);

    textArray.forEach((element, index) => {
        if (index > 0 && index !== textArray.length - 1) {
            if (element === textArray[index + 1]) {
                count++;
            } else {
                count = count > maxCount ? maxCount : count;
            }
        }
    });

    for (var i = 0; i < textArray.length; i++) {
        if (i > 0 && i !== textArray.length - 1) {
            if (element === textArray[i + 1]) {
                count++;
            } else {
                count = count > maxCount ? maxCount : count;
            }
        }
    }

    var wordCount = textArray.reduce((map, word) => {
        map[word] = ++map[word] || 1;
        return map;
    }, {});

    Object.keys(wordCount).forEach(element => {
        count = wordCount[element];

        if (count > maxCount || count === maxCount) {
            maxCount = count;
            strings.push(element);
        }
    });
    
    return strings;
}

const string = 'rose is a flower rose is a pond a flower rose flower in garden garden garden pond pond rose is a rose is a rose is a rose is a';

const exclude = ['rose', 'is', 'a'];

console.log(retrieveMostFrequentlyUsedWords(string, exclude));