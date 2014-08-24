$(document).ready(function () {

    setDateOnLoadPage();

    setInterval(function () {
        var date = incDate(5);
        updateDate(date);
        Hero.exp++;
        if (Hero.exp >= Hero.level * Hero.multiplier) {
            Hero.level++;
        }
        Hero.updatePage();
    }, 2083);

    $("#clickMin").on("click", function () {
        var date = incDate(5);
        updateDate(date);
    });

    $("#clickHour").on("click", function () {
        var date = incDate(60 * 5);
        updateDate(date);
    });

    $("#clearBtn").on("click", function () {
        setCookie("date", 0, 60);
        updateDate(0);
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
        }
    });

});