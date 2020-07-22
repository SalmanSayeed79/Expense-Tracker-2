let sign_in=document.querySelector("#sign-in-modal");
let sign_up=document.querySelector("#sign-up-modal");

let in_button=document.querySelector('#in-button');
let up_button=document.querySelector('#up-button');

let in_close=document.querySelector("#close-sign-in");
let up_close=document.querySelector("#close-sign-up");

in_button.addEventListener("click",()=>{
    sign_in.classList.add("modal_show");
})
up_button.addEventListener("click",()=>{
    sign_up.classList.add("modal_show");
})

in_close.addEventListener('click',()=>{
    sign_in.classList.remove("modal_show");
})
up_close.addEventListener('click',()=>{
    sign_up.classList.remove("modal_show");
})
let date=new Date();
date=date.getDate()+'-'+date.getMonth()+'-'+date.getFullYear();
console.log(date);