const countdownTimer = require('../src/countdown');

test('countdownTimer should return a timer ID', () => {
    const timerId = countdownTimer(2);
    expect(typeof timerId).toBe('number');

    // Stop the timer immediately to prevent logging after test
    clearInterval(timerId);
});
