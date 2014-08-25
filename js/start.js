$(document).ready(function () {

    CurrentDate.load();
    Hero.load();

    setInterval(function () {
        CurrentDate.incMinute(5);
        Hero.incExp();

        Hero.save();
        CurrentDate.save();
    }, 2083);

    $("#clickMin").on("click", function () {
        CurrentDate.incMinute(5);
    });

    $("#clickHour").on("click", function () {
        CurrentDate.incHour(5);
    });

    $("#clearDate").on("click", function () {
        setCookie("date", 0, 60);
        CurrentDate.load();
    });

    $("#saveAll").on("click", function () {
        CurrentDate.save();
        Hero.save();
    });

    $("#clickExp").on("click", function () {
        Hero.incExp(10);
    });

    $("#clickLvl").on("click", function () {
        Hero.incLevel();
    });

    $("#clearHero").on("click", function () {
        setCookie("heroLevel", 1, 60);
        setCookie("heroExp", 1, 60);
        Hero.load();
    });

    $("#skipNightBtn").on("click", function () {
        CurrentDate.skipNight();
    });

});