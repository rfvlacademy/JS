const education = [];
function deleteEducation(index) {
    $('#education-'+index).remove();
}
$(document).ready(function () {
    $('#cv').on('submit', async function (event) {
        event.preventDefault();
        const bitmap = await getBitMapFromImage();
        sessionStorage.setItem('photo', bitmap);
        console.log($(this).serializeArray());
    });

    $('#education').click(function () {
        const index = education.length;
        let html = '<div class="row education" id="education-' + index + '">' +
            '<div class="col-md-2 offset-md-10">\n' +
            '<button type="button" class="close btn btn-danger" onclick="deleteEducation(' + index + ')" aria-label="Close" id="closeEducation-' + index + '">\n' +
            '  <span aria-hidden="true">&times;</span>\n' +
            '</button></div>\n' +
            '<div class="col-4">' +
            '<label>Centro</label>\n' +
            '<input type="text" class="form-control" id="centro' + index + '" name="centro' + index + '"></div>\n' +
            '<div class="col-4"><label>Fecha de inicio</label>\n' +
            '<input type="text" class="form-control" id="inicio' + index + '" name="inicio' + index + '"></div>\n' +
            '<div class="col-4"><label>Fecha de fin</label>\n' +
            '<input type="text" class="form-control" id="fin' + index + '" name="fin' + index + '"></div>\n' +
            '<div class="col-12">\n' +
            '<label>Titulo</label>\n' +
            '<input type="text" class="form-control" id="titulo' + index + '" name="titulo' + index + '">\n' +
            '</div></div>';
        education.push(1);
        $('#cont-education').append(html);
    })


    async function getBitMapFromImage() {
        const fileUpload = $('#photo')[0];
        return new Promise((resolver, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(fileUpload.files[0]);
            reader.onload = async (e) => {
                try {
                    const response = await e.target.result;
                    resolver(response);
                } catch (err) {
                    reject(err);
                }
            }
        })
    }
});
