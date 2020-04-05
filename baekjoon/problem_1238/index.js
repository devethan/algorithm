let input = [];
const rl = require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function(line) {
    input.push(line.trim());
  })
  .on('close', function() {
    let [N, M, X] = input.shift().split(' ').map(Number);

    let time = [];
    for (let i = 0; i <= N; i++) {
      time.push([]);
    }

    while (M-- > 0) {
      const [i, j, c] = input.shift().split(' ').map(Number);
      time[i].push([j, c]);
    }

    function dijkstra(start) {
      let dist = [];
      for (let i = 1; i <= N; i++) {
        dist[i] = Infinity;
      }

      dist[start] = 0;
      let quque = [];
      quque.push([start, 0]);

      while (quque.length) {
        let temp = quque.shift();
        let current = temp[0];
        let distance = temp[1];

        if (dist[current] < distance) continue;

        for (let i = 0; i < time[current].length; i++) {
          let next = time[current][i][0];
          let nextDistance = distance + time[current][i][1];

          if (nextDistance < dist[next]) {
            dist[next] = nextDistance;
            quque.push([next, nextDistance]);
          }
        }
      }

      return dist;
    }

    let result = [];
    for (let i = 1; i <= N; i++) {
      let arr = dijkstra(i);
      result[i] = arr;
    }

    let max = 0;
    for (let i = 1; i <= N; i++) {
      if ( max < result[i][X] + result[X][i] ) {
        max = result[i][X] + result[X][i];
      }
    }

    console.log(max);
  });
