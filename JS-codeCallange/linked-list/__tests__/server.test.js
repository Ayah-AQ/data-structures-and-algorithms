'use strict';

// Require our linked list implementation
const Linkedlist = require('../linked-list');

describe('test linked list', () => {
  test('creates a linkedlist', () => {
    const newList = new Linkedlist();
    expect(Object.keys(newList).length).toEqual(1);
  });
  test('adds to the linkedlist', () => {
    const newList = new Linkedlist();
    newList.insert(1);
    newList.insert(2);
    expect(newList.head.value).toEqual(2);
    expect(newList.head.next).toEqual({value: 1, next: null});
  });
  test('toString gives specific string', () => {
    const newList = new Linkedlist();
    newList.insert(1);
    newList.insert(2);
    expect(newList.toString()).toEqual(`{2} -> {1} -> NULL`);
  });
});