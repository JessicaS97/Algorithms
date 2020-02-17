/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    let left = 0
    let right = S.length-1
    let result = S.split('')
    while (left < right) {
        if (!isLetter(S.charAt(left))) {
            left++
        } else if (!isLetter(S.charAt(right))) {
            right--
        } else {
            let temp = S.charAt(left)
            result[left] = S.charAt(right)
            result[right] = temp
            left++
            right--
        }
    }
    return result.join('')
};
    
const isLetter = c=> {
    return /[a-zA-Z]/.test(c)
}