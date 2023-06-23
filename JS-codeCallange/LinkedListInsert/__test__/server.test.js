'use strict';

const LinkedList = require('../Insertation');

describe('test linked list', () => {
  test('creates a linked list', () => {
    const newList = new LinkedList();
    expect(newList.head).toBeNull();
  });

  test('adds to the linked list', () => {
    const newList = new LinkedList();
    newList.append(1);
    newList.append(2);
    expect(newList.head.value).toEqual(1);
    expect(newList.head.next.value).toEqual(2);
    expect(newList.head.next.next).toBeNull();
  });

  test('inserts before a node', () => {
    const newList = new LinkedList();
    newList.append(1);
    newList.append(2);
    newList.insertBefore(2, 3);
    expect(newList.head.value).toEqual(1);
    expect(newList.head.next.value).toEqual(3);
    expect(newList.head.next.next.value).toEqual(2);
    expect(newList.head.next.next.next).toBeNull();
  });

  test('inserts before the first node', () => {
    const newList = new LinkedList();
    newList.append(1);
    newList.append(2);
    newList.insertBefore(1, 3);
    expect(newList.head.value).toEqual(3);
    expect(newList.head.next.value).toEqual(1);
    expect(newList.head.next.next.value).toEqual(2);
    expect(newList.head.next.next.next).toBeNull();
  });

  test('inserts after a node', () => {
    const newList = new LinkedList();
    newList.append(1);
    newList.append(2);
    newList.insertAfter(1, 3);
    expect(newList.head.value).toEqual(1);
    expect(newList.head.next.value).toEqual(3);
    expect(newList.head.next.next.value).toEqual(2);
    expect(newList.head.next.next.next).toBeNull();
  });

  test('inserts after the last node', () => {
    const newList = new LinkedList();
    newList.append(1);
    newList.append(2);
    newList.insertAfter(2, 3);
    expect(newList.head.value).toEqual(1);
    expect(newList.head.next.value).toEqual(2);
    expect(newList.head.next.next.value).toEqual(3);
    expect(newList.head.next.next.next).toBeNull();
  });

  test('returns the linked list as a string', () => {
    const newList = new LinkedList();
    expect(newList.toString()).toEqual('NULL');

    newList.append(1);
    expect(newList.toString()).toEqual('{1} -> NULL');

    newList.append(2);
    expect(newList.toString()).toEqual('{1} -> {2} -> NULL');
  });
});
