function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function updateDate(date) {
    $("#currentData").text(parseDateToString(date));
}

function updateDayPeriod(date) {
    date = (date % 1440) / 60;
    if (date >= 21 || date <= 5) {
        $("#currentDayPeriod").text("Night");
    } else if (date > 5 && date <= 7) {
        $("#currentDayPeriod").text("The light is burning");
    } else if (date > 7 && date <= 19) {
        $("#currentDayPeriod").text("Day");
    } else if (date > 19 && date < 21) {
        $("#currentDayPeriod").text("The Night is coming");
    }
}

function incDate(delta) {
    var date = getCookie("date");
    if (delta == undefined) {
        delta = 5;
    }
    date = parseInt(date) + delta;
    setCookie("date", date, 60);
    return date;
}

function setDateOnLoadPage() {
    var date = getCookie("date");
    if (date == null || date == "") {
        setCookie("date", 0, 60);
        date = "0";
    }
    $("#currentData").text(parseDateToString(date));
}

function parseDateToString(date) {
    var result = "";
    if (date / 525600 >= 1) {
        result = "Y: " + parseInt(date / 525600) + ", ";
        date = date % 525600;
    }
    if (date / 43200 >= 1 || result != "") {
        result = result + "M: " + parseInt(date / 43200) + ", ";
        date = date % 43200;
    }
    result = result + "D: " + parseInt(date / 1440) + ", ";
    date = date % 1440;
    result = result + "H: " + parseInt(date / 60) + ", ";
    date = date % 60;
    result = result + "M: " + date;
    return result;
}