const square = function(x) {
    return x * x;
};
// arrow functions are always anonymous. So you have to assign it to a constant.
const squareArrow = (x) => {
    return x * x;
};

// arrow syntax without a body because the only thing we are doing is a return.
// this function is identical to squareArrow above.
const squareArrow2 = (x) => x * x;

console.log("SQUARE " + square(8));
console.log("SQUAREArrow " + squareArrow(7));
console.log("SQUAREArrow2 " + squareArrow(9));

const getFirstName = (name) => name.split(' ')[0];
console.log("First name " + getFirstName('John Pyeatt'));