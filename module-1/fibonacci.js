/**
 * The function returns the nth value of
 * the Fibonacci sequence
 *
 * @param {number} n (n >= 0)
 * @returns {number} Fibonacci number or 0 if any arguments are not proper
 */
function fibonacci(n) {
    let nThFib;

    if (n >= 0) {
        //if nothing is here... then the result will be undefined
        if( n<2) {
            nThFib = n;
        } else {
            nThFib = fibonacci(n-2) + fibonacci(n-1);
        }
    } else {
        nThFib = 0;
    }
    return nThFib;
}
module.exports = fibonacci;