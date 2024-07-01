const mainnd = document.querySelector('.main-nd');
const logo = document.querySelector('.logo');
window.addEventListener('scroll', function(){
    if(this.scrollY > 200){
        mainnd.classList.add('slidedown');
        logo.style.color = 'linear-gradient(200deg, #bed2bc, #ada9c2)';
    }else{
        mainnd.classList.remove('slidedown');
        logo.style.color = '';
    }
} )