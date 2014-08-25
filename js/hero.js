var Hero = {
    level: 1,
    exp: 0,
    multiplier: 100,
    save: function () {
        setCookie("heroLevel", Hero.level, 60);
        setCookie("heroExp", Hero.exp, 60);
    },
    load: function () {
        var level = getCookie("heroLevel");
        if (level != "") {
            Hero.level = level;
        }
        var exp = getCookie("heroExp");
        if (exp != "") {
            Hero.exp = exp;
        }
        Hero.updatePage();
    },
    updatePage: function () {
        $("#heroLvl").text("Level: " + Hero.level);
        $("#heroExp").text("Exp: " + Hero.exp + " / " + Hero.level * Hero.multiplier);
    },
    incExp: function (value) {
        if (value == undefined) {
            value = 1;
        }
        Hero.exp = parseInt(Hero.exp) + parseInt(value);
        if (Hero.exp >= Hero.level * Hero.multiplier) {
            Hero.incLevel();
            Hero.exp = 0;
        }
        Hero.updatePage();
    },
    incLevel: function (value) {
        if (value == undefined) {
            value = 1;
        }
        Hero.level = parseInt(Hero.level) + parseInt(value);
        Hero.updatePage();
    }
};