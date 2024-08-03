/**
 * @param {Array} arr
 * @param {numbe    r} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  const res = [];
  if (!n) return arr;
  arr.forEach((el) => {
    if (Array.isArray(el)) res.push(...flat(el, n - 1));
    else res.push(el);
  });
  return res;
};
