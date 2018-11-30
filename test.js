function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let flag = false;
    for(let j = 0; j < arr.length; j++) {
      if (arr[j] >= arr[j+1]) {
        var temp = arr[j];
        arr[j] = arr[j+1]
        arr[j+1] = temp;
      }
      flag = true;
    }
    if (!flag) break;
  }
  return arr;
}

const list = [54, 26, 93, 17, 77, 31, 44, 55, 20]
console.log(bubbleSort(list)) // [ 17, 20, 26, 31, 44, 54, 55, 77, 93 ]
