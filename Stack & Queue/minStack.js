/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.min = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if (x <= this.min[this.min.length - 1] || this.min.length === 0) {
        this.min.push(x);
        console.log("added to min", x);
    }
    this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.stack[this.stack.length - 1] === this.min[this.min.length - 1]) {
        this.min.pop();
    }
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (this.stack.length === 0) return null;
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (this.min.length === 0) return null;
    return this.min[this.min.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */