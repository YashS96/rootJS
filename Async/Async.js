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