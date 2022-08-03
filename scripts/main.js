$(document).ready(function () {
    $('#datos').on('submit', function (e) {
        e.preventDefault();
        let data = {};
        data.email = $('#email').val();
        data.name = $('#name').val();
        data.address = $('#address').val();
        console.log($(this).serializeArray());
        printTable(data);
    });

    function printTable(data) {
        let html = ''
        html += '<tr>'
        html += '<td>' + data.email + '</td>'
        html += '<td>' + data.name + '</td>'
        html += '<td>' + data.address + '</td>'
        html += '<tr>'
        $('#tbody').append(html);
    }
})
