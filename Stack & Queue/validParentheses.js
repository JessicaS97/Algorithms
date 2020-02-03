/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let char = s.split('')
    for (let i=0; i<s.length; i++) {
        if (char[i] === '[' || char[i] === '(' || char[i] === "{") {
            stack.push(char[i])
        } else if (char[i] === ')' && stack[stack.length-1] === '(' && stack.length !== 0){
            stack.pop()
        } else if (char[i] === '}' && stack[stack.length-1] === '{' && stack.length !== 0){
            stack.pop()
        } else if (char[i] === ']' && stack[stack.length-1] === '[' && stack.length !== 0){
            stack.pop()
        } else {
            return false
        }
    }
    return stack.length === 0
};