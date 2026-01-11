function countdownTimer(seconds) {
    let remaining = seconds;

    const timerId = setInterval(() => {
        console.log(remaining);
        remaining--;

        if (remaining < 0) {
            clearInterval(timerId);
        }
    }, 1000);

    return timerId;
}

module.exports = countdownTimer;
