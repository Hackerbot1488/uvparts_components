const swipeWrapper = document.getElementById('help--swipe-wrapper');
const SwipeButtonsContainer = document.getElementById('help-swipe-buttons')

let activeSlideButton = SwipeButtonsContainer.getElementsByClassName('swipe-buttons__button_active')[0];
let currentActiveSlide = 0;

wrapElement(swipeWrapper);

function setActiveSlideButton (button) {
    activeSlideButton.classList.remove('swipe-buttons__button_active');
    button.classList.add('swipe-buttons__button_active');
    activeSlideButton = button;
    currentActiveSlide = button.dataset.number;
}

function swipeSlide () {
    swipeWrapper.style = `transform: translateX(calc((((50% - 7.5px) / 2) + 7.5px) * ${-currentActiveSlide}));`
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
        swipeWrapper.style = '';
    } else {
        swipeSlide();
    }
})

SwipeButtonsContainer.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('swipe-buttons__button') & target !== activeSlideButton) {
        setActiveSlideButton(target);
        swipeSlide();
    }
})

swipeWrapper.addEventListener('swipeleft', () => {
    if (currentActiveSlide > 2) return;
    currentActiveSlide++;
    setActiveSlideButton(document.querySelector(`[data-position="help-${currentActiveSlide}"]`));
    swipeSlide();
})

swipeWrapper.addEventListener('swiperight', () => {
    if (currentActiveSlide < 1) return;
    currentActiveSlide--;
    setActiveSlideButton(document.querySelector(`[data-position="help-${currentActiveSlide}"]`));
    swipeSlide();
})