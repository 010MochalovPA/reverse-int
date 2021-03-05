module.exports = function reverse (n) {
    return +(String(Math.abs(n)).split('').reverse().join(''));
    // return  Number((String(Math.abs(n))).split('').reverse().join(''));
}
