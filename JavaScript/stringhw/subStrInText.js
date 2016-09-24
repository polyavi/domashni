function solve(args) {
    var searchFor = String(args[0]),
        text = String(args[1]),
        pom= new RegExp(searchFor,'gi');
    console.log(text.match(pom).length);
}
solve(['in', 'We are living In an yellow submarine. We don\'t have anythINg else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.']);
