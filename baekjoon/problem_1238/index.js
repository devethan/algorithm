let input = [];
let N = 1000;
let M = 10000;
let X = N;
const rl = require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function(line) {
    input.push(line.trim());
  })
  .on('close', function() {
    [N, M, X] = input.shift().split(' ').map(Number);

    let time = [];
    for (let i = 0; i < N; i++) {
      let arr = [];
      for (let j = 0; j < N; j++) {
        arr.push(i === j ? 0 : Infinity);
      }
      time.push(arr);
    }

    while (M-- > 0) {
      const [i, j, c] = input.shift().split(' ').map(Number);
      time[i - 1][j - 1] = c;
    }

    for (let k = 0; k < N; k++) {
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          if (time[i][j] > time[i][k] + time[k][j]) {
            time[i][j] = time[i][k] + time[k][j];
          }
        }
      }
    }

    let result = 0;
    for (let i = 0; i < N; i++) {
      let temp = time[i][X] + time[X][i];
      if (temp > result) result = temp;
    }

    console.log(result);
  });
