const menuButton = document.querySelectorAll('.menuButton')
const menuOverlay = document.querySelector('.menuOverlay')
const nav = document.querySelector('.nav')

menuButton.forEach((button) => {
    button.addEventListener('click', () => {
      if (menuOverlay.style.clipPath === 'circle(150% at 50% 50%)') {
        menuOverlay.style.clipPath = 'circle(0% at 50% 50%)'
        menuOverlay.style.transition = 'clip-path 1s ease';
      } else {
        menuOverlay.style.clipPath = 'circle(150% at 50% 50%)'
        menuOverlay.style.transition = 'clip-path 1s ease';
      }
    });
  });


nav.addEventListener('click', ()=>{
    menuOverlay.style.clipPath = 'circle(0% at 50% 50%)'
})
 