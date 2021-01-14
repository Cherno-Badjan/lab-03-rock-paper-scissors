export function didUserWin(userRPS, computerRps) {
    if (userRPS === computerRps) {
        return 'draw';
    }
    if (userRPS === 'Scissors' && computerRps === 'Paper') {
        return 'You win';
    }
    if (userRPS === 'Rock' && computerRps === 'Scissors') {
        return 'You win';
    }
    if (userRPS === 'Paper' && computerRps === 'Rock') {
        return 'You win';
    } else {
        return 'You lose';
    }

}