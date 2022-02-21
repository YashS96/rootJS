//1 . method chaining
let calc={
    total: 0,
    add: function (val) {
        this.total+=val;
        return calc;
    },
    subtract: function (val) {
        this.total-=val;
        return calc;
    },
    multiply: function (val) {
        this.total*=val;
        return calc;
    }
}

console.log(calc.add(10).multiply(5).subtract(30).add(10).total)

//2. Function call chaning
function add(a){
    return function c(b){
       if (b == null)
       return a;
       else
       return add(a+b)
    }
}

console.log(add(5)(6)(7)())

//3. Memoization
//storing the sol(s) for compuatationally heavy operations
// use cases: frequently used Function calls
//            compuatationally heavy operations
//            DP problems with recursive tracks or exhaustive searching


// function caching (a,b) {
//     //use a hash table
//     // let a =[];
//     // let b=[];
//     //instead of using 2 arrays use obj as a Hash Table: key as
//     // a unique value composed of the 2 numbers in some way and value as 'result' 
//     let key=`${a}-${b}`;
//     let obj={}
    
//     if(found_in_a){
//         return b[index_a]
//     }
//     else{
//         a.push({v,b});
//             //code
//         b.push(result)
//     }
// }

function Memoization(a,b){
    const memo={}
    let key=`${a}-${b}`;

    if(memo[key])
        return  memo[key]
    else{
        let value=1;
        for(let i=0;i<b;i++)
            value*=a;
        //return value
    }
}
let start = Date.now();
Memoization(9999,8888)
Memoization(9999,8888)
Memoization(9999,8888)
Memoization(9999,8888)
Memoization(9999,8888)
Memoization(9999,8888)
let end = Date.now();
console.log(end-start);


let start1 = Date.now();
Memoization(99999499,8888888)
Memoization(99994999,8888888)
Memoization(99699999,8888888)
Memoization(99998999,8888888)
Memoization(99999979,8888888)
let end1 = Date.now();
console.log(end1-start1);
