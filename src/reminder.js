function delayedReminder(message, delay, callback) {
    return new Promise((resolve) => {
        setTimeout(() => {
            callback(message); // log the message
            resolve(message); // resolve the promise
        }, delay);
    });
}

module.exports = delayedReminder;



