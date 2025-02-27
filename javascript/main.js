/* SHOW MENU */
const showMenu = (toggleId, navId) => {
  // Get the toggle button and navigation menu
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);
  
  // Validate that toggle and nav elements exist before adding event listener
  if (toggle && nav) {
    // Add click event listener to the toggle button
    toggle.addEventListener('click', () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.toggle('show-menu');
    });
  }
}

// Call the function to show the menu when the toggle is clicked
showMenu('nav-toggle', 'nav-menu');



/* SWIPER JS */
// Initialize the main swiper
let swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 0,  // Adjust space between slides if needed
  slidesPerView: 0,  // Set to 1 to display one slide at a time
});

// Initialize the thumbnail swiper
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,  // Adjust space between slides if needed
  slidesPerView: 1,  // Set this to show a few thumbnails at once, adjust as needed
  effect: 'fade',
  loop: true,

  thumbs: {
    swiper: swiper2,  // Link the main swiper to the thumbs swiper
  },
});



/* POPUP */
/* OPEN */
const btnOpenVideo = document.querySelectorAll('.islands__video-content');
const islandsPopup = document.getElementById('popup');

function poPup() {
  // We add the show-popup class to the div tag with the islands__popup class
  islandsPopup.classList.add('show-popup');
}

// Adding event listener to buttons
btnOpenVideo.forEach(btn => {
  btn.addEventListener('click', poPup);
});

/* CLOSE */
const btnCloseVideo = document.getElementById('popup-close');

btnCloseVideo.addEventListener('click', () =>{
   // Remove the 'show-popup' class from the popup element
  islandsPopup.classList.remove('show-popup');
});



/* GSAP ANIMATION */
const controlImg = document.querySelectorAll('.controls__images');

function ScrollAnimation (){
  // GSAP animation syntax (ensure GSAP is included in your project)
  gsap.from('.islands__subtitle', {opacity: 0, duration: .2, delay: .2, y: -20});
  gsap.from('.islands__title', {opacity: 0, duration: .3, delay: .3, y: -20});
  gsap.from('.islands__desc', {opacity: 0, duration: .4, delay: .4, y: -20});
  gsap.from('.islands__btn', {opacity: 0, duration: .5, delay: .5, y: -20});
  gsap.from('.islands__video-content', {opacity: 0, duration: .6, delay: .6, y: -20});

  islandsPopup.classList.remove('show-popup');
};

// Adding event listeners
controlImg.forEach(c => c.addEventListener('click', ScrollAnimation));