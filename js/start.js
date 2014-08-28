$(document).ready(function () {

    loadAll();

    setInterval(function () {
        Hero.incExp(1);
        Resource.incCoins(1);

        saveAll();
    }, CONST.fiveMinute);

    setInterval(function () {
        CurrentDate.incMinute(1);
    }, CONST.fiveMinute / 5);

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
        $(this).text("GetHttpRequest");
        var xhr = createCORSRequest('GET', "http://www.rinkworks.com/namegen/fnames.cgi");
        if (!xhr) {
            throw new Error('CORS not supported');
        }
        xhr.onload = function () {
            var responseText = xhr.responseText;
            console.log(responseText);

        };
        xhr.onerror = function () {
            console.log('There was an error!');
        };
        xhr.send();
    });

    $("#btn2").on("click", function () {
        $(this).text("ClearHero");
        setCookie("heroLevel", 1, 60);
        setCookie("heroExp", 1, 60);
        setCookie("heroName", "", 60);
        Hero.load();
    });

    $("#skipNightBtn").on("click", function () {
        CurrentDate.skipNight();
    });

});