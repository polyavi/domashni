function solve(args) {
    var a = +args;
    if (a === 0 || !!(a && !(a % 2))) {
        console.log('even ' + a);
    } else {
        console.log('odd ' + a);
    }
}
solve('3');
solve('2');
solve('-2');
solve('0');
solve('-1');
