const isValid = require('./isValid.js');

function solve(board) {
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === 0) {
        for (let n = 1; n <= 9; n++) {
          if (isValid(board, r, c, n)) {
            board[r][c] = n;
            if (solve(board)) return true;
            board[r][c] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

function isSolved(board) {
  for (let r = 0; r < 9; r++)
    for (let c = 0; c < 9; c++) if (board[r][c] === 0) return false;

  const ok = (arr) => new Set(arr).size === 9 && !arr.includes(0);

  for (let i = 0; i < 9; i++) {
    const row = board[i];
    const col = board.map((r) => r[i]);
    if (!ok(row) || !ok(col)) return false;
  }

  for (let r = 0; r < 9; r += 3) {
    for (let c = 0; c < 9; c += 3) {
      const box = [];
      for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++) box.push(board[r + i][c + j]);
      if (!ok(box)) return false;
    }
  }

  return true;
}

module.exports = { solve, isSolved };
