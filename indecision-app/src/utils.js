
console.log('utils.js is running');
const square = (x) => x * x;
const add = (a,b) => a + b;

// these are the named export format.
export {square, add};

// instead of the export statement above we could also define
// the export directly in the function definition like this.

// this is an inline export
// export const square = (x) => x * x;