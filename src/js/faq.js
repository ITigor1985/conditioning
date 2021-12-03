const refs ={
    ulEl: document.querySelector('.faq__list'),
    btnsOpen: document.querySelectorAll('.open'),
    btnsClose: document.querySelectorAll('.close'),
    divAnswers:document.querySelectorAll('.answer')
}


refs.btnsOpen.forEach(btnOpen => {
    btnOpen.addEventListener('click', ()=>{
        btnOpen.classList.toggle('is-hidden')
    });
})
// refs.ulEl.addEventListener('click', selectBtn);
// function selectBtn(event){
//     console.log(refs.btnOpen)
//     if (event.target.nodeName !== "BUTTON") {
//         console.log(event.target);
//         return;
//       }
//       if(event.target.classList.contains('open')){
//         event.target.classList.add('is-hidden');
//         refs.btnClose.classList.remove('is-hidden');
//         refs.divAnswer.classList.remove('is-hidden');
//       }else{
//         event.target.classList.add('is-hidden');
//         refs.btnOpen.classList.remove('is-hidden');
//         refs.divAnswer.classList.add('is-hidden');
//       }
        
    
// }

// refs.ulEl.addEventListener('click', closeAnswer);
// function closeAnswer(event){
//     console.log("asd",event.target)
//     if (event.target !== "BUTTON") {
//         return;
//       }
//       event.target.classList.add('is-hidden');
//     refs.btnOpen.classList.remove('is-hidden');
//     refs.divAnswer.classList.add('is-hidden');
// }