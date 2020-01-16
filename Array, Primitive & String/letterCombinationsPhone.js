/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return []
    else if (digits.length === 1) return map(digits[0])
    
    prev = map(digits[0])
    for (let i=1; i< digits.length; i++) {
        next = []
        currDigits = map(digits[i])
        for (let j=0; j<prev.length; j++) {
            for (let k= 0; k < currDigits.length; k++) {
                next.push(prev[j] + currDigits[k])
            }
        }
        prev = next;
    }
    return prev
};

function map(d) {
    return {
        2: ['a','b','c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n','o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }[d]
}

