var Resource = {
    coins: 0,
    save: function () {
        setCookie("resourceCoins", Resource.coins, 60);
    },
    load: function () {
        var coins = getCookie("resourceCoins");
        if (coins != "") {
            Resource.coins = coins;
        }
        Resource.updatePage();
    },
    updatePage: function () {
        $("#resourceCoins").text("Coins: " + Resource.coins);
    },
    incCoins: function (value) {
        if (value == undefined) {
            value = 1;
        }
        Resource.coins = parseInt(Resource.coins) + parseInt(value);
        Resource.updatePage();
    }
};