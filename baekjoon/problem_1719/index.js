const input = [];
let N = 0;
let M = 0;
let time = [];
let result = [];

const rl = require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function(line) {
    input.push(line.trim());
  })
  .on('close', function() {
    [N, M] = input
      .shift()
      .split(' ')
      .map(Number);

    for (let i = 0; i < N; i++) {
      let arr = [];
      let arr2 = [];
      for (let j = 0; j < N; j++) {
        arr.push(Infinity);
        arr2.push(0);
      }
      time.push(arr);
      result.push(arr2);
    }

    input.forEach((e) => {
      const arr = e.split(' ').map(Number);
      const i = arr[0] - 1;
      const j = arr[1] - 1;
      const c = arr[2];
      
      time[i][j] = c;
      time[j][i] = c;
      result[i][j] = j + 1;
      result[j][i] = i + 1;
    });

    time = time.map((r, ri) =>
      r.map((c, ci) => {
        if (ri === ci) return 0;
        return c;
      }),
    );
    result = result.map((r, ri) =>
      r.map((c, ci) => {
        if (ri === ci) return '-';
        return c;
      }),
    );

    for (let k = 0; k < N; k++) {
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          if(i === j) continue;
          if (time[i][k] + time[k][j] < time[i][j]) {
            time[i][j] = time[i][k] + time[k][j];
            result[i][j] = result[i][k];
          }
        }
      }
    }

    for (let i = 0; i < N; i++) {
      console.log(result[i].join(' '));
    }
  });
