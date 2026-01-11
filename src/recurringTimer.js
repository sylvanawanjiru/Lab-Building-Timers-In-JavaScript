let recurringTimerId;

function startRecurringTimer(message, interval) {
    recurringTimerId = setInterval(() => {
        console.log(message);
    }, interval);

    return recurringTimerId;
}

function stopRecurringTimer() {
    clearInterval(recurringTimerId);
}

module.exports = { startRecurringTimer, stopRecurringTimer };
