function solve(args) {
    var n = +args;
    var line = '';
    for (var i = 0; i < n; i += 1) {
        for (var j = i + 1; j <= i + n; j += 1)
            line += j + ' ';
        console.log(line);
        line = '';
    }
}
solve('3');
