function solve(args) {
    var a = +args;
    if(!!(a<=1)) return false;
    for (var i = 2; i < a; i += 1) {
        if (a % i === 0 && i != a)
            return false;
    }
    return true;
}
console.log(solve('2'));
console.log(solve('23'));
console.log(solve('-3'));
console.log(solve('0'));
console.log(solve('1'));
