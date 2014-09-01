var Events = {
    find10goldsOnRoad: {
        eventType: Constants.EventType.ResourceDependent,
        description: "While you walking you find 10 coins",
        cause: {
            type: "coins",
            value: 10
        },
        priority: Constants.Priority.normal
    },
    youHave15Coins: {
        eventType: Constants.EventType.ResourceDependent,
        description: "You have 15 coins",
        cause: {
            type: "coins",
            value: 15
        },
        priority: Constants.Priority.normal
    },
    youHave20Coins: {
        eventType: Constants.EventType.ResourceDependent,
        description: "You have 20 coins",
        cause: {
            type: "coins",
            value: 20
        },
        priority: Constants.Priority.normal
    },
    vova: {
        eventType: Constants.EventType.Permanent,
        description: "10 percent chance to saw this event",
        cause: {
            type: "always",
            value: -1
        },
        priority: Constants.Priority.normal
    },
    parseAllEvents: function () {
        for (var key in Events) {
            var value = Events[key];
            switch(value.eventType) {
                case Constants.EventType.ResourceDependent:
                    if (value.hasOwnProperty("cause")) {
                        for (var k in Resource) {
                            if (k == value.cause.type) {
                                Resource[k].eventsList.push(value);
                                console.log(k + ": " + key);
                            }
                        }
                    }
                    break;
                case Constants.EventType.Permanent:

                    break;
                default:

            }

        }

    }
};