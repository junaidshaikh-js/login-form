// get handles
let loginBtn = document.querySelector('.btn');
let crossSign = document.querySelector('.cross-sign');
let cancleBtn = document.querySelector('#cancle-btn');
let modal = document.querySelector('.modal');
let wrapper = document.querySelector('.wrapper');

loginBtn.addEventListener('click', show);
function show() {
    modal.style.display = 'block';
}

crossSign.addEventListener('click', close);
cancleBtn.addEventListener('click', close);
function close() {
    modal.style.display = 'none';
}

