// const fizzBuzz = (number) => {
//     if (number % 15 === 0) {
//         console.log('Fizzbuzz');
//     } else if (number % 3 === 0) {
//         console.log('Fizz');
//     } else if (number % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(number);
//     }
        
// }

const fizzbuzz = (number) => {
    if (number % 15 === 0) {
    return 'Fizzbuzz';
    } else if (number % 3 === 0) {
        return 'Fizz';
    } else if (number % 5 === 0) {
        return 'Buzz';
    } else {
        return number;
    }
}

module.exports = fizzbuzz;