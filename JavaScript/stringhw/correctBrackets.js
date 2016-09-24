function solve(args) {
    var str = String(args[0]),
        n= str.length,
        opened=0,
        closed=0;
    for (let i = 0; i < n; i += 1) {
        if(closed>opened){
            return console.log('Incorrect');
        }
      if(str[i]=='(') opened+=1;
      if(str[i]==')') closed+=1;
    }
    if(opened===closed)
    console.log('Correct');
    else console.log('Incorrect');
}

solve(['(sd(dfgf)']);
solve([')(fdg(dfd()))']);
solve(['(sd)()dfgf)']);
solve(['(sd(df()gf)']);
solve(['sddfgf']);
solve(['']);
