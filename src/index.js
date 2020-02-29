module.exports = function reverse(n) {
    const mod = Math.abs(n);
    return parseFloat(mod.toString().split('').reverse().join(''));
}