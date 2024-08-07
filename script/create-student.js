var header = document.querySelector('#header');
var createBtn = header.querySelector('#create');

import { formElement, submitBtn, getForm } from "./form-change.js";
import { renderForm } from "./index.js";

createBtn.addEventListener('click', () => {
    formElement.querySelector('#heading').innerHTML = 'Thêm sinh viên';
    submitBtn.innerHTML = 'Thêm';

    renderForm('http://localhost:3000/formDefault')

    document.querySelector('#shadow').classList.add('show');
    document.querySelector('body').style.overflow = 'hidden';
    getForm();
});