const hamburger = document.querySelector('.hamburger');
const nav1 = document.querySelector('.nav-section');
const nav2 = document.querySelector('.join-section');

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    nav1.classList.toggle("active");
    nav2.classList.toggle("active");
})