function selectionSort(arr) {
  function min(arr) {
    const min = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] < min) {
        min = arr[i]
      }
    }
    return min;
  }
  const sorted = [];
  for(var i = 0; i < arr.length; i++) {
    var min = min(arr);
    sorted.push(min);
    arr.splice();
  }
}
