const input = [];
let N = 0;
let M = 0;
let cost = [];

const rl = require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function(line) {
    input.push(line.trim());
  })
  .on('close', function() {
    N = Number(input.shift());
    M = Number(input.shift());

    for (let i = 0; i < N; i++) {
      let arr = [];
      for (let j = 0; j < N; j++) {
        arr.push(Infinity);
      }
      cost.push(arr);
    }

    input.forEach((e) => {
      const arr = e.split(' ').map(Number);
      const i = arr[0] - 1;
      const j = arr[1] - 1;
      const c = arr[2];
      if (cost[i][j] > c) cost[i][j] = c;
    });

    cost = cost.map((r, ri) =>
      r.map((c, ci) => {
        if (ri === ci) return 0;
        return c;
      }),
    );

    // cost 세팅 완료

    for (let k = 0; k < N; k++) {
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          if (cost[i][k] + cost[k][j] < cost[i][j]) {
            cost[i][j] = cost[i][k] + cost[k][j];
          }
        }
      }
    }

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (cost[i][j] === Infinity) {
          cost[i][j] = 0;
        }
      }
      console.log(cost[i].join(' '));
    }
  });
