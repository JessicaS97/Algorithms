/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (!board || board.length <= 0) return
    for (let i=0; i<board.length; i++) {
        if (board[i][0] === 'O') alterNeigh(board, i, 0)
        if (board[i][board[0].length-1] === 'O') alterNeigh(board, i, board[0].length-1)
    }
    for (let i=0; i<board[0].length; i++) {
        if (board[0][i] === 'O') alterNeigh(board, 0, i)
        if (board[board.length-1][i] === 'O') alterNeigh(board, board.length-1, i)
    }
    for (let i=0; i<board.length; i++) {
        for (let j=0; j<board[0].length; j++) {
            if (board[i][j] !== 1 && board[i][j] === 'O') {
                board[i][j] = 'X'
            }
        }
    }
    for (let i=0; i<board.length; i++) {
        for (let j=0; j<board[0].length; j++) {
            if (board[i][j] === 1) {
                board[i][j] = 'O'
            }
        }
    }
};

const alterNeigh = (board, r, c) => {
    if (!isValid(board, r, c)) return
    if (board[r][c] === 'O') {
        board[r][c] = 1
        alterNeigh(board, r-1, c)
        alterNeigh(board, r+1, c)
        alterNeigh(board, r, c-1)
        alterNeigh(board, r, c+1)
        return
    } 
}

const isValid = (board, r, c) => {
    if (r < 0 || r >= board.length || c < 0 || c >= board[0].length) {
        return false
    }
    return true
}