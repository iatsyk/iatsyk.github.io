var Events = {
    find10goldsOnRoad: {
        description: "While you walking you find 10 coins",
        cause: {
            type: "coins",
            value: 10
        }
    },
    youHave15Coins: {
        description: "You have 15 coins",
        cause: {
            type: "coins",
            value: 15
        }
    },
    youHave20Coins: {
        description: "You have 20 coins",
        cause: {
            type: "coins",
            value: 20
        }
    },
    tanya: {
        description: "Tanya",
        cause: {
            type: "coins",
            value: 35
        }
    },
    parseAllEvents: function () {
        for (var key in Events) {
            var value = Events[key];
            if (value.hasOwnProperty("cause")) {
                for (var k in Resource) {
                    if (k == value.cause.type) {
                        Resource[k].eventsList.push(value);
                        console.log(k + ": " + key);
                    }
                }
            }
        }

    }
};