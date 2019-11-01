function ksum(arr, sum, k) {

  if (k === 1) {
    return arr.filter(item => item === sum)
  }

  const result = []

  for (let i = 0; i < arr.length; i++) {
    const number = arr[i]
    const tempResult = ksum(arr.slice(i+1), sum - number, k - 1)
    if (tempResult) {
      tempResult.forEach(item => {
        result.push([arr[i]].concat(item))
      })
    }
  }

  return result
}

var arr = [1, 2, 3, 4, 5]
var sum = 9
var k = 3

var result = ksum(arr, sum, k)
console.log('----')
console.log(result)
