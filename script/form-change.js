var formElement = document.querySelector('#form');
var closeBtn = formElement.querySelector('#close');

closeBtn.addEventListener('click', () => {
    document.querySelector('#shadow').classList.add('theFadeOut');
    setTimeout(function () {
        document.querySelector('#shadow').classList.remove('show');
        document.querySelector('#shadow').classList.remove('theFadeOut');
    }, 1000);
});
