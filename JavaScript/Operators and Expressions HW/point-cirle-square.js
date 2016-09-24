function solve(args) {
    var x = +args[0];
    var y = +args[1];

    function incircle(x, y) {
        if ((Math.pow((x - 1), 2) + Math.pow((y - 1), 2)) <= (Math.pow(1.5, 2))) {
            return 'inside circle';
        } else return 'outside circle';
    }

    function inrectangle(x, y) {
        if ((x > -1 && x < 5) && (y > -1 && y < 1)) {
            return 'inside rectangle';
        } else return 'outside rectangle';
    }
    console.log(incircle(x, y) + ' ' + inrectangle(x, y));
}
solve(['2.5', '2']);
solve(['0', '1']);
solve(['2.5', '1']);
solve(['1', '2']);
solve(['-1001', '100000']);
