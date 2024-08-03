var student = document.querySelector('#student');
var changeBtn = student.querySelector('#change');
var removeBtn = student.querySelector('#remove');

changeBtn.addEventListener('click', () => {
    document.querySelector('#shadow').classList.add('show');
});