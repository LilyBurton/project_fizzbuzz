// const add = require('./add');

// describe('add', () => {
//     it('adds 2 and 2', () => {
//         expect(add(2, 2)).toBe(4);
//       });
//     });
const fizzbuzz = require('./fizzbuzz');

describe('Fizz', () => {
    it('modulo 3 === 0', () => {
        expect(fizzbuzz(3)).toBe('Fizz');
    });
});

describe('Buzz', () => {
    it('modulo 5 === 0', () => {
        expect(fizzbuzz(5)).toBe('Buzz');
    });
});

describe('Fizzbuzz', () => {
    it('modulo 15 === 0', () => {
        expect(fizzbuzz(15)).toBe('Fizzbuzz');
    });
});

describe('number', () => {
    it('number', () => {
        expect(2).toBe(2);
    });
});