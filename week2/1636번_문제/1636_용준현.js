/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var frequencySort = function (nums) {
  let answerArr = [];

  let map = new Map();
  for (let num of nums) {
      let prevVal = map.get(num);
      if (prevVal) map.set(num, prevVal + 1);
      else map.set(num, 1);
  }



  let sortedMapArr = Array.from(map).sort((a, b) => {
      if (a[1] - b[1] > 0) return 1;
      else if (a[1] - b[1] == 0) {
          if (b[0] - a[0] > 0) return 1;
          else if(b[0] - a[0] == 0) return 0;
          else if(b[0] - a[0] < 0) return -1;
      }
      else if (a[1] - b[1] < 0) return - 1
  });

  sortedMapArr.map((item) => {
      for (let i = 0; i < item[1]; i++) {
          answerArr.push(item[0]);
      }
  });

  return answerArr;
};