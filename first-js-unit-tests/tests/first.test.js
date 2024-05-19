import { describe, test, it, expect } from 'vitest';
import { fizzBuzz, max, factorial } from '../main';

// Typically testes are desinged with AAA pattern. Ex:
// Arrange: Turn on the TV
// Act: Press the power button
// Assert: Verify TV is off
describe('max', () => {
    it('Should return the first argument if it is greater', () => {
        // Arrange
        const a = 10;
        const b = 5;
        // Act
        const result = max(a, b);
        // Assert
        expect(result).toBe(10);
    });

    it('Should return the second argument if it is greater', () => {
        expect(max(5, 10)).toBe(10);
    });

    it('Should return the first argument if both are equal', () => {
        expect(max(5, 5)).toBe(5);
    });
})

describe('fizzBuzz', () => {
  it('Should return the string FizzBuzz if the arg is divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
  })
  it('Should return the string Fizz if the arg is only divisible by 3', () => {
    expect(fizzBuzz(9)).toBe('Fizz')
  })
  it('Should return the string Buzz if the arg is only divisible by 5', () => {
    expect(fizzBuzz(10)).toBe('Buzz')
  })
  it('Should return the arg as a String if the arg is not divisible by 3 or 5', () => {
    expect(fizzBuzz(11)).toBe('11')
  })
})

describe('factorial', () => {
    it('Should return 1 if the arg is 0', () => {
        expect(factorial(0)).toBe(1)
    })
    it('Should return 1 if the arg is 1', () => {
        expect(factorial(1)).toBe(1)
    })
    it('Should return 24 if the arg is 4', () => {
        expect(factorial(4)).toBe(24)
    })
    it('Should return undefined if given a negative number', () => {
        expect(factorial(-2)).toBeUndefined()
    })
  })
