const { prettyBoard } = require('./prettyBoard.js');
const { solve, isSolved } = require('./isSolve.js');
const readAll = require('./sudoku.js');


const puzzleNumber = process.argv[2];

if (!puzzleNumber || Number.isNaN(puzzleNumber)) {
  console.log('Укажите номер судоку для решения. Например: node runner.js 1');
  process.exit(1);
}

if (puzzleNumber >16) {
  console.log('Укажите номер от 1 до 15 ');
  process.exit(1);
}

const boards = readAll('./puzzles.txt');
const index = parseInt(puzzleNumber, 10) - 1; 
const selectedBoard = boards[index];



console.log(`\nВыбрано судоку номер ${puzzleNumber}:`);
console.log('Исходная головоломка:');
prettyBoard(selectedBoard);

console.log('Решение:');
if (solve(selectedBoard)) {
  prettyBoard(selectedBoard);
  console.log('Решено?', isSolved(selectedBoard));
} else {
  console.log('Решение не найдено');
}