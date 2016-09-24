
function solve(args) {
    let output = '';
    let matchTags = /<.*?>/ig;

    for (let line of args) {
        output += line.replace(matchTags, '').trim();
    }

    console.log(output);
}
solve([
    '<html>',
    '  <head>',
    '    <title>df gfdg</title>',
    '  </head>',
    '  <body>',
    '    <div>dfgdf',
    '      <div>vf dfhg</div>',
    '      and more...',
    '    </div>',
    '    in body',
    '  </body>',
    '</html>'
]);
