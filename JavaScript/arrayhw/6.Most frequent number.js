function solve(args) {
    var arr = args[0].split('\n'),
        n = +arr[0],
        numbers = arr.slice(1);
        function selectSort(numbers, n) {

            for (var i = 0; i < n; i += 1) {
                for (var j = i + 1; j < n; j += 1) {
                    if (+numbers[j] < +numbers[i]) {
                        pom = +numbers[j];
                        numbers[j] = +numbers[i];
                        numbers[i] = pom;
                    }
                }
            }
            return numbers;
        }
    function maxseq(arr, n) {
        var count = 1,
            best = count,
            curr = +arr[0],
            num = +arr[0];
        for (var i = 0; i < n; i += 1) {
            if (curr === +arr[i + 1]) count += 1;
            else {
                if (best < count) {
                    num = +curr;
                    best = count;
                    count = 1;
                } else count = 1;
            }
            curr = +arr[i + 1];
        }
        console.log(num + '(' + best + 'times)');
    }


    selectSort(numbers, n);
    maxseq(numbers, n);
}
