var Hero = {
    level: 1,
    exp: 0,
    multiplier: 100,
    updatePage: function () {
        $("#heroLvl").text("Level: " + Hero.level);
        $("#heroExp").text("Exp: " + Hero.exp + " / " + Hero.level * Hero.multiplier);
    }
};