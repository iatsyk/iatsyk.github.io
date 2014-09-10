var Events = {
    find10goldsOnRoad: {
        eventType: Constants.EventType.ResourceDependent,
        description: "You find 10 coins",
        cause: {
            type: "coins",
            value: 10
        },
        priority: Constants.Priority.normal,
        buttons: {
            button1: {
                text: "Take",
                onClick: {
                    type: Constants.ButtonClickType.AddResource,
                    resource: "coins",
                    value: 10,
                    withClose: true
                }
            },
            button2: {
                text: "Leave",
                onClick: {
                    type: Constants.ButtonClickType.Close
                }
            }
        }
    },
    youHave15Coins: {
        eventType: Constants.EventType.ResourceDependent,
        description: "You find 10 coins",
        cause: {
            type: "coins",
            value: 25
        },
        priority: Constants.Priority.normal,
        buttons: {
            button1: {
                text: "Take",
                onClick: {
                    type: Constants.ButtonClickType.AddResource,
                    resource: "coins",
                    value: 10,
                    withClose: false
                }
            },
            button2: {
                text: "Leave",
                onClick: {
                    type: Constants.ButtonClickType.Close
                }
            }
        }
    },
    vova: {
        eventType: Constants.EventType.Permanent,
        description: "10 percent chance to saw this event",
        cause: {
            type: "always",//replace with enum
            value: -1
        },
        priority: Constants.Priority.normal
    },
    parseAllEvents: function () {
        for (var key in Events) {
            var value = Events[key];
            switch (value.eventType) {
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