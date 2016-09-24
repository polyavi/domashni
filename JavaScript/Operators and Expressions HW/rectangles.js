function solve(args) {
    var a = parseFloat(args[0]);
    var b = parseFloat(args[1]);

    console.log((a*b).toFixed(2)+' '+(2*a+2*b).toFixed(2));
}
solve(['2.5' , '3']);
solve(['5' , '5']);
solve(['0' , '0']);
solve(['3' , '4']);
