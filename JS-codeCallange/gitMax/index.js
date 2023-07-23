class MaxStack {
    constructor() {
      this.stackData = [];
      this.maxValue = null;
    }
  
    push(value) {
      // If the stack is empty or the new value is greater than the current max, update the max value.
      if (this.stackData.length === 0 || value >= this.maxValue) {
        // If the stack is not empty, push the previous max value as well, so we can track it.
        if (this.stackData.length > 0) {
          this.stackData.push(this.maxValue);
        }
        this.maxValue = value;
      }
      this.stackData.push(value);
    }
  
    pop() {
      if (this.stackData.length === 0) return null;
  
      const poppedValue = this.stackData.pop();
  
      // If the popped value is the current max, update the max value to the previous max value stored in the stack.
      if (poppedValue === this.maxValue) {
        this.maxValue = this.stackData.pop();
      }
  
      return poppedValue;
    }
  
    getMax() {
      return this.maxValue;
    }
  }
  
  // Example usage:
  const maxStack = new MaxStack();
  maxStack.push(5);
  maxStack.push(2);
  maxStack.push(10);
  
  console.log(maxStack.getMax()); // Output: 10
  
  maxStack.pop();
  console.log(maxStack.getMax()); // Output: 5
  