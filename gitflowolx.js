$(document).ready(function() {
    $.get("participants.json", function(data) {
        $.each(data, function(index, value) {
            var template = $('#template').clone();
            $("#container").append(template);
        });
    });
});
