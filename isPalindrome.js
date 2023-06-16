let str = "madam"

// function isPalindrome(str) {
//     console.log('String is', str)
//     let reversedStr = str.split('').reverse().join('');
//     console.log('reversedStr is', reversedStr);
//     if (str !== reversedStr){
//         return false;
//     } else {
//         return true;
//     }
// }
function isPalindrome(str) {
    console.log('String is', str)
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];

    }
    console.log('reversedStr is', reversedStr);
    if (str !== reversedStr) {
        return false;
    }   else {
        return console.log('String is a palindrome');
    }
}

console.log(isPalindrome(str));