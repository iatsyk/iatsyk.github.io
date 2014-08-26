$(document).ready(function () {

    loadAll();

    setInterval(function () {
        CurrentDate.incMinute(5);
        Hero.incExp();
        Resource.incCoins();

        saveAll();
    }, 2083);

    $("#clickMin").on("click", function () {
        CurrentDate.incMinute(5);
    });

    $("#clickHour").on("click", function () {
        CurrentDate.incHour(5);
    });

    $("#clearDate").on("click", function () {
        $.get(
            "http://www.rinkworks.com/namegen/fnames.cgi",
            {paramOne : 1, paramX : 'abc'},
            function(data) {
                alert('page content: ' + data);
            }
        );
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

    $("#clearHero").on("click", function () {
        setCookie("heroLevel", 1, 60);
        setCookie("heroExp", 1, 60);
        Hero.load();
    });

    $("#skipNightBtn").on("click", function () {
        CurrentDate.skipNight();
    });

});