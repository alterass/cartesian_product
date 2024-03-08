import cartesian_product from "../dist/index.js";

const result = cartesian_product([
  [1, 2, 3],
  ["a", "b"],
]);

console.log(result);
//output
//  [
//   [ 1, 'a' ],
//   [ 1, 'b' ],
//   [ 2, 'a' ],
//   [ 2, 'b' ],
//   [ 3, 'a' ],
//   [ 3, 'b' ]
// ]
