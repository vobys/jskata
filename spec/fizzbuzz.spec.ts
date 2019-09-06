import fizzBuzz from 'src/fizzbuzz';

describe('FizzBuzz Function', () => {

  beforeAll(() => {
  });

  beforeEach(() => {
  });

  afterEach(() => {
  });

  afterAll(() => {
  });

  it('should returns the \'number\' if not divides evenly with 3 or 5', () => {
    expect(fizzBuzz(1)).toEqual(1);
    expect(fizzBuzz(2)).toEqual(2);
    expect(fizzBuzz(4)).toEqual(4);
  });

  it('should returns \'Fizz\' if divides evenly with 3', () => {
    fail('Add tests here...');
  });

  it('should returns \'Buzz\' if divides evenly with 5', () => {
    fail('Add tests here...');
  });

  it('should returns \'FizzBuzz\' if divides evenly with 3 and 5', () => {
    fail('Add tests here...');
  });
});
