function solve(args){
  var str = String(args[0]);
  console.log(str.replace(/\s/g, '&nbsp;'));
}
solve(['This is crap that i wrote!']);
