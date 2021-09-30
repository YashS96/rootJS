//Netwrok call to API #1
setTimeout(()=>{console.log(`API-1`)},3000);

//----------------------------------------------------------------------

//Network call to API #? 
//(takes same time to exe as API 1 but is sent out of the
//callStack first, hence First in callback queue)
setTimeout(() => {
    console.log('wait it out man, i\'m in the callback queue first!!')
    for(let i=0;i<10000000;i++);
    console.log(`API ?`) 
 }, 0);

//----------------------------------------------------------------------

// Netwrok call to API #2

setTimeout(() => {          
   console.log(`API-2`) 
}, 0);                  

//----------------------------------------------------------------------

for(let i=0;i<1000;i++)
    console.log(i);

// 0-999->'API ?'->'API-2'->'API 1'

//Promises
const network_call = new Promise((res,rej)=>{ // Promise = pending
    //DB or n/w call...
    setTimeout(() => {
        //fetch rows etc...
        let i=0;
        for(i=0;i<1000;i++);
        if(i==1000) res(i); // Pending ->fulfilled ==> call then
        else rej(i);       // Pending->rejected ==> call catch
    }, 3000);
});                        // Promise = Settled

//site consuming the promise

network_call.then((n)=>{console.log(`${n} is equal to 1000`)}) // then(callback function) 
            .catch((n)=>{console.log(`${n} is not equal 1000`)});//and retuns a Promise so they can be chained

            for(let i=0;i<1000;i++);
console.log('Look ma! Im doing some work meanwhile!!')

//-------------------------------------------------------------------------------

const p1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('Success #1');    
    }, 3000);
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('Success #2');    
    }, 1000);
})

const p3=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('Success #3');    
    }, 1000);
})

Promise.all([p1,p2,p3]).then((messages)=>{messages.forEach(element => {
    console.log(`Promise `+element)
});})
//fastest wins the race
Promise.race([p1,p2,p3]).then((message)=>{console.log(`RACE WINNER `+message)})

//Async (Syntactical Sugar)--> Makes async code readable and appear sync

let asyncFunc=async ()=>{
    try{
        const firstCall=await p1;
        console.log(`Async `+firstCall)
        const secondcall=await p2;
        console.log(`Async `+secondcall)
        console.log(`blah!!`)
        const thirdcall=await p3;
        console.log(`Async `+thirdcall)
    }
    catch(err){
        console.log(`Oops!`)
    }

}
asyncFunc()