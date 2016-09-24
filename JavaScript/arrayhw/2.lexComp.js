function solve(args){
  var arr = args[0].split('\n'),
          str1 = String(arr[0]),
          str2 = String(arr[1]);
    if(str1==str2) console.log('=');
    if(str1>str2) console.log('>');
    if(str1<str2) console.log('<');
  }
solve(['Hello\nHalo']);
solve(['food\nfood']);
solve(['Food\nfood']);
