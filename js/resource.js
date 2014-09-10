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
                    var eventsElement = $("#events");
                    eventsElement.empty().append('<p id="eventsDesc">' + event.description + '</p>');
                    if (event.hasOwnProperty("buttons")) {
                        for (var buttKey in event.buttons) {
                            var button = event.buttons[buttKey];
                            var buttonElement = $('#' + buttKey);
                            eventsElement.append('<button id="' + buttKey + '">' + button.text + '</button>');
                            switch (button.onClick.type) {
                                case Constants.ButtonClickType.Close:
                                    $('#' + buttKey).on("click", function () {
                                        $("#events").empty();
                                    });
                                    break;
                                case Constants.ButtonClickType.AddResource:
                                    $('#' + buttKey).on("click", button.onClick, function (event) {
                                        var onClick = event.data;
                                        for (var k in Resource) {
                                            if (k == onClick.resource) {
                                                Resource[k].inc(onClick.value);
                                            }
                                        }
                                        if (onClick.withClose) {
                                            $("#events").empty();
                                        }
                                    });
                                    break;
                            }
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