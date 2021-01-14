export function didUserWin(userRPS, computerRps) {
    if (userRPS === computerRps) {
        return 'draw';
    }
    if (userRPS === 'Scissors' && computerRps === 'Paper') {
        return 'win';
    }
    if (userRPS === 'Rock' && computerRps === 'Scissors') {
        return 'win';
    }
    if (userRPS === 'Paper' && computerRps === 'Rock') {
        return 'win';
    } else {
        return 'lose';
    }

}