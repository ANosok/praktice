let menu = document.querySelector("header ul");
let menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", function(e){
    e.preventDefault();
    menu.classList.toggle("show-menu");
    menuToggle.classList.toggle("active");
});

window.addEventListener('resize', function(){
    if(this.window.innerWidth> 480 && menu.classList.contains('show-menu')){
        menu.classList.remove('show-menu');
        menuToggle.classList.remove("active");
    }
})



const slider = document.querySelector('.flex1');
const prevbutton = document.querySelector('.point');
const nextbutton = document.querySelector('.point2');
const slides = Array.from(slider.querySelectorAll('.box'));
const slideCount = slides.length;
let slideIndex = 0;

//обработчик события
prevbutton.addEventListener('click', showPreviousSlide);
nextbutton.addEventListener('click', showNextSlide);

//событие для кнопок
//предыдущий слайд
function showPreviousSlide(){
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

//слдеующий слайд
function showNextSlide(){
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}

//отображение слайдера
function updateSlider() {
    slides.forEach((slide, index) => {
       
            if(index === slideIndex ){
                slide.style.display = 'block';  
            }   else {
                slide.style.display = 'none';
            }  
    });
}

//инициализация слайдера
if(this.window.innerWidth > 375 && this.window.innerWidth < 720 ) {
    updateSlider();
}
