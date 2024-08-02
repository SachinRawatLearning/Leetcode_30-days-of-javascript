var join = function (arr1, arr2) {
  //We start by creating a new Map object called map. A Map is used to efficiently store and retrieve key-value pairs.
  const map = new Map();
  //We iterate over each object in arr1 using a for-of loop. For each object, we set its ID as the key and the entire object as the value in the map.
  arr1.forEach((obj) => {
    map.set(obj.id, obj);
  });
  //Next, we iterate over each object in arr2 using another for-of loop. For each object, we check if its ID already exists as a key in the map.
  arr2.forEach((obj) => {
    //If the ID does not exist in the map, we set the ID as the key and the entire object as the value in the map. This ensures that the object is included in the res array without modification.
    if (!map[obj.id]) map.set(obj.id, obj);
    else {
      //However, if the ID already exists in the map, we retrieve the existing object using map.get(obj.id). We then iterate over each property of the current object using Object.keys(obj).
      const prevObj = map.get(obj.id);
      for (let key of Object.keys(obj)) prevObj[key] = obj[key];
    }
  });
  const result = [];
  for (let key of map.keys()) {
    result.push(map.get(key));
  }
  return result.sort((a, b) => a.id - b.id);
};

console.log(
  join(
    [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }],
    [{ id: 1, b: { c: 84 }, v: [1, 3] }]
  )
);

// The time complexity is O(nlogn) due to the sort function
