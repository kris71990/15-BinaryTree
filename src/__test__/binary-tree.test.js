'use strict';

import BinaryTree from '../lib/binary-tree';
import Node from '../lib/node';
// import { preOrderTraversal, postOrderTraversal, inOrderTraversal } from '../lib/traversals';

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);

const tree = new BinaryTree(one, '');
const tree2 = new BinaryTree(one, '');
const tree3 = new BinaryTree(one, '');

one.left = two;
one.right = three;

three.left = four;
three.right = five;

two.left = six;

six.right = seven;

seven.left = eight;
seven.right = nine;

describe('testing pre-order traversal of binary tree', () => {
  test('should return nodes in pre-order traversal', () => {
    const traversal = tree.preOrderTraversal(tree.root);
    expect(traversal.charAt(0)).toEqual('1');
    expect(traversal.charAt(2)).toEqual('2');
    expect(traversal.charAt(4)).toEqual('6');
    expect(traversal.charAt(6)).toEqual('7');
    expect(traversal.charAt(8)).toEqual('8');
    expect(traversal.charAt(10)).toEqual('9');
    expect(traversal.charAt(12)).toEqual('3');
    expect(traversal.charAt(14)).toEqual('4');
    expect(traversal.charAt(16)).toEqual('5');
  });
});

describe('testing post-order traversal of binary tree', () => {
  test('should return nodes in post-order traversal', () => {
    const traversal = tree2.postOrderTraversal(tree.root);
    expect(traversal.charAt(0)).toEqual('8');
    expect(traversal.charAt(2)).toEqual('9');
    expect(traversal.charAt(4)).toEqual('7');
    expect(traversal.charAt(6)).toEqual('6');
    expect(traversal.charAt(8)).toEqual('2');
    expect(traversal.charAt(10)).toEqual('4');
    expect(traversal.charAt(12)).toEqual('5');
    expect(traversal.charAt(14)).toEqual('3');
    expect(traversal.charAt(16)).toEqual('1');
  });
});

describe('testing in-order traversal of binary tree', () => {
  test('should return nodes in in-order traversal', () => {
    const traversal = tree3.inOrderTraversal(tree.root);
    expect(traversal.charAt(0)).toEqual('6');
    expect(traversal.charAt(2)).toEqual('8');
    expect(traversal.charAt(4)).toEqual('7');
    expect(traversal.charAt(6)).toEqual('9');
    expect(traversal.charAt(8)).toEqual('2');
    expect(traversal.charAt(10)).toEqual('1');
    expect(traversal.charAt(12)).toEqual('4');
    expect(traversal.charAt(14)).toEqual('3');
    expect(traversal.charAt(16)).toEqual('5');
  });
});

