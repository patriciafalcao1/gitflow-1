$(document).ready(function() {
    $.get("participants.json", function(data) {
        $.each(data, function(index, value) {
            var template = $('#template').clone();
            template.css('visibility', 'visible');
            template.find('name').html(value.name);
            template.find('.depart').html(value.departament + ' ' + value.email);
            $("#container").append(template);
        });
    });
});
