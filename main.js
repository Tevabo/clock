function showTime() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    document.getElementById("hour").innerText = hour;
    document.getElementById("minute").innerText = minute;
    document.getElementById("second").innerText = second;

    setTimeout(showTime, 1000);
    // setTimeout(minute, 60000)

}

showTime()

function addZero() {
    if (second.innerText.length === 1) {
        second.innerText = '0' + second.innerText;
    }
    setTimeout(addZero, 1000)
}

addZero()