// Setup and start animation
// var typed = new Typed("#element", {
//   strings: [",", "", ""],
//   typeSpeed: 50,
//   loop: true,
// })

var typed = new Typed("#element", {
  strings: [
    '<span style="color: blue;">Frontend Developer</span>',
    '<span style="color: cyne;">React JS developer</span>',
    // '<span style="color: rgb(73, 3, 153);">Full stack Java developer.</span>',
  ],
  typeSpeed: 50,
  loop: true,
  startDelay: 1000,
  showCursor: true,
  smartBackspace: true,
  backDelay: 700,
  shuffle: false,
});

// ScrollReveal()
ScrollReveal().reveal(".boxes", {
  delay: 500,
  reset: true,
  easing: "ease-in",
  distance: "100px",
  duration: 500,
  origin: "top",
  scale: 0.5,
  interval: 100,
});

ScrollReveal().reveal(".project", {
  delay: 500,
  reset: true,
  easing: "ease-in",
  distance: "100px",
  duration: 500,
  origin: "left",
  scale: 0.5,
  interval: 100,
});
