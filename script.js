
$(document).ready(function () {
    $('#btn').click(function () {
        $.ajax({
            url: "filebgvghvh2.json",
            type: "GET",
            dataType: "json",
            success: function (file) {
                // var data = JSON.stringify(file);
                console.log(file.message);
                $('#para').html(file.message);
            },
            error: function (xhr, status, error) {
                $('#para').text("Error Text : " + error +" "+ status);
            }
        });
    });
});