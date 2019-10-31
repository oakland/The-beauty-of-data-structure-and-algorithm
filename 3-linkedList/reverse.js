function reverseLinkedList(head) {
  let node = head,
      prev,
      temp;

  while(node) {
    temp = node.next;

    node.next = prev;

    prev = node;
    node = temp;
  }

  return prev;
}
