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
    expect(fizzBuzz(3)).toEqual('Fizz');
    expect(fizzBuzz(6)).toEqual('Fizz');
    expect(fizzBuzz(9)).toEqual('Fizz');
  });

  it('should returns \'Buzz\' if divides evenly with 5', () => {
    expect(fizzBuzz(5)).toEqual('Buzz');
    expect(fizzBuzz(10)).toEqual('Buzz');
    expect(fizzBuzz(20)).toEqual('Buzz');
  });

  it('should returns \'FizzBuzz\' if divides evenly with 3 and 5', () => {
    expect(fizzBuzz(15)).toEqual('FizzBuzz');
    expect(fizzBuzz(30)).toEqual('FizzBuzz');
    expect(fizzBuzz(45)).toEqual('FizzBuzz');
  });
});
