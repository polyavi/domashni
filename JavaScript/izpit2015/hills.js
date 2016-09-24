function solve(params) {
    let s = params.split(' ').map(Number),
        n = s.length,
        rockCount = [];
    for (let i = 0; i < n; i += 1) {
        rockCount[i] = 1;
    }
    console.log(s, rockCount);
    for (let j = 0; j < n - 1; j += 1) {

        if (isPeak(s[j], s[j + 1])) {
            rockCount[j + 1] += rockCount[j];
            rockCount[j] = 0;

        }
    }
    for (let j = n - 1; j > 0; j -= 1) {

        if (isPeak(s[j], s[j - 1])) {
            rockCount[j] += rockCount[j - 1];
            rockCount[j - 1] = 0;
        }
    }
    console.log(rockCount);
    console.log(max(rockCount));

    function isPeak(point1, point2) {
        if (point1 > point2) return true;
        else return false;
    }

    function max(arr) {
        let m = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > m) {
                m = arr[i];
            }
        }
        return m;
    }
}
solve("5 1 7 6 3 6 4 2 3 8");
