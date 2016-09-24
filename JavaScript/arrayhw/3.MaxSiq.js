function solve(args) {
    var arr = args[0].split('\n'),
        n = +arr[0],
        curr = +arr[1],
        count = 1,
        best = count;
    for (var i = 1; i < n; i += 1) {
        if (curr === +arr[i + 1]) count += 1;
        else {
            if (best < count) {
                best = count;
                count = 1;
            } else count = 1;
        }
        curr = +arr[i + 1];
    }
    console.log(best);
}
solve(['1\n1']);
