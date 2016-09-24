function solve(args) {
    var hexNumber = String(args);
    var n = hexNumber.length;
    var key = '0123456789ABCDEF';
    var sum = 0;
    for (var i = 0; i < n; i += 1) {
        var digit = key.indexOf(hexNumber[i]);

        sum = digit + sum * 16;
    }

    console.log(sum);
}
solve('FE');
solve('1AE3');
solve('4ED528CBB4');
