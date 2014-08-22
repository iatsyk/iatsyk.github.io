$(document).ready(function () {

    setHourOnLoadPage();

    $("#clickBtn").on("click", function () {
        console.log("in add");
        var hour = get_cookie("hour");
        hour ++;
        delete_cookie("hour");
        document.cookie = "hour=" + hour + ";expires=15/10/2014 00:00:00";
        var message = "hour:  " + hour;
        $("#hour").text(message);
    });
});

function setHourOnLoadPage() {
    console.log("in setHourOnLoadPage");
    var hour = get_cookie("hour");
    if (hour == null) {
        document.cookie = "hour=0;expires=15/10/2014 00:00:00";
        hour = 0;
    }
    var message = "hour:  " + hour;
    $("#hour").text(message);
}