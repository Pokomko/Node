console.log('Starting');

let a = 1;

setTimeout(() => {
    console.log('2 second loading' + a)
}, 2000);

//a++;

setTimeout(() => {
<<<<<<< HEAD
    console.log('0 second timer');
=======
    console.log('0 second timer' + a);
>>>>>>> 9b22c26b9278db94c5c21edd383821a9b05954a1
    a++;
}, 0)



console.log('Stopping');

