module.exports = function reverse (n) {
    let str = String(n)
    let newStr = String(n*-1);
    return n > 0 ? Number(str.split("").reverse().join("")) : Number(newStr.split("").reverse().join(""));
}
