import { myData } from "./fetch.js";

var htmls = myData.map(data => {
    return `
        <div class="student row" id="student-${data.id}">
            <div class="col-xl-3 col-lg-4 col-md-4">
                <div class="student__picture">
                    <img src="${data.Image}" alt="Picture-${data.Name}" class="student__img" id="studentImage-${data.id}">
                </div>
            </div>  
            <div class="col-xl-6 col-lg-5 col-md-5">
                <div class="student__information" id="${data.id}">
                    <h2 class="name" id="studentName-${data.id}">${data.Name}</h2>
                    <ul class="student__list">
                        <li class="student__list-item">
                            <span class="student__info">Mã số sinh viên: </span>
                            <p class="student__list-desc d-inline" id="studentId-${data.id}">${data.Id}</p>
                        </li>
                        <li class="student__list-item">
                            <span class="student__info">Ngành học: </span>
                            <p class="student__list-desc d-inline" id="studentMajor-${data.id}">${data.Major}</p>
                        </li>
                        <li class="student__list-item">
                            <span class="student__info">Khóa: </span>
                            <p class="student__list-desc d-inline" id="studentCohort-${data.id}">${data.Cohort}</p>
                        </li>
                        <li class="student__list-item">
                            <a href="#" class="stydent__list-link" id="studentMore-${data.id}">Xem thêm...</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-2">
                <div class="options">
                    <button class="btn-change btn btn-success" id="change-${data.id}">Chỉnh sửa</button>
                    <button class="btn-remove btn btn-danger" id="remove-${data.id}">Xóa</button>
                </div>
            </div>
        </div>
    `
});

document.querySelector('#body').innerHTML = htmls.join('');

var showMores = body.querySelectorAll('[id*=studentMore]');
//Quet nut xem them
[...showMores].forEach (showMore => {
    showMore.addEventListener ('click', (event) => {
        event.preventDefault();
        window.open('../html/show-user.html', 'myWindow', "left=200,top=80,width=1100,height=640");
    });
});


//show form-change 
import { formElement, submitBtn, keys } from "./form-change.js";

var students = document.querySelectorAll('#body [id*=student-]');

function renderForm (api) {
    fetch (api)
        .then (response => response.json())
        .then (dataOfStudent => {
            if (Array.isArray(dataOfStudent)) {
                var dataOfStudent = dataOfStudent[0];
            }
            // console.log(dataOfStudent);
            for (var key in dataOfStudent) {
                if (key != 'id') {
                    switch (key) {
                        case 'Image':
                            formElement.querySelector(`#form${key}`).src = dataOfStudent[key];
                            break;
                        default :
                            formElement.querySelector(`#form${key}`).value = dataOfStudent[key];
                    }
                }
            }
        });
}

[...students].forEach(student => {
    var changeBtn = student.querySelector('[id*=change-]');
    // var removeBtn = student.querySelector('[id*=remove-]');
    changeBtn.addEventListener('click', () => {
        formElement.querySelector('#heading').innerHTML = 'Chỉnh sửa thông tin'; //chuyen sang form change
        submitBtn.innerHTML = 'Cập nhật'; //chuyen sang form change 

        var idStudent = (changeBtn.id).replace('change-', '');
        var api = 'http://localhost:3000/student' + '?id=' + idStudent;
        var url = 'http://localhost:3000/student' + '/' + idStudent;

        renderForm(api);

        document.querySelector('#shadow').classList.add('show');
        document.querySelector('body').style.overflow = 'hidden';
        

        //Putch dữ liệu mới được cập nhật lên json

        submitBtn.addEventListener('click', (event) => {
            event.preventDefault();
            var json = {};
            var usersInformation = form.querySelectorAll('[id*=form]');
            const previewImg = formElement.querySelector('#formImage');
            usersInformation[0].value = previewImg.src;
            var i = 0;
            [...usersInformation].forEach(user => {
                // Đã lấy ra được thông tin update, chỉ cần up lên json
                json[keys[i++]] = user.value;
            });

            fetch(url, {
                method: "PATCH",
                body: JSON.stringify(json), //Đẩy vào thằng vừa nhận!
                headers: {
                    "Content-Type": "application/json"
                },
            });
        });
    });

});

export { students, renderForm };