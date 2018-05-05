'use strict';

import BinaryTree from './lib/binary-tree';
import Node from './lib/node';

const testTree = new BinaryTree();
testTree.root = new Node(1);
testTree.root.left = new Node(2);
testTree.root.right = new Node(3);
console.log(testTree);
