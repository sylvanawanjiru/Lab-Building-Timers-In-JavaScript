const { startRecurringTimer, stopRecurringTimer } = require('../src/recurringTimer');

jest.useFakeTimers();

test('startRecurringTimer returns timer ID and can be stopped', () => {
    const timerId = startRecurringTimer('Hello', 1000);
    expect(typeof timerId).toBe('number');

    // Fast-forward interval so logs execute instantly
    jest.runOnlyPendingTimers();

    stopRecurringTimer();
});
