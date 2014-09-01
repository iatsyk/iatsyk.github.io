var Resource = {
    coins: {
        value: 0,
        eventsList: [],
        save: function () {
            setCookie("resourceCoins", this.value, 60);
        },
        load: function () {
            var value = getCookie("resourceCoins");
            if (value != "") {
                this.value = value;
            }
            this.updatePage();
        },
        updatePage: function () {
            $("#resourceCoins").text("Coins: " + this.value);
        },
        inc: function (value) {
            if (value == undefined) {
                value = 1;
            }
            this.value = parseInt(this.value) + parseInt(value);
            this.updatePage();
            for (var key in this.eventsList) {
                var event = this.eventsList[key];
                if (event.hasOwnProperty("cause") && event.cause.value == this.value) {
                    $("#eventsDesc").text(event.description);
                    setTimeout(function () {
                        $("#eventsDesc").text("");
                    }, event.priority * 1000)
                }
            }
        }
    }
};