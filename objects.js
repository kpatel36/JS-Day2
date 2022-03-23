/*  JavaScript Objects!

- JS is not traditionall an object oriented programming language, but it is possible to write Object oriented javascript code
- two main types of object - they are related but slightly diff to create

1. the Object - aka the equivalent to a python dictionary and json data 
2. Object prototypes - the equivalent to a python object class
    -  essentially making a class-based object although in JS that can be done with a class or a function
*/

// Simple object
// just like a python dictionary except keys (if strings) dont need to be in quotation marks
let animal = {
    name: 'Fennec Fox',
    age: 14,
    color: 'sand',
    habitat: 'desert'
};

// access PROPERTIES  (what would be key value pairs aka attributes)
// can be done either of the two pythonic ways
// bracket notation
console.log(animal['name']);
console.log(animal['age']);

// dot notation
console.log(animal.name);
console.log(animal.age);


// adding a key-value pair is the same
animal['paws'] = 4;
animal.ears = 'large';


//deleting
delete animal.ears;

console.log(animal);

// complex JS object
let animals = {
    foxes: {
        'Fennec Fox': {
            habitat: 'desert',
            food: ['scorpions', 'mealworms', 'small rodents']
        },
        'Tibetan Fox': {
            habitat: 'steppe'
        }
    },
    whales: ['blue whale', 'orca', 'sperm whale', 'humpback whale', 'beluga'],
    humans: 'Jack'
}


// access 'scorpions' from Fennec Fox's food
console.log(animals['foxes']['Fennec Fox']['food'][0]);
// same thing but with dot notation where possible
console.log(animals.foxes['Fennec Fox'].food[0]);

/* Looping with JS objecs
    much the same as looping with a python dictionary
*/

// just like python for in loop in a dictionary
for (property in animal){
    // must use bracket notation here - want animal property called the value of the property variable not the animal property called 'property'
    console.log(property, animal[property]);
}

/* just like python's dict.keys() and dict.values()
we have JS Object.keys(<object>) and Object.values(<values>)
gives us an array of either the keys(properties) or values from an object
*/

console.log(Object.keys(animal));
console.log(Object.values(animal));

// looping through object values
let vals = Object.values(animal);
for (let i=0; i<vals.length; i++){
    console.log(vals[i]);
}



console.log('\n\nCustom Object Prototypes:')
/* Custom objects in JS: much like Python's class-based objects
2 ways to write them: 
*/

//1. function-based object - least commonly used nowadays - ES5 syntax
    // create a function
    // whatever inputs were accepted were like the input function in a python class 
    // instead of using self, this method uses 'this' to name attributes of class
    // 'this' in JS = self in Python

function Dog(name, breed, color, paws=4){
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.paws = paws;

    // object method within the function - create a function inside this function
    // this could be an arrow function
    this.printInfo = () => {
        console.log(`${this.name} is a ${this.breed} with ${this.paws}. They are ${this.color}`);
    };
};

// creating an instance of our Dog - need the new keyword
// let <var_name> = new <object_name>(<parameters>);
let my_dog = new Dog ('Sir Henry James of Pailey', 'English Springer Spaniel', 'black and white')
my_dog.printInfo();

//2. class based object

// class based object
class DogC {
    constructor(name, breed, color, paws=4){
        this.name = name;
        this.breed = breed;
        this.color = color;
        this.paws = paws;         
    }

    printInfo(){
        console.log(`${this.name} is a ${this.breed} with ${this.paws} paws. They are ${this.color}`);
    }

};

let class_based_dog = new Dog('Sir Wesley Charles of Nottingham', 'English Springer Spaniel', 'black and white')
class_based_dog.printInfo();

/* JavaScript Inheritence
inheritence is an object-oriented programming concept
so JS inheritance is usually used with our OOP-like syntax aka the class-based*/

class Springer extends Dog{ // 'extends' is how to show a class inherits attributes of a parent class
    constructor(name, breed, color, paws=4){
        super(name, breed, color, paws)
        this.jumps= 'high and often'
        this.fast = 'fast'
    }

    zoom(){
        this.fast = 'very ' + this.fast;
    };
}

let a_springer = new Springer('Tiger', 'English Springer Spaniel', ' liver and white')
a_springer.printInfo()
a_springer.zoom()
a_springer.zoom()
a_springer.zoom()
a_springer.zoom()
console.log(a_springer.fast)
//----------------------------------------------------------------------------------------------------------------


// CALLBACKS
/*
- a callback is a function that runs while/after another function runs
- all JavaScript functions are also objects - we can pass functions as parameters or arguments into other functions
        thus making the execution of one function part of the execution of another function
        or the result of the execution of another function
- functions that are passed other functions as parameters are called 'higher-order functions'
    - and any function passed as input to another function is a 'callback function'

- why do we need this and how does it differ from python?
    - while a callback func is possible and used in python (map,filter, custom decorators, etc)
    - it is not as commonly used as in JS

JS does not execute in a linear single-thread manner aka computer doesnt execute in a linear single-thread manner
aka computer does not read code from top down stopping to do any work that needs to be done along the way like python does
JS will continue to read code while passing any tasks that need to be done off to the Event Loop
    - the JS event loop is responsible for processing functions etc. anything that happens outside of the main thread of execution
JS is an event-driven language - instead of waiting for a response to an initial action before moving on, 
JS will continue to listen for new events/actions while it processes the previous events in the background
this can lead to order of execution issues
*/

let first = () => {
    console.log(1);
}

let second = () => {
    console.log(2); 
}

first();
second();

// if second takes less time to run, results of second may appear eariler than it should in the order

/* 
The potential solution to the event loop execution issues is callbacks
tell function it should run as a callback to another function
if there us some action/event required to progress the initial function, callback will wait as it's execution occurs within the execution of the higher order function
*/

// this example will only work through the browser
let attendClass = (subject, callback) => {
    alert(`Attending ${subject} class `) // example will only run through browswer because of alert{}
    callback(); 
}

let endClass = () => {
    console.log('Class is over!');
}


console.log('\n\nArray Methods Cont:');
/*
An introduction to callback functions with:
.map(), .filter(), .reduce()
*/

let mcFunc = (player) => {console.log(`${player} plays for Manchester City in the English Premier League.`)}

// the role of map is to execute a callback function on each item within an array
let players = ['Kevin De Bruyne', 'Phil Foden', 'Raheem Sterling', 'Rodri', 'Joao Cancelo', 'Ilkay Fences']



// the role of filter is to filter an array based on a callback function

// role of reduce is to boil down an array to a single value based on a callback func
