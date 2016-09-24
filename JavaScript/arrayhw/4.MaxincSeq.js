function solve(args) {
    var arr = args[0].split('\n'),
        n = +arr[0],
        numbers = arr.slice(1),
        curr = +numbers[0],
        count = 1,
        best = 0;
    for (var i = 0; i < n; i += 1) {
        if (curr < +numbers[i + 1]) {
            count++;
        } else {
            if (coun > best) {
                best = count;
            }
            count= 1;
        }
        curr = +numbers[i + 1];
    }
    console.log(best);
}
