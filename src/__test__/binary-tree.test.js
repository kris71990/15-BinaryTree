'use strict';

import BinaryTree from '../lib/binary-tree';
import Node from '../lib/node';
import traversals from '../lib/traversals';

describe('testing pre-order traversal of binary tree', () => {
  test('should return nodes in pre-order traversal', () => {
    const testTree = new BinaryTree();
    testTree.root = new Node(1);
    testTree.root.left = new Node(2);
    testTree.root.right = new Node(3);
    console.log(testTree);
  });
});

describe('testing post-order traversal of binary tree', () => {

});

describe('testing in-order traversal of binary tree', () => {

});

