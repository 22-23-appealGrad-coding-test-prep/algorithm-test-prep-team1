/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  //Soultion 참고

  let graph = Array.from({ length: n }, () => []);

  for (let i = 0; i < edges.length; i++) {
    let v1 = edges[i][0];
    let v2 = edges[i][1];
    graph[v1].push(v2);
    graph[v2].push(v1);
  }
  let visited = new Set();
  let queue = [source];

  while (queue.length > 0) {
    let curr = queue.shift();
    visited.add(curr);

    if (destination == curr) return true;
    for (let node of graph[curr]) {
      if (!visited.has(node)) queue.push(node);
    }
  }
  return false;
};
