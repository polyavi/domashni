function solve(args) {
    var n = +args,
        numbers = [];
    numbers[0] = false;
    numbers[1] = false;
    for (var i = 2; i < n; i += 1)
        numbers[i] = true;
    for (i = 2; i <= Math.sqrt(n); i += 1)
        if (numbers[i] === true)
            for (var j = i * i; j <= n; j += i) {
                numbers[j] = false;
            }
    for (i = n; i >= 2; i--) {
        if (numbers[i] === true) {
            return i;
        }
    }
}
