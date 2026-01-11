function recurringTimer(message, interval, callback) {
    const timerId = setInterval(() => {
        callback(message); // log the message
    }, interval);

    return timerId; // return ID so we can stop it externally
}

function stopRecurringTimer(timerId) {
    clearInterval(timerId); // stop the timer
}

module.exports = { recurringTimer, stopRecurringTimer };

