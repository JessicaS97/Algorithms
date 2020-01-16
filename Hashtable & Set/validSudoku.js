/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let seen = new Set()
    for (let r=0; r<9; r++) {
        for (let c=0; c<9; c++) {
            if (board[r][c] !== '.') {
                let b = "(" + board[r][c] + ")"    
                if (seen.has(r + b) || seen.has(b + c) || seen.has(Math.floor(r/3) + b + Math.floor(c/3))) {
                    return false
                }
                seen.add(r + b)
                seen.add(b + c)
                seen.add(Math.floor(r/3) + b + Math.floor(c/3))
            }
        }
    }
    console.log(seen)
    return true
};