// Your code goes here

const img = document.querySelectorAll('img');

// Mouse Enter
img.forEach(item => item.addEventListener('mouseenter', () => {
        item.style.transform = "scale(1.03)";
        item.style.transition="all 0.3s";
}));


// Mouse Leave
img.forEach(item => item.addEventListener('mouseleave', () => {
    item.style.transform = "scale(1.0)";
    item.style.transition="all 0.3s";
}));

// Wheel
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
}
let scale = 1;
const el = document.querySelector('img');
el.addEventListener('wheel', zoom);

// resize
const body = document.querySelector('body');
window.addEventListener('resize', () => {
    body.style.backgroundColor = '#eee';
});