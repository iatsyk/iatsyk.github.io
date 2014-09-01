var Constants = {
    fiveMinute: 2083,
    Priority: {
        lowest: 12,
        low: 24,
        normal: 36,
        high: 48,
        highest: 60,
        permanent: -1
    },
    EventType: {
        ResourceDependent: 1,
        Permanent: 2,
        properties: {
            1: {name: "ResourceDependent"},
            2: {name: "Permanent"}
        }
    }
};