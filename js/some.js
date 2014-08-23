$(document).ready(function () {

    setHourOnLoadPage();
    setInterval(function () {
        var hour = incHour();
        updateHour(hour);
    }, 1000)


    $("#clickBtn").on("click", function () {
        console.log("in add");
        var hour = incHour();
        updateHour(hour);
    });
    $("#clearBtn").on("click", function () {
        setCookie("hour", 0, 60);
        updateHour(0);
    });
});

function updateHour(hour) {
    var message = "hour:  " + hour;
    $("#hour").text(message);
}

function incHour() {
    var hour = getCookie("hour");
    hour++;
    setCookie("hour", hour, 60);
    return hour;
}

function setHourOnLoadPage() {
    console.log("in setHourOnLoadPage");
    var hour = getCookie("hour");
    if (hour == null || hour == "") {
        setCookie("hour", 0, 60);
        hour = "0";
    }
    var message = "hour:  " + hour;
    $("#hour").text(message);
}