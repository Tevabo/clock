function showTime() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    document.getElementById("hour").innerText = hour;
    document.getElementById("minute").innerText = minute;
    document.getElementById("second").innerText = second;
    
    setTimeout(showTime, 1000);

}

showTime()