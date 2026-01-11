const delayedReminder = require('../src/reminder');

test('delayedReminder should resolve after delay', async () => {
    await expect(delayedReminder('Hello', 10)).resolves.toBeUndefined();
});



