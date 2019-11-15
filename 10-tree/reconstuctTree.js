function reconstructBinaryTree(preorderArr, inorderArr) {
  if (preorderArr.length === 0) {
    return null
  };

  if (preorderArr.length === 1) {
    return {value: preorderArr[0]}
  };

  let tree = {};
  const rootValue = preorderArr[0];
  tree.value = rootValue;
  const rootIndex = inorderArr.indexOf(rootValue);

  let inorderLeft = inorderArr.slice(0, rootIndex);
  let inorderRight = inorderArr.slice(rootIndex + 1);
  let preorderLeft = preorderArr.slice(1, inorderLeft.length + 1);
  let preorderRight = preorderArr.slice(inorderLeft.length + 1);

  tree.left = reconstructBinaryTree(preorderLeft, inorderLeft);
  tree.right = reconstructBinaryTree(preorderRight, inorderRight);

}
