function solve(start, end) {
    function isPrime(n) {
        if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
        if (n % 2 === 0) return (n === 2);
        if (n % 3 === 0) return (n === 3);
        var m = Math.sqrt(n);
        for (var i = 5; i <= m; i += 6) {
            if (n % i === 0) return false;
            if (n % (i + 2) === 0) return false;
        }
        return true;
    }

    let prime = [];

    if (start === undefined || end === undefined) {
        throw new Error('Missing arguments');
    } else {
        start = parseInt(start);
        end = parseInt(end);
        if (typeof start === 'number' && typeof end === 'number') {
            for (let i = start; i <= end; i += 1) {
                if (isPrime(i)) prime.push(i);
            }

        } else {
            throw new Error('Not numbers!');
        }

    }
      return prime;
}
module.exports = solve;
// console.log(solve('1', '5'));
// console.log(solve(0,5));
// console.log(solve());
// console.log(solve(1));
// console.log(solve(258, 262));
