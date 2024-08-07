import { formElement, submitBtn } from "./form-change.js";

var students = document.querySelectorAll('.container .student');

students.forEach(student => {
    var changeBtn = student.querySelector('.btn-change');
    changeBtn.addEventListener('click', () => {
        formElement.querySelector('#heading').innerHTML = 'Chỉnh sửa thông tin';
        submitBtn.innerHTML = 'Cập nhật';
        document.querySelector('#shadow').classList.add('show');
        document.querySelector('body').style.overflow = 'hidden';
    });
});

export { students };