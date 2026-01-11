const delayedReminder = require('../src/reminder');

jest.useFakeTimers();

test('delayedReminder resolves after delay', async () => {
    const promise = delayedReminder('Hello', 1000);

    // Fast-forward timer so the promise resolves immediately
    jest.runAllTimers();

    await expect(promise).resolves.toBeUndefined();
});



