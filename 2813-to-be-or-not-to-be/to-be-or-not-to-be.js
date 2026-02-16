/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: function(n) {
            if (val === n) return true;
            throw new Error("Not Equal");
        },
        notToBe: function(n) {
            if (val !== n) return true;
            throw new Error("Equal");
        }
    };
};



 expect(5).toBe(5); // true
 try {
    console.log(expect(5).notToBe(5));
} catch (e) {
    console.log(e.message);
}

