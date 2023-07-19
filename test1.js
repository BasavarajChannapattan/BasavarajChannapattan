//find the frequency of elements in array

const arr = ["marker", "pen", "marker", "pen", "headphone", "pen"];

//let solve it with reduced method

const result = arr.reduce((allItems, arr) => {
  if (arr in allItems) {
    allItems[arr] += 1;
  } else {
    allItems[arr] = 1;
  }
  return allItems;
}, {});

console.log(result);
