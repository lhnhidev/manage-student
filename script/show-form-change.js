var students = document.querySelectorAll('.container .student');

students.forEach(student => {
    var changeBtn = student.querySelector('.btn-change');
    changeBtn.addEventListener('click', () => {
        document.querySelector('#shadow').classList.add('show');
        document.querySelector('body').style.overflow = 'hidden';
    });
});

export { students };