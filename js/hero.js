var Hero = {
    level: 1,
    exp: 0,
    multiplier: 100,
    name: "",
    age: {
        years: 14,
        months: 0,
        days: 0,
        toString: function () {
            return Hero.age.years + " years, " + Hero.age.months + " months, " + Hero.age.days + " days.";
        },
        load: function () {
            Hero.age.years = CurrentDate.year + 14;
            Hero.age.months = CurrentDate.month;
            Hero.age.days = CurrentDate.day;
            Hero.age.updatePage();
        },
        updatePage: function () {
            $("#heroAge").text("Age: " + Hero.age.toString());
        }
    },
    save: function () {
        setCookie("heroLevel", Hero.level, 60);
        setCookie("heroExp", Hero.exp, 60);
        setCookie("heroName", Hero.name, 60);
        setCookie("heroAge", Hero.age, 60);
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
        Hero.age.load();
        var name = getCookie("heroName");
        if (name != "") {
            Hero.name = name;
        } else {
            Hero.name = prompt("Choose hero name:");
        }
        Hero.updatePage();
    },
    updatePage: function () {
        $("#heroLvl").text("Level: " + Hero.level);
        $("#heroExp").text("Exp: " + Hero.exp + " / " + Hero.level * Hero.multiplier);
        Hero.age.updatePage();
        $("#heroName").text("Name: " + Hero.name);
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