// forEach() map() filter() reduce()
let numbers=[1,2,33,4,5,6,7,56,8,8,99];

//forEach() performs logic for Each element of the array via callback 
// No return value in the callback

numbers.forEach((item, index, array) => console.log(`pos: ${index}`, `item :${item}`));

//map() creates a copy of array (requires a return value in the callback)

let indexs = numbers.map((item, index, array) => {
    return index;
})
console.log(indexs);

//filter() -> filters the elements into a new array depending on condition 
//retrun value for callback requires a desicion i.e boolean value
let odd = numbers.filter((item, index, array) => {
    return item & 1; // bitwise & usage to find odd nums-> 0 1 10 11 100 101 110 111 1000
}) 
let even = numbers.filter((item, index , value) => {
    return 1 -(item & 1);
})

console.log(even)
console.log(odd)

//reduce() -> taking an array and reducing it to a single value
// takes an initial value
let sum = numbers.reduce((current, item) => {
     current+=item;
     return current;
},0)

console.log(sum)