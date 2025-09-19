const readAll = require('./sudoku.js');
const { solve, isSolved } = require('./isSolve');

function prettyBoard(board) {
  const sep = '------+-------+------';
  for (let i = 0; i < 9; i++) {
    let line = '';
    for (let j = 0; j < 9; j++) {
      line += `${board[i][j] || '.'} `;
      if ((j + 1) % 3 === 0 && j < 8) line += '| ';
    }
    console.log(line.trim());
    if ((i + 1) % 3 === 0 && i < 8) console.log(sep);
  }
}

const boards = readAll('./puzzles.txt');
boards.forEach((board, i) => {
  console.log(`\nСудоку номер ${i + 1}:`);
  prettyBoard(board);
  console.log('Решение:');
  if (solve(board)) {
    prettyBoard(board);
    console.log('Решено?', isSolved(board));
  } else {
    console.log('Решение не найдено');
  }
});

module.exports = { prettyBoard };
