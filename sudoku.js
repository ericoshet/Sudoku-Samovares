const fs = require('fs');
const {EOL} = require('os');


function readAll(path) {
  const lines = fs.readFileSync(path, 'utf-8').trim().split(EOL);  // Добавить EOL

  return lines.map((line) => {
    const vals = [...line]
      .filter((ch) => /[{0-9}.\-]/.test(ch))
      .map((ch) => (ch === '-' || ch === '.' ? 0 : Number(ch)));

    if (vals.length !== 81) {
      throw new Error('Строка паззла должна содержать 81 символ (цифры и "-" / ".")');
    }

    const board = [];
    for (let r = 0; r < 9; r++) {
      board.push(vals.slice(r * 9, r * 9 + 9));
    }
    return board;
  });
}

module.exports = readAll;
