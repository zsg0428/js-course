'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');



console.log(btnsOpenModal)

function openModal () {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

for (let i = 0; i<btnsOpenModal.length; i++) {
    console.log(btnsOpenModal[i].textContent)
    btnsOpenModal[i].addEventListener('click',openModal)
}
const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
btnCloseModal.addEventListener('click',closeModal)

overlay.addEventListener('click',closeModal)

document.addEventListener('keydown', check)

//check which key is which
function check (e){
    if (e.key === 'Escape'){
        if (!modal.classList.contains('hidden')){
            closeModal()
        }
    }
    console.log(e)
}