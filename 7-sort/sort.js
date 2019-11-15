function bubbleSort(arr) {
  for(var i = 0; i < arr.length; i++) {
    let swap = false;
    for(var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        swap = true;
      }
    }
    if(!swap) return;
  }
}

function insertionSort(arr) {
  if(arr.length <= 1) return;

  for(let i = 0; i < arr.length; i++) {
    let value = arr[i];
    let j = i - 1;

    for(; j >= 0; j--) {
      if(arr[j] > value) {
        arr[j+1] = arr[j]; // 后移一位
      } else { // 已经找到合适的位置了，不再遍历左侧已排序数组
        break;
      };
    };

    arr[j+1] = value; // 插入数据
  };
}

function selectionSort(arr) {
  if(arr.length < 2) { return };

  for (let i = 0; i < arr.length; i++) {
    // 1. 将已排序的最后一个数作为参照
    let index = i;
    let min = arr[index];

    // 2. 寻找未排序中的最小值
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[j] <= min) {
        index = j;
        min = arr[j];
      }
    }

    // 3. 互换未排序的数组中两个位置
    if (index !== i) {
      let temp = arr[i];
      arr[i] = arr[index];
      arr[index] = temp;
    }
  }
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if(min !== i) {
      let temp = arr[i];
      arr[i] = arr[min]
      arr[min] = temp;
    }
  }
  return arr;
}
