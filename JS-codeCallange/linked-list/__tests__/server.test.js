'use strict';

// Require our linked list implementation
const LinkedList = require('../linked-list');

describe('LinkedList', () => {
  test('creates a LinkedList', () => {
    const newList = new LinkedList();
    expect(Object.keys(newList).length).toEqual(1);
  });

  test('adds to the LinkedList', () => {
    const newList = new LinkedList();
    newList.insert(1);
    newList.insert(2);
    expect(newList.head.value).toEqual(2);
    expect(newList.head.next).toEqual({ value: 1, next: null });
  });

  test('toString gives specific string', () => {
    const newList = new LinkedList();
    newList.insert(1);
    newList.insert(2);
    expect(newList.toString()).toEqual('{ 2 } -> { 1 } -> NULL');
  });

  test('includes returns true for a value that exists in the list', () => {
    const newList = new LinkedList();
    newList.insert(1);
    newList.insert(2);
    newList.insert(3);
    expect(newList.includes(2)).toBe(true);
  });

  test('includes returns false for a value that does not exist in the list', () => {
    const newList = new LinkedList();
    newList.insert(1);
    newList.insert(2);
    newList.insert(3);
    expect(newList.includes(4)).toBe(false);
  });

  test('includes returns false for an empty list', () => {
    const newList = new LinkedList();
    expect(newList.includes(1)).toBe(false);
  });
});
