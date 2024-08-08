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
                            <a href="#" class="student__list-link" id="studentMore-${data.id}">Xem thêm...</a>
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

function formatDay (myStr) {
    return `${myStr[8]}${myStr[9]}/${myStr[5]}${myStr[6]}/${myStr[0]}${myStr[1]}${myStr[2]}${myStr[3]}`;
}

var showMores = body.querySelectorAll('[id*=studentMore]');
//Quet nut xem them
[...showMores].forEach (showMore => {
    showMore.addEventListener ('click', (event) => {
        event.preventDefault();

        // window.open('../html/show-user.html', 'myWindow', "left=200,top=80,width=1100,height=640");
        var api = 'http://localhost:3000/student?id=' + showMore['id'].replace('studentMore-', '');
        fetch (api) 
            .then (response => response.json())
            .then (data => {
                data = data[0];
                var htmls = `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>${data.Name}</title>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
                        <link rel="stylesheet" href="http://127.0.0.1:5500/assets/css/base.css">
                        <link rel="stylesheet" href="http://127.0.0.1:5500/assets/css/from-change.css">
                        <link rel="stylesheet" href="http://127.0.0.1:5500/assets/css/show-user.css">
                    </head>
                    <body>
                        
                        <div class="container-fluid">
                            <div class="user">
                                <div class="row">
                                    <div class="col-xl-4 col-lg-4 col-md-4 padding-right-3px padding-left-27px">
                                        <div class="user__basic">
        
                                            <div class="user__picture user__box">
                                                <img src="${data.Image}" alt="${data.Name}" class="user__img">
                                                <h2 class="user__name" id="userName-${data.id}">${data.Name}</h2>
                                                <p class="user__desc" id="">Đang theo học tại trường</p>
                                            </div>
        
                                            <div class="user__box">
                                                <div class="user__row">
                                                    <span class="user__title" id="">Mã số sinh viên: </span>
                                                    <p class="user__text d-inline" id="userId-${data.id}">${data.Id}</p>
                                                </div>
                                                <div class="user__row">
                                                    <span class="user__title" id="">Ngày sinh: </span>
                                                    <p class="user__text d-inline" id="userBirthday">${formatDay(data.Birthday)}</p>
                                                </div>
                                                <div class="user__row">
                                                    <span class="user__title" id="">Giới tính: </span>
                                                    <p class="user__text d-inline" id="userGender-${data.id}">${data.Gender}</p>
                                                </div>
                                            </div>
        
                                            <div class="user__box">
                                                <div class="user__row">
                                                    <span class="user__title" id="">Lớp: </span>
                                                    <p class="user__text d-inline" id="userClass-${data.id}">${data.Class}</p>
                                                </div>
                                                <div class="user__row">
                                                    <span class="user__title" id="">Ngành học: </span>
                                                    <p class="user__text d-inline" id="userMajor-${data.id}">${data.Major}</p>
                                                </div>
                                                <div class="user__row">
                                                    <span class="user__title" id="">Khóa học: </span>
                                                    <p class="user__text d-inline" id="userCohort-${data.id}">${data.Cohort}</p>
                                                </div>
                                                <div class="user__row">
                                                    <span class="user__title" id="">Khoa/Trường: </span>
                                                    <p class="user__text d-inline" id="userGroup-${data.id}">${data.Group}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
        
                                    <div class="col-xl-8 col-lg-8 col-md-8 padding-left-3px padding-right-27px">
                                        <div class="user__main">
                                            <div class="row">
                                                <div class="col-xl-4 col-lg-4 col-md-4">
                                                    <span class="user__title" id=""><i class="icon fa-solid fa-hands-praying"></i> Tôn giáo:</span>
                                                    <p class="user__text" id="userReligion-${data.id}">${data.Religion}</p>
                                                </div>
        
                                                <div class="col-xl-4 col-lg-4 col-md-4">
                                                    <span class="user__title" id=""><i class="icon fa-solid fa-people-group"></i> Dân tộc:</span>
                                                    <p class="user__text" id="userEthnic${data.id}">${data.Ethnic}</p>
                                                </div>
        
                                                <div class="col-xl-4 col-lg-4 col-md-4">
                                                    <span class="user__title" id=""><i class="icon fa-solid fa-passport"></i> Quốc tịch:</span>
                                                    <p class="user__text" id="userNational-${data.id}">${data.National}</p>
                                                </div>
                                            </div>
        
                                            <div class="row">
                                                <div class="col-xl-4 col-lg-4 col-md-4">
                                                    <span class="user__title" id=""><i class="icon fa-solid fa-location-dot"></i> Nơi cấp giấy khai sinh:</span>
                                                    <p class="user__text" id="userPaperBorn-${data.id}">${data.PaperBorn}</p>
                                                </div>
        
                                                <div class="col-xl-4 col-lg-4 col-md-4">
                                                    <span class="user__title" id=""><i class="icon fa-solid fa-map-location-dot"></i> Nơi sinh:</span>
                                                    <p class="user__text" id="userAddresssBorn-${data.id}">${data.AddressBorn}</p>
                                                </div>
        
                                                <div class="col-xl-4 col-lg-4 col-md-4">
                                                    <span class="user__title" id=""><i class="icon fa-solid fa-house-chimney"></i> Diện chính sách:</span>
                                                    <p class="user__text" id="userStateFamily-${data.id}">${data.StateFamily}</p>
                                                </div>
                                            </div>
        
                                            <div class="row">
                                                <div class="col-xl-4 col-lg-4 col-md-4">
                                                    <span class="user__title" id=""><i class="icon fa-solid fa-chalkboard-user"></i> Hệ đào tạo: </span>
                                                    <p class="user__text" id="userTrain-${data.id}">${data.Train}</p>
                                                </div>
        
                                            <div class="col-xl-4 col-lg-4 col-md-4">
                                                <span class="user__title" id=""><i class="icon fa-solid fa-sitemap"></i> Chi hội:</span>
                                                <p class="user__text" id="userGuild${data.id}">${data.Guild}</p>
                                            </div>

                                            <div class="col-xl-4 col-lg-4 col-md-4">
                                                <span class="user__title" id=""><i class="icon fa-solid fa-people-line"></i> Câu lạc bộ:</span>
                                                <p class="user__text" id="userClub-${data.id}">${data.Club}</p>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-xl-4 col-lg-4 col-md-4">
                                                <span class="user__title" id=""><i class="icon fa-regular fa-calendar-days"></i> Ngày vào Đảng:</span>
                                                <p class="user__text" id="userDayParty-${data.id}">${formatDay(data.DayParty)}</p>
                                            </div>

                                            <div class="col-xl-4 col-lg-4 col-md-4">
                                                <span class="user__title" id=""><i class="icon fa-solid fa-id-card"></i> Số CCCD/CMND:</span>
                                                <p class="user__text" id="userPeopleId-${data.id}">${data.PeopleId}</p>
                                            </div>

                                            <div class="col-xl-4 col-lg-4 col-md-4">
                                                <span class="user__title" id=""><i class="icon fa-regular fa-calendar-days"></i> Ngày cấp CCCD/CMND:</span>
                                                <p class="user__text" id="userDayPeopleId-${data.id}">${data.DayPeopleId}</p>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-xl-4 col-lg-4 col-md-4">
                                                <span class="user__title" id=""><i class="icon fa-solid fa-location-dot"></i> Nơi cấp CCCD/CMND:</span>
                                                <p class="user__text" id="userAddressPeopleId${data.id}">${data.AddressPeopleId}</p>
                                            </div>

                                            <div class="col-xl-4 col-lg-4 col-md-4">
                                                <span class="user__title" id=""><i class="icon fa-solid fa-location-dot"></i> Email:</span>
                                                <p class="user__text" id="userEmail-${data.id}">${data.Email}</p>
                                            </div>

                                            <div class="col-xl-4 col-lg-4 col-md-4">
                                                <span class="user__title" id=""><i class="icon fa-solid fa-phone"></i> Số điện thoại:</span>
                                                <p class="user__text" id="userPhone-${data.id}">${data.Phone}</p>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-12">
                                                <span class="user__title" id=""><i class="fa-solid fa-pen"></i> Giới thiệu về bản thân:</span>
                                                <p class="user__text" id="userIntro-${data.id}">${data.Intro}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </body>
                </html>
                `;
        
                const blob = new Blob([htmls], { type: 'text/html' });
        
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.target = '_blank';
        
                // Kích hoạt liên kết tải xuống
                link.click();
        
                // Giải phóng URL đối tượng
                URL.revokeObjectURL(link.href);
            });
    });
});


//show form-change 
import { formElement, submitBtn, keys, failBtn, closeBtn, shadow } from "./form-change.js";

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

var idStudentMore = [];

[...students].forEach(student => {
    idStudentMore.push(student.querySelector('a[class=student__list-link][id*=studentMore]'));
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
        var myFunction = function (event) {
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
        }

        submitBtn.addEventListener('click', myFunction);

        failBtn.addEventListener('click', () => submitBtn.removeEventListener('click', myFunction));
        closeBtn.addEventListener('click', () => submitBtn.removeEventListener('click', myFunction));
        shadow.addEventListener('click', () => submitBtn.removeEventListener('click', myFunction));
    });

});

var searchBtn = document.querySelector('#search');
searchBtn.addEventListener('change', () => { 
    var mssv = searchBtn.value;

    fetch ('http://localhost:3000/student?Id=' + mssv)
        .then (response => response.json())
        .then (data => {
            console.log(data);
            if (data.length == 0) {
                swal("Oops!", "Sinh viên bạn tìm không có trong hệ thống!");
            }
            else {
                data = data[0];
                var link = document.createElement('a');
                link.href = `#${data.id}`;
                link.click();
            }
        });
});

var hiddenBtn = document.querySelector('#header #hidden');

hiddenBtn.addEventListener('click', () => {
    var header = document.querySelector('#header');
    var icon = hiddenBtn.querySelector('#iconHidden');
    var body = document.querySelector('#body');


    console.log(body);  
    
    if (header.classList.contains('scroll-up')) {
        header.classList.remove('scroll-up');
        icon.classList.remove('arrow-down');
        body.classList.remove('margin-top-96px');
    }
    else {
        header.classList.add('scroll-up');
        icon.classList.add('arrow-down');
        body.classList.add('margin-top-96px');
    }
});

export { students, renderForm };