function solve(args) {
    var n = +args;
    var line = '';
    for (var i = 0; i <= n; i += 1) {
        line += i + ' ';
    }
    console.log(line);
}
solve('5');
solve('4');
