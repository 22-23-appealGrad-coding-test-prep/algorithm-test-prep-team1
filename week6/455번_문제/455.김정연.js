/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
 var findContentChildren = function(g, s) {
    let c = function(a, b) {
        return b - a;
    };
      g.sort(c);
      s.sort(c);
      var j = 0;
      for (let i = 0; i < g.length; i++) {
          if (g[i] <= s[j]) j++;
      }
      return j;
  };