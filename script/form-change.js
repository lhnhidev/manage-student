var shadow = document.querySelector('#shadow');
var formElement = document.querySelector('#form');
var closeBtn = formElement.querySelector('#close');
var failBtn = formElement.querySelector('#fail');

function fadeOutForm() {
    document.querySelector('body').style.overflow = 'unset';
    document.querySelector('#shadow').classList.add('theFadeOut');
    setTimeout(function () {
        document.querySelector('#shadow').classList.remove('show');
        document.querySelector('#shadow').classList.remove('theFadeOut');
    }, 1000);
}

closeBtn.addEventListener('click', () => fadeOutForm());
failBtn.addEventListener('click', () => fadeOutForm());
shadow.addEventListener('click', () => fadeOutForm());
formElement.addEventListener('click', (event) => event.stopPropagation());