var CurrentDate = {
    year: 0,
    month: 0,
    day: 0,
    hour: 0,
    monthminute: 0,
    dayPeriod: "Day",
    save: function () {
        var date = CurrentDate.year * 525600 + CurrentDate.month * 43200 +
            CurrentDate.day * 1440 + CurrentDate.hour * 60 + CurrentDate.minute;
        setCookie("date", date, 60);
    },
    load: function () {
        var date = getCookie("date");
        if (date != "") {
            CurrentDate.year = parseInt(date / 525600);
            date = date % 525600;
            CurrentDate.month = parseInt(date / 43200);
            date = date % 43200;
            CurrentDate.day = parseInt(date / 1440);
            date = date % 1440;
            CurrentDate.hour = parseInt(date / 60);
            date = date % 60;
            CurrentDate.minute = date;
            CurrentDate.updatePage();
        }
    },
    updatePage: function () {
        $("#currentData").text(CurrentDate.toString());
        if (CurrentDate.hour >= 21 || CurrentDate.hour < 5) {
            CurrentDate.dayPeriod = "Night";
        } else if (CurrentDate.hour >= 5 && CurrentDate.hour < 7) {
            CurrentDate.dayPeriod = "The light is burning";
        } else if (CurrentDate.hour >= 7 && CurrentDate.hour < 19) {
            CurrentDate.dayPeriod = "Day";
        } else if (CurrentDate.hour >= 19 && CurrentDate.hour < 21) {
            CurrentDate.dayPeriod = "The Night is coming";
        }
        $("#currentDayPeriod").text(CurrentDate.dayPeriod);
    },
    toString: function () {
        return "Y: " + CurrentDate.year + ", M: " + CurrentDate.month + ", d: " + CurrentDate.day +
            ", h: " + CurrentDate.hour + ", m: " + CurrentDate.minute;
    },
    incYear: function (value) {
        if (value == undefined) {
            value = 1;
        }
        CurrentDate.year += parseInt(value);
        CurrentDate.updatePage();
    },
    incMonth: function (value) {
        if (value == undefined) {
            value = 1;
        }
        CurrentDate.month += parseInt(value);
        if (CurrentDate.month >= 12) {
            CurrentDate.incYear(parseInt(CurrentDate.month / 12));
            CurrentDate.month = CurrentDate.month % 12;
        }
        CurrentDate.updatePage();
    },
    incDay: function (value) {
        if (value == undefined) {
            value = 1;
        }
        CurrentDate.day += parseInt(value);
        if (CurrentDate.day >= 30) {
            CurrentDate.incMonth(parseInt(CurrentDate.day / 30));
            CurrentDate.day = CurrentDate.day % 30;
        }
        CurrentDate.updatePage();
    },
    incHour: function (value) {
        if (value == undefined) {
            value = 1;
        }
        CurrentDate.hour += parseInt(value);
        if (CurrentDate.hour >= 24) {
            CurrentDate.incDay(parseInt(CurrentDate.hour / 24));
            CurrentDate.hour = CurrentDate.hour % 24;
        }
        CurrentDate.updatePage();
    },
    incMinute: function (value) {
        if (value == undefined) {
            value = 1;
        }
        CurrentDate.minute += parseInt(value);
        if (CurrentDate.minute >= 60) {
            CurrentDate.incHour(parseInt(CurrentDate.minute / 60));
            CurrentDate.minute = CurrentDate.minute % 60;
        }
        CurrentDate.updatePage();
    },
    skipNight: function () {
        var newDate;
        if (CurrentDate.hour >= 21) {
            CurrentDate.minute = 0;
            CurrentDate.hour = 5;
            CurrentDate.incDay();
        } else if (CurrentDate.hour < 5) {
            CurrentDate.minute = 0;
            CurrentDate.hour = 5;
        }
        CurrentDate.updatePage();
    }
};