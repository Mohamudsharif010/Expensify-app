// const person = {
//     name: 'Mohamud',
//     age: 24,
//     location: {
//         city: 'Nairobi',
//         temp: 60
//     }
// };

// const {name = 'Anonymous', age} = person;
// console.log(`${name} is ${age} years old.`);

// const {city, temp: temperature} = person.location;
// if(city && temperature) {
//     console.log(`It's ${temperature}°C in ${city}`);
// };

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//        // name: 'Penguin'
//     }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

//
// Array Destructuring
//

// const address = ['1339 Amana Estate', 'South C', 'Nairobi', '0700'];
// const [, , city] = address;
// console.log(`You are in ${city} `);

const Item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = Item;
console.log(`A Medium ${itemName} costs ${mediumPrice}`);