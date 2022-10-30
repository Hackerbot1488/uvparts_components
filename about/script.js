const minOffset = 10;
const timeOfMove = 500;
const mainContainer = document.getElementById('container-fixed');
const [firstSlide, secondSlide] = document.getElementsByClassName('container_swipeble');

let [currentPositionX, currentPositionY] = [0, 0];

const swipeEvent = new Event('swipe');



mainContainer.addEventListener('pointerdown', (e) => {
    let firstPositionX = e.clientX;
    setTimeout(() => {
        let secondPositionX = e.clientX;
        console.log(firstPositionX, ' ', secondPositionX)
    }, timeOfMove);
})