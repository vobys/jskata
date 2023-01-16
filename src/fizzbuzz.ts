const fizzBuzz = number => {
  const first = number % 3 === 0 ? 'Fizz' : ''
  const second = number % 5 === 0 ? 'Buzz' : ''

  if (first === '' && second === '') {
    return number
  }

  return first + second
};

export default fizzBuzz;
