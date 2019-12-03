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
    headerImg.style.transform = `scale(${scale})`;
}
let scale = 1;
const headerImg = document.querySelector('img');
headerImg.addEventListener('wheel', zoom);

// resize
const body = document.querySelector('body');
window.addEventListener('resize', () => {
    body.style.backgroundColor = '#eee';
});

// dblclick
const btn = document.querySelector('.btn')
btn.addEventListener('dblclick', click);
function click() {
    btn.innerHTML = "Clicked Me!";
}
// click
const dest = document.querySelector('.destination:nth-child(2)');
dest.addEventListener('click', event => {
    dest.style.backgroundColor = 'grey';
    event.stopPropagation();
});
// contextmenu 
headerImg.addEventListener('contextmenu', e => {
    e.preventDefault();
});

// beforeprint
window.addEventListener('beforeprint', (event) => {
    alert('Consider Environment Before Printing This Page');
});

// afterprint
window.addEventListener('afterprint', (event) => {
    alert('You Just Printed This Page');
});

// load
let images = document.getElementsByTagName("img");
for (let image of images) {
  image.addEventListener("load", fadeImg);
  image.style.opacity = "0";
}

function fadeImg() {
  this.style.transition = "opacity 2s";
  this.style.opacity = "1";
}

// Propagation
const pick = document.querySelector('.content-pick');
pick.addEventListener('click', event => {
    pick.style.backgroundColor = 'lightgrey';
});


// prevent Default
const navItem = document.getElementById("myAnchor").addEventListener("click", function(event){
    event.preventDefault()
});