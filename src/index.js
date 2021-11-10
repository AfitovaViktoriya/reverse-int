module.exports = function reverse (n) {
    let newArr = String(n).split('');
    let newString = '';

    if (newArr[0] === '-') {
        newArr.splice(0, 1);
    }
    for (let i = newArr.length - 1; i >= 0; i--) {
        newString += newArr[i];
    }

    return Number(newString);
}
