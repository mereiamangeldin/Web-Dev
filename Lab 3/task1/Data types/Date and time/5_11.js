/*How many seconds till tomorrow?*/

function getSecondsToTomorrow() {
    let now = new Date();

    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    let diff = tomorrow - now;
    return Math.round(diff / 1000);
}

/*Format the relative date*/

function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;

    // formatting
    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    if (diffSec < 1) {
        return 'right now';
    } else if (diffMin < 1) {
        return `${diffSec} 
    } else if (diffHour < 1) {
        return `${diffMin}
    } else {
        return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
}