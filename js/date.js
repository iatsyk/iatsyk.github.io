var CurrentDate = {
        year: 0,
        month: 0,
        day: 0,
        hour: 0,
        minute: 0,
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
            updateDayPeriod(date);
        },
        toString: function () {
            return "Y: " + CurrentDate.year + ", M: " + CurrentDate.month + ", d: " + CurrentDate.day +
                ", h: " + CurrentDate.hour + ", m: " + CurrentDate.minute;
        },
        incYear: function (value) {
            if(value != undefined) {
                CurrentDate.year +=value;
            }
        },
        incMinute: function (value) {
            if (value != undefined) {
                CurrentDate.minute += value;
            }
            if (CurrentDate.minute >= 60) {
                CurrentDate.incHour(parseInt(CurrentDate.minute / 60));
                CurrentDate.minute = CurrentDate.minute % 60;
            }
        }
    }
    ;