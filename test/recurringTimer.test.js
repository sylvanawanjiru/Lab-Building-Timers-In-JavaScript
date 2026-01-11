const { startRecurringTimer, stopRecurringTimer } = require('../src/recurringTimer');

test('startRecurringTimer returns timer ID and can be stopped', () => {
    const timerId = startRecurringTimer('Hello', 10);
    expect(typeof timerId).toBe('number');

    // Stop immediately to prevent logging after test finishes
    stopRecurringTimer();
});
