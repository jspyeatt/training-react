
console.log('utils.js is running');
const square = (x) => x * x;
const add = (a,b) => a + b;
const subtract = (a,b) =>  a - b;

// these are the named export format.
// You can only have 1 default export.
export {square, add, subtract as default};

// instead of the export statement above we could also define
// the export directly in the function definition like this.

// this is an inline export
// export const square = (x) => x * x;