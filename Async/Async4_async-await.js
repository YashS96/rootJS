// const p1=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve('Success #1');    
//     }, 3000);
// })

// const p2=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve('Success #2');    
//     }, 1000);
// })

// const p3=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve('Success #3');    
//     }, 1000);
// })

// //Async (Syntactical Sugar)--> Makes async code readable and appear sync

// let asyncFunc=async ()=>{
//     try{
//         const firstCall=await p1;
//         console.log(`Async `+firstCall)
//         const secondcall=await p2;
//         console.log(`Async `+secondcall)
//         console.log(`blah!!`)
//         const thirdcall=await p3;
//         console.log(`Async `+thirdcall)
//     }
//     catch(err){
//         console.log(`Oops!`)
//     }

// }
// asyncFunc()
