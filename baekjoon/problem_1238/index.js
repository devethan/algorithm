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
    for (let i = 0; i <= N; i++) {
      time.push([]);
    }

    while (M-- > 0) {
      const [i, j, c] = input.shift().split(' ').map(Number);
      time[i].push([j, c]);
    }

    var temp = [];
    var result = [];
    for (var i = 1; i <= N; i++) {
      var arr = dijkstra(i, time);
      temp[i] = arr;
    }

    for (var i = 1; i <= N; i++) {
      if (i !== X) {
        result.push(temp[i][X] + temp[X][i]);
      }
    }

    var max = result.reduce(function(pre, cur) {
      return pre > cur ? pre : cur;
    });

    console.log(max);
  });

function dijkstra(start, map) {
  var dist = [];
  for (var i = 1; i <= N; i++) {
    dist[i] = Infinity;
  }

  dist[start] = 0;
  var quque = [];
  quque.push([start, 0]);

  while (quque.length) {
    var temp = quque.shift();
    var current = temp[0];
    var distance = temp[1];

    if (dist[current] < distance) continue;

    for (var i = 0; i < map[current].length; i++) {
      var next = map[current][i][0];
      var nextDistance = distance + map[current][i][1];

      if (nextDistance < dist[next]) {
        dist[next] = nextDistance;
        quque.push([next, nextDistance]);
      }
    }
  }

  return dist;
}
