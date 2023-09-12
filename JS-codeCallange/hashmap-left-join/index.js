class Hashmap {
    constructor() {
      this.buckets = new Array(30); 
    }
  
    hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.buckets.length;
    }
  
    insert(key, value) {
      const index = this.hash(key);
      if (!this.buckets[index]) {
        this.buckets[index] = new LinkedList();
      }
      this.buckets[index].append({ [key]: value });
    }
  
    contains(key) {
      const index = this.hash(key);
      if (!this.buckets[index]) {
        return false;
      }
      return this.buckets[index].find(key);
    }
  
    get(key) {
      const index = this.hash(key);
      if (!this.buckets[index]) {
        return null;
      }
      const node = this.buckets[index].find(key);
      return node ? node.value[key] : null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    append(value) {
      const newNode = { value, next: null };
      if (!this.head) {
        this.head = newNode;
        return;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  
    find(key) {
      let current = this.head;
      while (current) {
        if (Object.keys(current.value)[0] === key) {
          return current;
        }
        current = current.next;
      }
      return null;
    }
  }
  
  const leftJoin = (leftTable, rightTable) => {
    const results = [];
  
    for (let i = 0; i < leftTable.buckets.length; i++) {
      const row = [];
  
      if (leftTable.buckets[i]) {
        const key = Object.keys(leftTable.buckets[i].head.value)[0];
        const value = leftTable.buckets[i].head.value[key];
  
        row.push(key);
        row.push(value);
  
        if (rightTable.contains(key)) {
          row.push(rightTable.get(key));
        } else {
          row.push(null);
        }
  
        results.push(row);
      }
    }
  
    return results;
  };
  
  module.exports = { leftJoin, Hashmap };
  