var flat = function (arr, n) {
  let result = [...arr];
  let temp;
  let level = 0;

  const flattenByOneLevel = () => {
    if (level >= n) return;
    temp = [];
    level++;
    result.forEach((element) => {
      if (Array.isArray(element)) {
        element.forEach((item) => temp.push(item));
      } else temp.push(element);
    });
    result = temp;
    flattenByOneLevel();
  };

  flattenByOneLevel();

  return result;
};

console.log(
  flat(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, [9, 10, 11], 12],
      [13, 14, 15],
    ],
    2
  )
);
