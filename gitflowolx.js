$(document).ready(function() {
    $.get("participants.json", function(data) {
        console.log(data);
    });
});
