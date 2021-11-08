// //Promises-- Code here still exe in Single thread??

//Blocking Vs  Async Blocking  Vs Asyc

// for(let i=0;i<900000000;i++);

//     console.log('Blocking code: Hello!')
//-------------------------------------------------

const p1=new Promise((res, rej)=>{

    for(let i=0;i<900000000;i++);

    res('Hello!')

})

p1.then(hello=>console.log(`Deceptive Async: ${hello}`))

const p3=new Promise(res=>{

    for(let i=0;i<900000000;i++);

    res('Hello!')

})

p3.then(hello=>console.log(`Deceptive 2 Async: ${hello}`))


const p2=Promise.resolve().then((res)=>{
    for(let i=0;i<900000000;i++);

    return 'Hello!'
})

p2.then(hello=>console.log(`Async: ${hello}`))

console.log('HI')
//----------------------------------------------------------------------
// const network_call = new Promise((res,rej)=>{ // Promise = pending
//     //DB or n/w call...
//     setTimeout(() => {
//         //fetch rows etc...
//         let i=0;
//         for(i=0;i<1000;i++);
//         if(i==1000) res(i); // Pending ->fulfilled ==> call then
//         else rej(i);       // Pending->rejected ==> call catch
//     }, 3000);
// });                        // Promise = Settled

// //site consuming the promise

// network_call.then((n)=>{console.log(`${n} is equal to 1000`)}) // then(callback function) 
//             .catch((n)=>{console.log(`${n} is not equal 1000`)});//and retuns a Promise so they can be chained

//             for(let i=0;i<1000;i++);
// console.log('Look ma! Im doing some work meanwhile!!')

// //-------------------------------------------------------------------------------

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

// Promise.all([p1,p2,p3]).then((messages)=>{messages.forEach(element => {
//     console.log(`Promise `+element)
// });})
// //fastest wins the race
// Promise.race([p1,p2,p3]).then((message)=>{console.log(`RACE WINNER `+message)})


// //----------------------------
// //Observables
// //Promise + Events 
// //aren't the best solution as Promises can be resolved once and it'll be settled
// //We can create an event handler and create a new promise everytime we do an Onclick event 
// //but there's a problem...
// //Promise Consumption and Promise Creation has to be in 1 place, you cant consume it anywhere else...

// let button= document.querySelector('#button');
// button.addEventListener('click',()=>{
//     //Promise Creation
//     var p= new Promise((res,rej)=>{
//         let x=Math.round(Math.random()*100)+1;
//         if(x%2==0)
//             res('SUCCESS!!')
//         else    
//             rej('FAIL!!')
//     })
//     //Promise Consumption
//     p.then(msg=>console.log(msg))
//  .catch(msg=>console.log(msg))
// })


// //Streams of Events
// //

// //(Reactive Programming) Observables
// //Promise vs Observables

//Microtask Queue Vs Callback Queue


