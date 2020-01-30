/**
 * At a lemonade stand, each lemonade costs $5. 
 * Customers are standing in a queue to buy from you, 
 * and order one at a time (in the order specified by bills).
 * Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.  
 * You must provide the correct change to each customer, so that the net transaction is that the customer pays $5.
 * Note that you don't have any change in hand at first.
 * 
 * Return true if and only if you can provide every customer with correct change.
 * 
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let five = 0, ten = 0, twenty = 0
        for (let n of bills) {
            if (n == 5) five++;
            else if (n == 10) {five--; ten++;}
            else if (ten > 0) {ten--; five--;}
            else five -= 3;
            if (five < 0) return false;
        }
        return true;
};