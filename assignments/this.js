/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/global.  If this is in the global scope it is tied to the global/window object.
* 2. Implicit binding occurs when this is tied to the object it is called from.  The object to the left of the dot that is to the left of this is the object bound to this.
* 3. Explicit binding occurs when the call or apply methods are used.
* 4. New binding occurs when new is used to call a constructor function to instatiate.  This will then apply to the instance calling the function.
*
* write out a code example of each explanation above
*/
//1:
console.log(this);
//2:
const person = {
    name: 'bobo',
    speak() {
        console.log(`Hello from ${this.name}.`)
    }
};

person.speak();
//3:
const dude = {
    fullName: function() {
    return `${this.firstName} ${this.lastName};`
}
};

const jack = {
    firstName: 'jack',
    lastName: 'Bower'
};
console.log(dude.fullName.call(jack));
//4:
function Animal(attr) {
    this.type = attr.type;
    this.name = attr.name;
    this.sound = attr.sound;
}
Animal.prototype.speak = function() {
    console.log(`${this.name}, a ${this.type}, sais, ${this.sound}`);
}

const dog = new Animal({
    type: 'dog',
    name: 'jerry',
    sound: 'woof woof',
});
dog.prototype = Object.create(Animal.prototype);
dog.speak();

// Principle 1

// code example for Window Binding

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding