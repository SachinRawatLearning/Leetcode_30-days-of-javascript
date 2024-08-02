var join = function (arr1, arr2) {
  arr1.sort((a, b) => a.id - b.id);
  arr2.sort((a, b) => a.id - b.id);

  const joinedArray = [];

  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i].id < arr2[j].id) {
      joinedArray.push(arr1[i]);
      i++;
    } else if (arr1[i].id > arr2[j].id) {
      joinedArray.push(arr2[j]);
      j++;
    } else {
      joinedArray.push({ ...arr1[i], ...arr2[j] });
      i++;
      j++;
    }
  }

  while (i < arr1.length) {
    joinedArray.push({ ...arr1[i] });
    i++;
  }

  while (j < arr2.length) {
    joinedArray.push({ ...arr2[j] });
    j++;
  }

  return joinedArray;
};

console.log(
  join(
    [
      { id: 1, x: 2, y: 3 },
      { id: 2, x: 3, y: 6 },
    ],
    [
      { id: 2, x: 10, y: 20 },
      { id: 3, x: 0, y: 0 },
    ]
  )
);
