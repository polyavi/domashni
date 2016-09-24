/*function solve(args){
  var a=+args[0];
  var b=+args[1];
  var c=+args[2];
  if(a===0 || b===0 || c===0) return 0;
  if((a<0 && b<0 && c>0)||(a>0 && b<0 && c<0)||(a<0 && b>0 && c<0)||(a>0 && b>0 && c>0)) return '+';
  else return '-';

}*/
/*function solve(args){
  var a=+args[0];
  var b=+args[1];
  var c=+args[2];
  if(a>b){
    if(a>c) return a;
    else return c;
  }
  else{
    if(b>c) return b;
    else return c;
  }

}
function solve(args) {
    var a = +args[0];
    var b = +args[1];
    var c = +args[2];
    var pom = 0;

    if (a < b) {
        pom = +a;
        a = b;
        b = +pom;
    }
    if (a < c) {
        pom = +a;
        a = c;
        c = +pom;
    }
    if (b < c) {
        pom = +b;
        b = c;
        c = +pom;
    }
    console.log(a + ' ' + b + ' ' + c);
}
solve(['5', '1', '2']);
solve(['-2', '-2', '1']);
solve(['-2', '4', '3']);
solve(['0', '-2.5', '5']);
solve(['-1.1', '-0.5', '-0.1']);

function solve(args) {
    var a = +args;
    switch (a) {
        case 0:
            console.log('zero');
            break;
        case 1:
            console.log('one');
            break;
        case 2:
            console.log('two');
            break;
        case 3:
            console.log('three');
            break;
        case 4:
            console.log('four');
            break;
        case 5:
            console.log('five');
            break;
        case 6:
            console.log('six');
            break;
        case 7:
            console.log('seven');
            break;
        case 8:
            console.log('eight');
            break;
        case 9:
            console.log('nine');
            break;

        default:
            console.log('not a digit');
            break;
    }
}


solve('2');
solve('1');
solve('0');
solve('5');
solve('hi');
solve('9');
solve('10');

function solve(args) {
    var a = +args[0];
    var b = +args[1];
    var c = +args[2];
    var x1 = 0;
    varx2 = 0;
    if (a !== 0) {
        if ((b * b - 4 * a * c) > 0) {
            x1 = ((-b - Math.sqrt((b * b - 4 * a * c))) / (2 * a));
            x2 = ((-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a));
            if (x1 < x2)
                console.log('x1=' + x1.toFixed(2) + '; x2=' + x2.toFixed(2));
            else console.log('x1=' + x2.toFixed(2) + '; x2=' + x1.toFixed(2));
        }
        if ((b * b - 4 * a * c) === 0)
            console.log('x1=x2=' +
                ((-b) / (2 * a)).toFixed(2));
        if ((b * b - 4 * a * c) < 0) console.log('no real roots');
    }

}
solve(['2', '5', '-3']);
solve(['-1', '3', '0']);
solve(['-0.5', '4', '-8']);
solve(['5', '2', '8']);
solve(['0.2', '9.572', '0.2']);
function solve(args) {
    var a = +args[0];
    var b = +args[1];
    var c = +args[2];
    var d = +args[3];
    var e = +args[4];
    var max = 0;

    if (a < b) {
        if (c > b) max = c;
        else max = b;
    }
    else{
        if(c>a) max = c;
        else max =a;
    }
    if(max<d){
        if(d<e) max=e;
        else max=d;
    }
    else{
        if(max<e) max=e;
    }
    return max;

}
console.log(solve(['5', '2', '2', '4', '1']));
console.log(solve(['-2', '-22', '1', '0', '0']));
console.log(solve(['-2', '4', '3', '2', '0']));
console.log(solve(['0', '-2.5', '0', '5', '-5']));
console.log(solve(['-3', '-0.5', '-1.1', '-2', '-0.1']));
*/


function solve(args) {
	var number = +args;
	var result = '';
	var onesLow = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	var onesUp = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
	var tensLow = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',];
	var tensUp = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety',];
	var teensLow = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	var teensUp = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];

	var hundreds = number / 100 | 0;
	var tens = (number / 10) % 10 | 0;
	var ones = number % 10;

	if (hundreds === 0 && tens === 0) {
		result = onesUp[ones];
	} else if (hundreds === 0) {
		if (tens === 1) {
			result = teensUp[ones];
		} else {
			if (ones === 0) {
				result = tensUp[tens];
			}
			else {
				result = tensUp[tens] + ' ' + onesLow[ones];
			}
		}
	} else {
		if (tens === 0 && ones === 0) {
			result = onesUp[hundreds] + ' hundred';
		} else if (ones === 0) {
			result = onesUp[hundreds] + ' hundred' + ' and ' + tensLow[tens];
		} else if (tens === 0){
			result = onesUp[hundreds] + ' hundred' + ' and ' + onesLow[ones];
		} else {
			if (tens === 1 && ones >= 1) {
				result = onesUp[hundreds] + ' hundred' + ' and ' + teensLow[ones];
			} else {
				result = onesUp[hundreds] + ' hundred' + ' and ' + tensLow[tens] + ' ' + onesLow[ones];
			}
		}
	}

	return result;
}
console.log(solve('123'));
console.log(solve('930'));
console.log(solve('10'));
console.log(solve('713'));
console.log(solve('0'));
