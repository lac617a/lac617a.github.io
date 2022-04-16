init()

function init() {
  document.addEventListener('DOMContentLoaded',() => {
    handleScroll();
    handleNavbar();
  });
};

const handleNavbar = () => {
  const menu = document.getElementById("menu");
  const items = document.getElementById("items");
  
  menu.addEventListener("click",() => {
    items.classList.toggle("is-active");
  });

  items.addEventListener("click",(e) => {
    if (e.target.classList.contains('is-active')) {
      items.classList.toggle("is-active");
    }
  },false)
};

const handleScroll = () => {
  
};