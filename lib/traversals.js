'use strict';

/* 
----------- Big O --------------------
Time - O(n) where n is the number of nodes
Space - O(h) where h is the height of the tree
-----------------------------------------
 */

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

export { preOrderTraversal, postOrderTraversal };
