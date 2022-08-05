$(document).ready(function () {
    $('#datos').on('submit', function (event) {
        event.preventDefault();
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

    $("input[name='color']").on('click', function () {
        const color = $("input[name='color']:checked").val();
        let html = `<p> el color elejido es ${color}</p>`;
        $('#text-modal').replaceWith(html);
        $('#myModal').modal('toggle')
        if (color === 'blue') {
            $("#text").addClass(color).removeClass("red white");
        } else if (color === 'red') {
            $("#text").addClass(color).removeClass("blue white");
        } else {
            $("#text").addClass(color).removeClass("red blue");
        }
    });
})
