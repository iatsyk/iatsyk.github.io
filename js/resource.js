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
                    var eventsElem =$("#events");
                    eventsElem.empty().append('<p id="eventsDesc">' + event.description + '</p>');
                    if (event.hasOwnProperty("buttons")) {
                        for (var buttKey in event.buttons) {
                            var button = event.buttons[buttKey];
                            eventsElem.append('<button id="' + key + '">' + button.text + '</button>');
                        }
                    }
                    setTimeout(function () {
                        $("#events").empty();
                    }, event.priority * 1000)
                }
            }
        }
    }
};