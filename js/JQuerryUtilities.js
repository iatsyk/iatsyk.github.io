function changeTextById(id, variable, text) {
    var message = text + "" + variable;
    $("#" + id).text(message);
}
