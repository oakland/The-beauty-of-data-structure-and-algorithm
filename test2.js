function mergeSort(arr) {
  if(arr.length === 2) {
    if (arr[0] > arr[1]) {
      return [arr[1], arr[0]]
    } else {
      return arr;
    }
  };
  if(arr.length === 0 || arr.length === 1) return arr;
  var middle = Math.floor(arr.length / 2);
  var front = arr.splice(0, middle + 1);
  console.log(front)
  var back = arr;
  console.log(back)
  return mergeSort(front).concat(mergeSort(back))
}

const list = [54, 26, 93, 17, 77, 31, 44, 55, 20];
console.log(mergeSort(list))
