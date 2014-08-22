$(document).ready(function () {

    setHourOnLoadPage();

    $("#clickBtn").on("click", function () {
        console.log("in add");
        var hour = getCookie("hour");
        hour ++;
        setCookie("hour", hour, 60);
        var message = "hour:  " + hour;
        $("#hour").text(message);
    });
});

function setHourOnLoadPage() {
    console.log("in setHourOnLoadPage");
    var hour = getCookie("hour");
    if (hour == null) {
        setCookie("hour", 0, 60);
        hour = 0;
    }
    var message = "hour:  " + hour;
    $("#hour").text(message);
}