describe('jest matcher', () => {
  test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });

  test('object assignment', () => {
    const data = { one: 1 };
    const data2 = { one: 1 };
    // console.log('data === {one: 1}', data === data2);
    expect(data).toEqual(data2);
    expect(data).not.toBe(data2);
  });

  test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    // console.log('value', value);
    //expect(value).toBe(0.3);           This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
  });
});
