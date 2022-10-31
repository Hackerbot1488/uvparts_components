const minOffset = 8;
const timeOfMove = 500;

const swipeLeftEvent = new Event('swipeleft');
const swipeRightEvent = new Event('swiperight');

let [touchStartX, touchEndX] = [0, 0];
let timeTouchStart = 0;

function wrapElement(element) {
    element.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX
        timeTouchStart = Date.now()
    })
    element.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX
        if (Date.now() - timeTouchStart <= timeOfMove && Math.abs(touchStartX - touchEndX) >= minOffset) {
            if (touchStartX > touchEndX) {
                element.dispatchEvent(swipeLeftEvent);
            } else {
                element.dispatchEvent(swipeRightEvent);
            }
        }
    })
}
