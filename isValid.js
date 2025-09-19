function isValid(board, row, col, num) {
  for (let i = 0; i < 9; i++) {
    if (i !== col && board[row][i] === num) return false;
    if (i !== row && board[i][col] === num) return false;
  }

  const r0 = Math.floor(row / 3) * 3;
  const c0 = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const rr = r0 + i;
      const cc = c0 + j;
      if ((rr !== row || cc !== col) && board[rr][cc] === num) return false;
    }
  }
  return true;
}

module.exports = isValid;
