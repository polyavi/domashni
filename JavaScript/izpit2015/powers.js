function solve(args) {
    let nk = args[0].split(' ').map(Number),
        numbers = args[1].split(' ').map(Number),
        changedNum = [],
        n = nk[0],
        k = nk[1];
    result = 0;
    for (let i = 0; i < k; i += 1) {
        for (let j = 0; j < n; j += 1) {
            if (j > 0 && j < n - 1) {
                if (numbers[j] === 0)
                    changedNum[j] = Math.abs((numbers[j - 1] - numbers[j + 1]));
                else if (numbers[j] === 1)
                    changedNum[j] = (numbers[j - 1] + numbers[j + 1]);
                else if (numbers[j] % 2 === 0)
                    changedNum[j] = Math.max(numbers[j - 1], numbers[j + 1]);
                else if (numbers[j] % 2 !== 0)
                    changedNum[j] = Math.min(numbers[j - 1], numbers[j + 1]);
            } else if (j === 0) {
                if (+numbers[j] === 0)
                    changedNum[j] = Math.abs((numbers[n - 1] - numbers[1]));
                else if (numbers[j] === 1)
                    changedNum[j] = numbers[n - 1] + numbers[1];
                else if (numbers[j] % 2 === 0)
                    changedNum[j] = Math.max(numbers[n - 1], numbers[1]);
                else if (numbers[j] % 2 !== 0)
                    changedNum[j] = Math.min(numbers[n - 1], numbers[1]);
            } else if (j === nk[0] - 1) {
                if (numbers[j] === 0)
                    changedNum[j] = Math.abs((numbers[n - 2] - numbers[0]));
                else if (numbers[j] === 1)
                    changedNum[j] = numbers[n - 2] + numbers[0];
                else if (numbers[j] % 2 === 0)
                    changedNum[j] = Math.max(numbers[n - 2], numbers[0]);
                else if (numbers[j] % 2 !== 0)
                    changedNum[j] = Math.min(numbers[n - 2], numbers[0]);
            }
        }
        for (let j = 0; j < n; j += 1) {
            numbers[j] = changedNum[j];
        }
    }
    for (let i = 0; i < n; i += 1) {
        result += numbers[i];
    }
    console.log(result);
}
