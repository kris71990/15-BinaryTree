'use strict';

/* --- Big O for all ---
T- O(n), n is number of nodes
S- O(h), h is the height of the tree
*/

// root - left - right
const preOrder = [];
const preOrderTraversal = (rootNode) => {
  if (!rootNode) return undefined;

  preOrder.push(rootNode.value);
  preOrderTraversal(rootNode.left);
  preOrderTraversal(rootNode.right);

  return preOrder;
};

// left - right - root
const postOrder = [];
const postOrderTraversal = (rootNode) => {
  if (!rootNode) return undefined;
  
  postOrderTraversal(rootNode.left);
  postOrderTraversal(rootNode.right);
  postOrder.push(rootNode.value);

  return postOrder;
};

// left - root - right
const inOrder = [];
const inOrderTraversal = (rootNode) => {
  if (!rootNode) return undefined;

  inOrderTraversal(rootNode.left);
  inOrder.push(rootNode.value);
  inOrderTraversal(rootNode.right);

  return inOrder;
};

export { preOrderTraversal, postOrderTraversal, inOrderTraversal };
