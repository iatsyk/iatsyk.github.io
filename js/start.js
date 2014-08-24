$(document).ready(function () {

    setDateOnLoadPage();

    setInterval(function () {
        var date = incDate();
        updateDate(date);
        updateDayPeriod(date);
    }, 2083);

    $("#clickMin").on("click", function () {
        var date = incDate();
        updateDate(date);
        updateDayPeriod(date);
    });

    $("#clickHour").on("click", function () {
        var date = incDate(60 * 5);
        updateDate(date);
        updateDayPeriod(date);
    });

    $("#clearBtn").on("click", function () {
        setCookie("date", 0, 60);
        updateDate(0);
        updateDayPeriod(date);
    });

    $("#skipNightBtn").on("click", function () {
        var date = getCookie("date");
        var newDate;
        date = date % 1440;
        if (date / 60 >= 21) {
            newDate = incDate(1440 - date + 5 * 60);
        } else if (date / 60 < 5) {
            newDate = incDate(5 * 60 - date);
        }
        if (newDate != undefined) {
            updateDate(newDate);
            updateDayPeriod(newDate);
        }
    });

});