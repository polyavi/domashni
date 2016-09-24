function solve(args){
  let input= String(args[0]);
  console.log('protocol: ' + input.replace(/:\/\/.*/, ''));
  console.log('server: ' + input.replace(/.*:\/\//,'').replace(/\/.*/,''));
  console.log('resource: '+ input.replace(/.*:\/\/.*?\//,'/'));
}
solve(['sdfd://sfggs/dfs/d']);
