const colors = require('colors')

function prettyBoard(board) {
  const sep = '------+-------+------'.rainbow;
  for (let i = 0; i < 9; i++) {
    let line = '';
    for (let j = 0; j < 9; j++) {
      line += `${board[i][j] || '.'.blue.bold} `;
      if ((j + 1) % 3 === 0 && j < 8) line += '| '.rainbow;
    }
    console.log(line.trim());
    if ((i + 1) % 3 === 0 && i < 8) console.log(sep);
  }
}


module.exports = { prettyBoard };
