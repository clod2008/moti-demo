const $cursor = document.querySelector('.cursor__circle');
const $hover = document.querySelectorAll('a');


document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hover.length; i++) {$hover[i].addEventListener('mouseenter', onMouseHover);$hover[i].addEventListener('mouseleave', onMouseHoverOut);
}


function onMouseMove(e) {
  TweenMax.to($cursor, .4, {
    x: e.pageX - 16,
    y: e.pageY - 16 });

}


function onMouseHover() {
  TweenMax.to($cursor, .4, {
    scale: 3 });

}
function onMouseHoverOut() {
  TweenMax.to($cursor, .4, {
    scale: 1 });

}