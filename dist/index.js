function cartesian_product(sets) {
    var _a;
    const _sets = sets.reverse(); //反转数组，模拟栈，子元素不需要位移
    let results = ((_a = _sets.pop()) !== null && _a !== void 0 ? _a : []).map((item) => [item]);
    function combine(a, b) {
        var _a;
        const lastElement = (_a = a.pop()) !== null && _a !== void 0 ? _a : [];
        const tmpResults = [];
        for (const itemb of b) {
            for (const itema of lastElement) {
                tmpResults.push(itemb.concat(itema));
            }
        }
        results = tmpResults;
        if (a.length > 0)
            combine(a, tmpResults);
    }
    combine(_sets, results);
    return results;
}
export default cartesian_product;
