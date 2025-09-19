const { prettyBoard } = require('./prettyBoard.js');
const { solve, isSolved } = require('./isSolve.js');
const readAll = require('./sudoku.js');
const boards = readAll('./puzzles.txt');

const board = boards[0];

if (solve(board)) {
  prettyBoard(board);
  console.log('Решено?', isSolved(board));
} else {
  console.log('Решение не найдено');
}
