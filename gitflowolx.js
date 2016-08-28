$(document).ready(function() {
    $.post("participants.json", function(data) {
        console.log(data);
    });
});
