const education = [];

function printEducation() {
    let html = '';
    $('#cont-education').empty();
    for (let index = 0; index < education.length; index++) {
        html += '<div class="row education" id="education-' + index + '">' +
            '<div class="col-md-2 offset-md-10">\n' +
            '<button type="button" class="close btn btn-danger" onclick="deleteEducation(' + index + ')" aria-label="Close" id="closeEducation-' + index + '">\n' +
            '  <span aria-hidden="true">&times;</span>\n' +
            '</button></div>\n' +
            '<div class="col-4">' +
            '<label>Centro</label>\n' +
            '<input type="text" class="form-control" id="centro' + index + '" name="centro' + index + '" value="' + education[index].centro + '"' +
            'onchange="editCentro(' + index + ')"></div>\n' +
            '<div class="col-4"><label>Fecha de inicio</label>\n' +
            '<input type="text" class="form-control" id="inicio' + index + '" name="inicio' + index + '" value="' + education[index].inicio + '"' +
            'onchange="editInicio(' + index + ')"></div>\n' +
            '<div class="col-4"><label>Fecha de fin</label>\n' +
            '<input type="text" class="form-control" id="fin' + index + '" name="fin' + index + '" value="' + education[index].fin + '"' +
            'onchange="editFin(' + index + ')"></div>\n' +
            '<div class="col-12">\n' +
            '<label>Titulo</label>\n' +
            '<input type="text" class="form-control" id="titulo' + index + '" name="titulo' + index + '" value="' + education[index].titulo + '"' +
            'onchange="editTitulo(' + index + ')">' +
            '</div></div>';
    }
    $('#cont-education').append(html);
}

function deleteEducation(index) {
    education.splice(index, 1);
    printEducation();
}

function editCentro(index) {
    education[index].centro = $('#centro' + index).val();
}

function editInicio(index) {
    education[index].inicio = $('#inicio' + index).val();
}

function editFin(index) {
    education[index].fin = $('#fin' + index).val();
}

function editTitulo(index) {
    education[index].titulo = $('#titulo' + index).val();
}

$(document).ready(function () {
    $('#guardar').on('click', async function () {
        const bitmap = await getBitMapFromImage();
        sessionStorage.setItem('photo', bitmap);
    });

    $('#education').click(function () {
        let newEducationInfo = {centro: '', inicio: '', fin: '', titulo: ''};
        education.push(newEducationInfo);
        printEducation();
    });


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