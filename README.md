# 求笛卡尔积

## install
```bash
pnpm add https://github.com/alterass/cartesian_product.git
```
## use
```javascript
import cartesian_product from 'cartesian_product';
const result = cartesian_product([
  1,2,3,
  'a','b'
]);
console.log(result);
// output:
// [
//   [ 1, 'a' ],
//   [ 1, 'b' ],
//   [ 2, 'a' ],
//   [ 2, 'b' ],
//   [ 3, 'a' ],
//   [ 3, 'b' ]
// ]
```
