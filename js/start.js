$(document).ready(function () {

    loadAll();
    Events.parseAllEvents();

    setInterval(function () {
        Hero.incExp(1);

        saveAll();
    }, Constants.fiveMinute);

    setInterval(function () {
        CurrentDate.incMinute(1);
    }, Constants.fiveMinute / 5);

    $("#clickMin").on("click", function () {
        CurrentDate.incMinute(5);
    });

    $("#clickHour").on("click", function () {
        CurrentDate.incHour(5);
    });

    $("#saveAll").on("click", function () {
        saveAll();
    });

    $("#loadAll").on("click", function () {
        loadAll();
    });

    $("#clickExp").on("click", function () {
        Hero.incExp(10);
    });

    $("#clickLvl").on("click", function () {
        Hero.incLevel();
    });

    $("#btn1").on("click", function () {
        $(this).text("ClearCoins");
        setCookie("resourceCoins", 0, 60);
        Resource.coins.load();
    });

    $("#btn2").on("click", function () {
        $(this).text("+1 Coins");
        Resource.coins.inc();
    });

    $("#skipNightBtn").on("click", function () {
        CurrentDate.skipNight();
    });

});