// IMPORT MODULES under test here:
import { getRandomThrow } from '../get-random-throw.js';
import { didUserWin } from '../utils.js';

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
    const expected = 'Scissors';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow(3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('return draw if userRps = computerRps', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'draw';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('Paper', 'Paper');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('return win if userRps = Scissors and computerRps= Paper', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'win';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('Scissors', 'Paper');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('return lose if userRps = Scissors and computerRps= Rock', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'lose';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('Scissors', 'Rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
