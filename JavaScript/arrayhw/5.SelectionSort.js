function solve(args) {
    var arr = args[0].split('\n'),pom,
        n = +arr[0],
        numbers = arr.slice(1);

    for (var i = 0; i < n; i += 1) {
        for (var j = i + 1; j < n; j += 1) {
            if (+numbers[j] < +numbers[i]) {
                pom = +numbers[j];
                numbers[j] = +numbers[i];
                numbers[i] = pom;
            }
        }
    }
    console.log(numbers.join('\n'));
}
