import { postFetch } from "./fetch.js";

var shadow = document.querySelector('#shadow');
var formElement = document.querySelector('#form');
var closeBtn = formElement.querySelector('#close');
var failBtn = formElement.querySelector('#fail');
var submitBtn = formElement.querySelector('#submit');


//Cancel, Submit, Close the Form Change
function fadeOutForm() {
    document.querySelector('body').style.overflow = 'unset';
    document.querySelector('#shadow').classList.add('theFadeOut');
    setTimeout(function () {
        document.querySelector('#shadow').classList.remove('show');
        document.querySelector('#shadow').classList.remove('theFadeOut');
    }, 1000);
}

closeBtn.addEventListener('click', () => fadeOutForm());

failBtn.addEventListener('click', (event) => {
    event.preventDefault();
    fadeOutForm();
});

shadow.addEventListener('click', () => fadeOutForm());
formElement.addEventListener('click', (event) => event.stopPropagation());
//End Cancel, Submit, Close the Form Change

//Preview avatar
const changeAvtBtn = formElement.querySelector('#customFile');
const previewImg = formElement.querySelector('#formImage');
const reader = new FileReader();
var flag = false;

changeAvtBtn.addEventListener('change', () => {
    const fileImg = changeAvtBtn.files[0];

    reader.addEventListener('load', () => previewImg.src = reader.result);

    if (fileImg) {
        flag = true;
        reader.readAsDataURL(fileImg);
    }
});
//End preview avatar

// Updata information
var keys = ['Image', 'Name', 'Id', 'Birthday', 'Gender', 'Class', 'Major', 'Cohort', 'Group', 'Religion', 'Ethnic', 'National', 'PaperBorn', 'AddressBorn', 'StateFamily', 'Train', 'Guild', 'Club', 'DayParty', 'PeopleId', 'DayPeopleId', 'AddressPeopleId', 'Email', 'Phone', 'Intro'];

const promise = new Promise((resolve, reject) => {
    resolve();
});

var changeData = await promise
    .then (() => {
        var json = {};
        submitBtn.addEventListener('click', function(event) {
            event.preventDefault();
            var usersInformation = form.querySelectorAll('[id*=form]');
            usersInformation[0].value = usersInformation[0].src;
            var i = 0;
            [...usersInformation].forEach(user => {
                // Đã lấy ra được thông tin update, chỉ cần up lên json
                json[keys[i++]] = user.value;
                // console.log(keys[i++], user.value);
            });
        });        
        return json;
    })

submitBtn.addEventListener('click', () => {
    // console.log(changeData);/
    console.log(changeData);
    // postFetch(changeData);
    // console.log(res);
    // async function postFetch(options) {
});