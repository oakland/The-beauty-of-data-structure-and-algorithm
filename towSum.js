function twoSum(arr, sum) {
  const result = [];

  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        result.push([arr[i], arr[j]])
      }
    }
  }

  return result;
}

var arr = [1, 2, 3, 4, 5, 6]
var sum = 9;
// var sum = 5;

// var result = twoSum(arr, sum);

// console.log('----');
// console.log(result);


function threeSum(arr, sum) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    const towSumResult = towSum(arr.slice(i + 1), sum - arr[i])

    if (towSumResult.length) {
      towSumResult.forEach(item => {
        result.push(item.concat(arr[i]))
      })
    }
  }

  return result;
}

var result = threeSum(arr, 9);
console.log('----');
console.log(result);
