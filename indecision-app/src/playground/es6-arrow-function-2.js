// arguments object is no longer bound with arrow functions.

const add = function(a,b) {
    console.log(arguments);  // arguments is an array which is always available
                             // inside a ES5 function. NOTE: The arguments array is NOT
                             // available if you define your arrow function anonymously.
    return a+b;
}

console.log(add(55,1));

// 'this' keyword is no longer bound.
const user = {
    name: 'John',
    cities: ['Madison', 'Memphis', 'Menomonee Falls'],
    printPlacesLived: function() {
        console.log("name " + this.name);
        console.log("cities " + this.cities);
        // defining this function using arrow syntax because if you try to define
        // the function as an ES5 function, the 'this' keyword will be out of scope.
        this.cities.forEach((city) => {
            console.log(this.name + " " + city);
        });
    },
    printPlacesLived2 () {
        console.log("name " + this.name);
        console.log("cities " + this.cities);
        // defining this function using arrow syntax because if you try to define
        // the function as an ES5 function, the 'this' keyword will be out of scope.
        this.cities.forEach((city) => {
            console.log("SECOND " + this.name + " " + city);
        });
    },
    printPlacesWithMap() {
        return  this.cities.map((city) => 'MAP: ' + city);
    }
}
user.printPlacesLived();
user.printPlacesLived2();
console.log(user.printPlacesWithMap());

const multiplier = {
    numbers: [4, 6, 8],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((x) => (x * this.multiplyBy));
    }
};
console.log(multiplier.multiply());