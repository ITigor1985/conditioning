const refs ={
    btnOpen: document.querySelectorAll('.open'),
    btnClose: document.querySelectorAll('.close'),
    divAnswer:document.querySelectorAll('.answer')
}

refs.btnOpen.addEventListener('click', openAnswer);
function openAnswer(){
    refs.btnOpen.classList.add('is-hidden');
    refs.btnClose.classList.remove('is-hidden');
    refs.divAnswer.classList.remove('is-hidden');
}

refs.btnClose.addEventListener('click', closeAnswer);
function closeAnswer(){
    refs.btnClose.classList.add('is-hidden');
    refs.btnOpen.classList.remove('is-hidden');
    refs.divAnswer.classList.add('is-hidden');
}