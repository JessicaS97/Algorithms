/**
 * Given a 2D board and a word, find if the word exists in the grid.
 * The word can be constructed from letters of sequentially adjacent cell, 
 * where "adjacent" cells are those horizontally or vertically neighboring. 
 * The same letter cell may not be used more than once.
 * 
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let rows = board.length
    let cols = board[0].length
    for (let i=0; i<board.length; i++) {
        for (let j=0; j<board[0].length; j++) {
            if (board[i][j] === word.charAt(0) && search(i, j, word, board, 0)) {
                return true
            }
        }
    }
    return false
};

const search = (r, c, word, board, count) => {
    if (count === word.length) return true
    if (r < 0 || r >= board.length || c < 0 || c >= board[0].length || 
        word.charAt(count) !== board[r][c]) return false
    let temp = board[r][c]
    board[r][c] = ''
    let found = search(r + 1, c, word, board, count + 1) ||
    search(r - 1, c, word, board, count + 1) ||
    search(r, c + 1, word, board, count + 1) ||
    search(r, c - 1, word, board, count + 1)
    board[r][c] = temp
    return found
}