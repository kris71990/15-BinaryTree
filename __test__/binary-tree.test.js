'use strict';

import BinaryTree from '../lib/binary-tree';
import Node from '../lib/node';
import traversals from '../lib/traversals';

describe('testing pre-order traversal of binary tree', () => {
  test('should return nodes in pre-order traversal', () => {
    const binaryTree = new BinaryTree();
    BinaryTree.root = new Node(1);
    BinaryTree.root.left = new Node(2);
    BinaryTree.root.right = new Node(3);
    console.log(binaryTree);
  });
});

describe('testing post-order traversal of binary tree', () => {

});

describe('testing in-order traversal of binary tree', () => {

});

