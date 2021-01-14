// IMPORT MODULES under test here:
import { getRandomThrow } from '../get-random-throw.js';

const test = QUnit.test;

test('return rock if rockPaperScissors is 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'Rock';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow(1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('return paper if rockPaperScissors is 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'Paper';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow(2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('return paper if rockPaperScissors is 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'Rock';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow(2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
