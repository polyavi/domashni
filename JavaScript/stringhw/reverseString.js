function solve(args) {
    var str = String(args[0]),
        reversedString = '',
        n= str.length;
    for (let i = n - 1; i >= 0; i -= 1) {
        reversedString = reversedString.concat(str[i]);
    }
    console.log(reversedString);
}
console.log(solve([4563454]));
