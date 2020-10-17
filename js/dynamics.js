function scrollToBottom(){
    var speed = 500;
    var top = $('.requestWrapper').offset().top;
    $('html, body').animate({scrollTop: top}, speed);
    removeBtn();
    return false;
};
function scrollToTop(){
    var speed = 500;
    var top = $('.all1').offset().top;
    $('html, body').animate({scrollTop: top}, speed);
    removeBtn();
    return false;
};
function scrollToMiddle(){
    var speed = 500;
    var top = $('.all2').offset().top;
    $('html, body').animate({scrollTop: top}, speed);
    removeBtn();
    return false;
};
function scrollToRates(){
    var speed = 500;
    var top = $('.all3').offset().top;
    $('html, body').animate({scrollTop: top}, speed);
    removeBtn();
    return false;
};
function toggleBurger(){
    document.querySelector('.menu').classList.toggle('toggleBtn');
    document.querySelector('.bi1').classList.toggle('bi1t');
    document.querySelector('.bi2').classList.toggle('bi2t');
    document.querySelector('.bi3').classList.toggle('bi3t');
    document.querySelector('.burgerWrapper').classList.toggle('bwon');
};
window.addEventListener('scroll', removeBtn);
function removeBtn(){
    document.querySelector('.menu').classList.remove('toggleBtn');
    document.querySelector('.bi1').classList.remove('bi1t');
    document.querySelector('.bi2').classList.remove('bi2t');
    document.querySelector('.bi3').classList.remove('bi3t');
    document.querySelector('.burgerWrapper').classList.add('bwon');
};