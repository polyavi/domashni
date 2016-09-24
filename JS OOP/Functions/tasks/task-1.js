function solve(arr) {
        let sum = 0;
        if (arr) {
            if (arr.length > 0) {
                for (let i = 0; i < arr.length; i += 1) {
                    if (typeof(arr[i]) === Number || Number(arr[i])) {
                        sum += Number(arr[i]);
                    } else throw new Error('Not a number');
                }
                return sum;

            } if(arr.length === 0){
                return null;
            }
        } else {
            throw new Error('No array is given');
        }
}
 //var sum = solve();
 //sum([1,2,3]);
 //sum([]);
 //sum(['1','2']);
 //sum();
module.exports = solve;
