function countdownTimer(startTime, interval, callback) {
    let remaining = startTime;

    const timerId = setInterval(() => {
        callback(remaining); // call the callback with remaining time
        remaining--;

        if (remaining < 0) {
            clearInterval(timerId); // stop timer
        }
    }, interval);

    return timerId; // return timer ID for test validation
}

module.exports = countdownTimer;

