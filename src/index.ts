type T = number | string;

function cartesian_product(sets: T[][]): T[][] {
  const _sets = sets.reverse(); //反转数组，模拟栈，子元素不需要位移
  let results: T[][] = (_sets.pop() ?? []).map((item) => [item]);

  function combine(a: T[][], b: T[][]) {
    const lastElement = a.pop() ?? [];
    const tmpResults: T[][] = [];
    for (const itemb of b) {
      for (const itema of lastElement) {
        tmpResults.push(itemb.concat(itema));
      }
    }
    results = tmpResults;
    if (a.length > 0) combine(a, tmpResults);
  }

  combine(_sets, results);
  return results;
}

export default cartesian_product;
