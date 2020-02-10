class Person {

    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
        console.log(name);
    }
    getGreeting() {
        // return 'Hello ' + this.name;
        return `Hi. I am ${this.name} I'm ${this.age}`;  // ES6 template with backticks
    }
    getDescription() {
        return `I'm ${this.name}. I'm ${this.age}`;
    }
}

class Traveler extends Person {
    constructor(name, age, home) {
        super(name, age);
        this.home = home;
    }
    getGreeting() {
        let grt = super.getGreeting();
        if (!! this.home) {
            grt += ` I'm from ${this.home}`;
        }
        return grt;
    }
}
class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !! this.major;
    }
    getDescription() {
        return `My major is ${this.major}`;
    }
}
const me = new Person('John Pyeatt', 57);
console.log(me.getGreeting() + " " + me.getDescription());
const other = new Person();
console.log(other.getGreeting());
const sam = new Student('Sam', 22, 'Comp Sci');
console.log(sam + " " + sam.hasMajor() + " " + sam.getDescription());
const gwen = new Traveler('Gwen', 20, 'Mount Horeb');
console.log(gwen + " " + gwen.getGreeting());
const betsey = new Traveler('Betsey', 55, undefined);
console.log(betsey + " " + betsey.getGreeting());