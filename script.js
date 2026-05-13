const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting)
      e.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in')
  .forEach(el => observer.observe(el));


/* PROJECT SLIDER */

const slider = document.getElementById("projectsSlider");

document.getElementById("nextBtn")
  .addEventListener("click", () => {

    slider.scrollBy({
      left: 380,
      behavior: "smooth"
    });

  });

document.getElementById("prevBtn")
  .addEventListener("click", () => {

    slider.scrollBy({
      left: -380,
      behavior: "smooth"
    });

  });


/* MOUSE DRAG */

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {

  isDown = true;

  slider.classList.add("dragging");

  startX = e.pageX - slider.offsetLeft;

  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
});

slider.addEventListener("mouseup", () => {
  isDown = false;
});

slider.addEventListener("mousemove", (e) => {

  if (!isDown) return;

  e.preventDefault();

  const x = e.pageX - slider.offsetLeft;

  const walk = (x - startX) * 1.2;

  slider.scrollLeft = scrollLeft - walk;
});
