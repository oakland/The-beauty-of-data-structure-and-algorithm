function checkPairs(str) {
  let arr = [];
  let index = 0;
  let char = str[index];

  while(char) {
    if(char === '(' || char === '[' || char === '{') {
      arr.push(char);
      char = str[++index];
    } else {
      const element = arr.pop();
      if (
        (char === ')' && element === '(') ||
        (char === ']' && element === '[') ||
        (char === '}' && element === '{')
      ) {
        char = str[++index];
      } else {
        return false;
      };
    };
  };

  return arr.length === 0;
}

const str1 = '[{()()}]';
const str2 = '{([]()}';

const res1 = checkPairs(str1)
const res2 = checkPairs(str2)

console.log('result')
console.log(res1)
console.log(res2)
