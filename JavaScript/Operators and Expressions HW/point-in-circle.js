function solve(args) {
    var x = +args[0];
    var y = +args[1];
    if((x*x + y*y) < (2*2)){
        console.log('yes '+ (Math.sqrt(x*x+y*y)).toFixed(2));
    }
    else console.log('no '+ (Math.sqrt(x*x+y*y)).toFixed(2));

}
solve(['-2','0']);
solve(['-1','2']);
solve(['1.5','-1']);
solve(['-1.5','-1.5']);
solve(['100','-30']);
solve(['0','0']);
solve(['0.2','-0.8']);
solve(['0.9','-1.93']);
solve(['1','1.655']);
solve(['0','1']);
