
const fs = require('fs');

function readAll(path) {
  const lines = fs.readFileSync(path, 'utf-8').trim().split('\n'); // Добавить EOL

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

function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}

module.exports = readAll;
