'use strict';

// root - left - right
const preOrderTraversal = (rootNode) => {
  if (!rootNode) return undefined;

  console.log(`visiting node with value ${rootNode.value}`);
  preOrderTraversal(rootNode.left);
  preOrderTraversal(rootNode.right);

  return undefined;
};

// left - right - root
const postOrderTraversal = (rootNode) => {
  if (!rootNode) return undefined;
  
  postOrderTraversal(rootNode.left);
  postOrderTraversal(rootNode.right);
  console.log(`visiting node with value ${rootNode.value}`);

  return undefined;
};

// left - root - right
const inOrderTraversal = (rootNode) => {
  if (!rootNode) return undefined;

  inOrderTraversal(rootNode.left);
  console.log(`visiting node with value ${rootNode.value}`);
  inOrderTraversal(rootNode.right);

  return undefined;
};

export { preOrderTraversal, postOrderTraversal, inOrderTraversal };
