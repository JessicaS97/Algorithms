/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = arr => {
    let res = {}
    let a = 'a'.charCodeAt(0)
    arr.forEach(word => {
        let temp = Array(26).fill(0)
        word.split('').forEach(c => {
            let character = c.charCodeAt(0)
            temp[character - a]++
        })
        temp = temp.join('')
        if (!res[temp]) {
            res[temp] = []
        }
        res[temp].push(word)
    })
    return Object.values(res)
}
