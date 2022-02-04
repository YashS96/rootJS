"use strict"
//usage
//function parameters and return values
let obj={
    id: 1,
    fname: `Yash`,
    lname: `Shrivastava`
}

function f({id,fname='First Name',lname='Last Name'}){
    console.log(id)
    return [id,fname,lname];

}

let [,name,surname] = f(obj)//ignoring some values
console.log(name,surname)
//import/export
// //pqr.js
// import funcA, { x, f as y } from './xyz'


// //xyz.js
// export const x=2;
// export function f(){
//     return 4;
// }
// export default function a(){

// }
//---------------------------------------------------
//The idea
let a=[1,2,3,4,'yash','Nope']
let [x,y, ...z] = a;//Array destructuring uses position
console.log(x,y,z[2])
console.log(z)


let {id,name1='Blank',fname} = obj;// Object destructring needs sane identifiers
console.log(id,name1,fname)