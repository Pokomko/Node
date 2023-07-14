console.log('Starting');

let a = 1;

setTimeout(() => {
    console.log('2 second loading' + a)
}, 2000);

//a++;

setTimeout(() => {
    console.log('0 second timer' + a);
    a++;
}, 0)



console.log('Stopping');

