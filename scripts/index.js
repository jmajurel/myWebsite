var NB_OF_PAGE = 5; 

var nextArrow = document.getElementById("next-arrow");

nextArrow.addEventListener('click', () => window.scrollTo({
    top: document.body.scrollHeight/NB_OF_PAGE,
    behavior: 'smooth',
}));