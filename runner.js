const { prettyBoard } = require('./prettyBoard.js');
const { solve, isSolved } = require('./isSolve.js');
const readAll = require('./sudoku.js');
const colors = require('colors')

const puzzleNumber = process.argv[2];

if (!puzzleNumber || isNaN(puzzleNumber)) {
  console.log('Укажите номер судоку для решения. Например: node runner.js 1'.cyan);
  process.exit(1);
}

if ((puzzleNumber <= 0) || (puzzleNumber >= 16)) {
  console.log('Укажите номер от 1 до 15 '.yellow);
  process.exit(1);
}

const boards = readAll('./puzzles.txt');
const index = parseInt(puzzleNumber, 10) - 1; 
const selectedBoard = boards[index];



console.log(`\nВыбрано судоку номер ${puzzleNumber}:`.green);
console.log('Исходная головоломка:'.red);
prettyBoard(selectedBoard);

console.log('Решение:'.blue);
if (solve(selectedBoard)) {
  prettyBoard(selectedBoard);
  console.log('Решено?'.red, isSolved(selectedBoard));
} else {
  console.log('Решение не найдено');
}