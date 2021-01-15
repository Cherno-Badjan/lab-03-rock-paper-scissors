export function didUserWin(userRps, computerRps) {
    if (userRps === computerRps) {
        return 'draw';
    }
    if (userRps === 'Scissors' && computerRps === 'Paper') {
        return 'win';
    }
    if (userRps === 'Rock' && computerRps === 'Scissors') {
        return 'win';
    }
    if (userRps === 'Paper' && computerRps === 'Rock') {
        return 'win';
    } else {
        return 'lose';
    }

}