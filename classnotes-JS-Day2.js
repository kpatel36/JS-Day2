let animals = ['Fennec Fox', 'Honey Badger', 'Echidna', 'Siberian Tiger'];

// adding and removing values from an array
// Array.push() same thing as python's list.append()
// adding to the end of the list
console.log(animals);
animals.push('Osprey');
console.log(animals);

// Array removal in javascript is more complicated
// there is no direct removal by value
// .pop() always removes the last element from the array
console.log(animals);
animals.pop()
console.log(animals);


console.log('\n\nfor Each:')
animals.forEach((animal) => {console.log(animal + '!')});
animals.push('Platypus', 'Tibetan Fox', 'Chinchilla', 'Sea Otter'); 

// array.push() lets you push more than one value more than one value at once, unlike like python list.append()

/* ARRAY METHODS
.join(), .slice(), .search()
*/

//.slice() is just like python's list slicing [:] except we can't specify a step
// starting value is inclusive, ending value is exclusive
console.log(animals);
console.log(animals.slice(3)); // start at index 3 and go to end of array
console.log(animals.slice(0,4)); // start of the array to the fourth index

//.join() is just like python's join except the input order is flipped
// convert from an array to a string
// python: separator.join(list)
// JS:array.join(separator)
let animals_string = animals.join(', '); // comma-separated print out of list without '' and brackets

// .indexOf()
// is like python's index function (.index())
// searches for a value in an array, returns the index of that value
// will return '-1' if value is not present in the array
console.log(animals.indexOf('Chinchilla'));
console.log(animals.indexOf('Red Panda'));

//string.search()
// searches the string for a substring or character
// returns the starting index of the character/substring
let strtosearch = 'Fennec Fox'
console.log(strtosearch.search('Fox'));
console.log(strtosearch.search('c'))

// Another conditional structure:
// switch case statement
switch(animals[5]){
    case 'Fennec Fox':
        console.log('This is a Fennec Fox');
        break;
    case 'Human':
        console.log('This is a human');
        break;
    case 'Penguin':
        console.log('This is a penguin');
        break;
    default:
        console.log('I dont know this animal');
        

}