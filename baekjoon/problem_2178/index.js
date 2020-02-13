let input = [];
let rc = [];
let result = [];
const rl = require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function(line) {
    input.push(line.trim());
  })
  .on('close', function() {
    rc = input
      .shift()
      .split(' ')
      .map(Number);
    result = input.map((r) => r.split('').map(Number));
    const visited = input.map((r) => r.split('').fill(false));
    visited[0][0] = true;
    const availablePoints = [[0, 0]];
    console.log(fnc(availablePoints, visited));
  });

const fnc = (availablePoints, visited) => {
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  const [row, column] = rc;
  while (availablePoints.length) {
    const [x, y] = availablePoints.shift();
    for (let i = 0; i < dx.length; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && nx < row && ny >= 0 && ny < column) {
        if (result[nx][ny] !== 0 && visited[nx][ny] === false) {
          availablePoints.push([nx, ny]);
          result[nx][ny] = result[x][y] + 1;
          visited[nx][ny] = true;
        }
      }
    }
  }
  return result[row - 1][column - 1];
};
