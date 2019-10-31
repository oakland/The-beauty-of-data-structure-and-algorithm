const preOrder = tree => {
  if (!tree) return;
  console.log(tree.value);
  preOrder(tree.left);
  preOrder(tree.right);
}

const inOrder = tree => {
  if (!tree) return;
  inOrder(tree.left);
  console.log(tree.value);
  inOrder(tree.right);
}

const postOrder = tree => {
  if (!tree) return;
  postOrder(tree.left);
  postOrder(tree.right);
  console.log(tree.value);
}

const tree = {
  value: 'A',
  left: {
    value: 'B',
    left: {
      value: 'D',
      left: null,
      right: null
    },
    right: {
      value: 'E',
      left: null,
      right: null
    }
  },
  right: {
    value: 'C',
    left: {
      value: 'F',
      left: null,
      right: null
    },
    right: {
      value: 'G',
      left: null,
      right: null
    }
  }
};

postOrder(tree);