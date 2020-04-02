let N = 0;
let r = 1;
let c = 1;
let ans = 0;
const rl = require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function(line) {
    const src = line.split(' ');
    N = src.shift();
    r = src.shift();
    c = src.shift();
  })
  .on('close', function() {
    let y = Math.pow(2, N) / 2;
    let x = y;

    while (N-- > 0) {
      let t = Math.pow(2, N) / 2;
      let f = Math.pow(4, N);

      if (r < y && c < x) { // 1사분면
        x -= t;
        y -= t;
      } else if (r < y && x <= c) { // 2사분면
        x += t;
        y -= t;
        ans += f;
      } else if (y <= r && c < x) { // 3사분면
        x -= t;
        y += t;
        ans += f * 2;
      } else {  // 4사분면
        x += t;
        y += t;
        ans += f * 3;
      }
    }
    console.log(ans);
  });
