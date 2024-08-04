var student = document.querySelector('#student');
var changeBtn = student.querySelector('#change-1');
var removeBtn = student.querySelector('#remove-1');

changeBtn.addEventListener('click', () => {
    document.querySelector('#shadow').classList.add('show');
    document.querySelector('body').style.overflow = 'hidden';
});