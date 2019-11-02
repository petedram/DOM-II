// Your code goes here
const h2Pop = document.querySelector('h2');
console.log('h2', h2Pop);

h2Pop.addEventListener("mouseenter", () => {
  h2Pop.style.transform="scale(1.2)";
  h2Pop.style.transition="all 0.3s";
})

h2Pop.addEventListener("mouseleave", () => {
  h2Pop.style.transform = "scale(1)";
  h2Pop.style.transition="all 0.3s";
})


const changeImage = document.querySelector('.intro img');
changeImage.addEventListener('dblclick', () => {
  changeImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXIhWxg3gJyBPPgQMfMGtReCsmuUZYlPmAL023Y94rT4MZ3CYJ0w&s";
})

const changeFont = document.querySelector('body');
changeFont.addEventListener('keydown', () => {
  changeFont.style.fontFamily =  "Comic Sans MS, cursive, sans-serif";
})

const dragImage = document.querySelector('img');
dragImage.addEventListener('dragstart', () => {
  alert('no dragging!');
})

const focusNavHome = document.querySelectorAll('.nav a');
focusNavHome.forEach(title => {
    title.addEventListener('focus', () => {
        title.style.color = "pink";
    });
});
focusNavHome.forEach(title => {
    title.addEventListener('blur', () => {
        title.style.color = "black";
    });
});

const mouseDown = document.querySelector('.text-content h2');
mouseDown.addEventListener('mousedown', () => {
  mouseDown.style.transform = "scale(1.1)";
})

const mouseOver = document.querySelector('.img-content img');
mouseOver.addEventListener('mouseover', () => {
  mouseOver.style.transform = "scale(1.1)";
  console.log('mouseover');
})

const mouseOut = document.querySelector('.img-content img');
mouseOut.addEventListener('mouseout', () => {
  mouseOut.style.transform = "scale(1)";
  console.log('mouseout');
})



