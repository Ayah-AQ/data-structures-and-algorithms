const { zipLists, Node } = require('../index'); 

describe('zipLists', () => {
    test('should merge two linked lists in a zip-like fashion', () => {
      
      const list1 = new Node(1);
      list1.next = new Node(3);
      list1.next.next = new Node(5);
  
      
      const list2 = new Node(2);
      list2.next = new Node(4);
      list2.next.next = new Node(6);
  
      
      const mergedList = zipLists(list1, list2);
  
      
      expect(mergedList.value).toBe(1);
      expect(mergedList.next.value).toBe(2);
      expect(mergedList.next.next.value).toBe(3);
      expect(mergedList.next.next.next.value).toBe(4);
      expect(mergedList.next.next.next.next.value).toBe(5);
      expect(mergedList.next.next.next.next.next.value).toBe(6);
      expect(mergedList.next.next.next.next.next.next).toBeNull();
    });
  
    test('should return the other list if one list is empty', () => {
      
      const list1 = null;
  
      
      const list2 = new Node(1);
      list2.next = new Node(2);
      list2.next.next = new Node(3);
  
      
      const mergedList = zipLists(list1, list2);
  
      
      expect(mergedList.value).toBe(1);
      expect(mergedList.next.value).toBe(2);
      expect(mergedList.next.next.value).toBe(3);
      expect(mergedList.next.next.next).toBeNull();
    });
  
    
  });
  