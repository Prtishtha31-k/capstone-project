
const tabs = document.querySelectorAll('.tab');
const sections = {
  pins: document.getElementById('pins'),
  boards: document.getElementById('boards'),
  collages: document.getElementById('collages')
};

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    
    document.querySelector(".tab.active").classList.remove("active");
    tab.classList.add("active");

    
    Object.values(sections).forEach(sec => sec.classList.add("hidden"));

    
    const target = tab.getAttribute("data-tab");
    sections[target].classList.remove("hidden");
  });
});


const pins = document.querySelectorAll(".pin img");

pins.forEach(img => {
  img.addEventListener("mouseenter", () => img.style.opacity = "0.9");
  img.addEventListener("mouseleave", () => img.style.opacity = "1");
});