const countdownTimer = require('../src/countdown');

jest.useFakeTimers();

test('countdownTimer should return a timer ID', () => {
    const timerId = countdownTimer(3);
    expect(typeof timerId).toBe('number');

    // Fast-forward timers to prevent logging after test
    jest.runOnlyPendingTimers();
    clearInterval(timerId);
});
