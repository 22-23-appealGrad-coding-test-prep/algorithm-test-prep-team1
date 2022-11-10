/**
 * @param {string} path
 * @return {boolean}
 */
 var isPathCrossing = function (path) {
  const currentLocation = {
      x: 0,
      y: 0
  }

  const locationsMap = new Map();

  locationsMap.set(JSON.stringify(currentLocation), 1)

  for (let direction of path) {
      if (direction == "N") currentLocation.y += 1;
      else if (direction == "E") currentLocation.x += 1;
      else if (direction == "W") currentLocation.x -= 1;
      else if (direction == "S") currentLocation.y -= 1;

      if (locationsMap.has(JSON.stringify(currentLocation))) {
          return true;
      } else locationsMap.set(JSON.stringify(currentLocation), 1);
  }

  return false;

};