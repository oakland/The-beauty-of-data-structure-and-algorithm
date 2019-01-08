function find(BST, value) {
  console.log(BST.value);
  if (BST.value === value) {
    return value;
  } else if (BST.value > value) {
    search(BST.left, value);
  } else {
    search(BST.right, value);
  }
  return false;
}

const bst = {
  value: 6,
  left: {
    value: 3,
    left: {
      value: 2,
      left: null,
      right: null
    },
    right: {
      value: 4,
      left: null,
      right: null
    }
  },
  right: {
    value: 8,
    left: {
      value: 7,
      left: null,
      right: null
    },
    right: {
      value: 9,
      left: null,
      right: null
    }
  }
}

find(bst, 9);
