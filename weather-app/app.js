console.log('Starting');

setTimeout(() => {
    console.log('2 second loading')
}, 2000);

setTimeout(() => {
    console.log('0 second timer');
    a++;
}, 0)



console.log('Stopping');
