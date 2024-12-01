const filter = require('./../src/filter');

test('filter out numbers that are odd', () => {
    const array = [1, 2, 3, 4]
    result = (filter(array, num => num % 2 ===1));
    expect(result).toEqual([1,3])
});
