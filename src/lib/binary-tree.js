'use strict';

export default class BinaryTree {
  constructor(root = null, traversal = null) {
    this.root = root;
    this.traversal = traversal;
  }

  preOrderTraversal(root) {
    if (!root) return undefined;

    this.traversal += `${root.value},`;
    this.preOrderTraversal(root.left);
    this.preOrderTraversal(root.right);
    
    return this.traversal.slice(0, -1);
  }

  // postOrderTraversal(root) {
  //   if (!root) return undefined;
    
  //   this.postOrderTraversal(root.left);
  //   this.postOrderTraversal(root.right);
  //   this.traversal.push(root.value);
  //   // console.log(`visiting node with value ${root.value}`);
  
  //   // console.log(this.traversal)
  //   return this.traversal;
  // }
}
