function bubbleSort(arr) {
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr.length; j++) {
      if () {
        //
      }
    }
  }
}

function insertionSort(arr) {
  if(arr.length <= 1) return;

  for(let i = 0; i < arr.length; i++) {
    let value = arr[i];
    let j = i - 1;

    for(; j >= 0; --j) {
      if(arr[j] > value) {
        arr[j+1] = arr[j]; // 后移一位
      } else { // 已经找到合适的位置了，不再遍历左侧已排序数组
        break;
      };
    };

    arr[j+1] = value; // 插入数据
  };
}

function selectionSort() {
  //
}
