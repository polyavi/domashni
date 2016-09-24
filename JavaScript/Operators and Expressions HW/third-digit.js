function solve(args) {
    var a = +args;
    console.log((a & ( 1 << 3 )) >> 3);
}
solve('15');
solve('1024');
