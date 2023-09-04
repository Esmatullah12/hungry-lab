const navBarsBtn = document.querySelector(".bars-btn");
const navXmarkBtn = document.querySelector(".xmark-btn");
const navMenuBtns = document.querySelector('.nav-menu-btns');
const navMenu = document.querySelector(".nav-menu")

navMenuBtns.onclick = function () {
  navBarsBtn.classList.toggle('active');
  navXmarkBtn.classList.toggle('active');
  
};

navBarsBtn.addEventListener("click", function (){
  if(window.innerWidth <=840){
    navMenu.style.display = 'flex';
  }
  
})

navXmarkBtn.addEventListener("click",function () {
  if(window.innerWidth <=840){
    navMenu.style.display = 'none';
  }
})

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
      navMenu.style.display = 'flex';
  }
});

