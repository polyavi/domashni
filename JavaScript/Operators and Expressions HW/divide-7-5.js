function solve(args) {
    var a = +args;
    if ((!!(a && !(a % 7)) && !!(a && !(a % 5))) || a === 0) {
        console.log('true ' + a);
    } else {
        console.log('false ' + a);
    }
}
solve('3');
solve('0');
solve('5');
solve('7');
solve('35');
solve('140');
