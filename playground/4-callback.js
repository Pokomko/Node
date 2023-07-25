// setTimeout(() => {
//     console.log('2 Second Timer ');
// }, 2000)

const { setTimeout } = require("timers")

// const names = ['s', 'saaaa', 'aads'];
// const shortName = names.filter((name) => {
//     return name.length <= 4
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longtitude: 0,
//         }
    
//         callback(data)
//     }, 2000);
// };

// geocode('Minsk', (data) => {
//     console.log(data)
// });

const add = (a, b, callback) => {
    console.log('before');
    setTimeout(() => {
        callback(a + b);
    },2000);
    console.log('b');
}

add(1, 4, print = function(arg) {
    console.log(arg)
})
console.log('bef');

