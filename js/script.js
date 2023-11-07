const productImages = document.querySelectorAll(".product-image");
const imagePopupContainer = document.querySelector(".image-popup");
const nextImageBtn = document.querySelector(".next-btn")
const backImageBtn = document.querySelector(".back-btn")
const popupImage = document.querySelector(".popup-content")
const closePopupBtn = document.querySelector('.close-popup')
const popupBackground = document.querySelector(".overlay")



document.addEventListener("DOMContentLoaded", () =>{
  const nextBtnForm = document.getElementById('form-next-btn')
  const fromStep1 = document.querySelector('.signup-form-step1')
  const fromStep2 = document.querySelector('.signup-form-step2')
  nextBtnForm.addEventListener("click", (event) =>{
    event.preventDefault()
    fromStep1.style.display = "none"
    fromStep2.style.display = "block"
  })
})




const productPage = (pageName) =>{
  window.open(`/Users/SilkRoad/Desktop/Ordinary Repo/hungry-lab copy/${pageName}`, '_blank')
}

var swiper = new Swiper('.cards-container', {
  slidesPerView: 4,
  direction: getDirection(),
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

var swiper = new Swiper(".feature-container", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
}

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

var swiper = new Swiper(".hero-images", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});

productImages.forEach(productImage => {
    productImage.addEventListener('click', (event) =>{
        popupImage.src = event.target.src
        imagePopupContainer.style.display = "block"
        popupBackground.style.display = "block"
    })
});

let popupImageIndex = 0;
nextImageBtn.addEventListener('click', () =>{
    popupImage.src = productImages[popupImageIndex+1].src
    popupImageIndex++
    console.log(popupImageIndex)
})

backImageBtn.addEventListener('click', () =>{
    popupImage.src = productImages[popupImageIndex-1].src
    popupImageIndex--
    console.log(popupImageIndex)
})

closePopupBtn.addEventListener('click', () =>{
    imagePopupContainer.style.display = "none"
    popupBackground.style.display = "none"
})



















// const productImages = document.querySelectorAll('.product-image');
// const imagePopup = document.querySelector('.image-popup');
// const popupContent = document.getElementById('popupImage');
// const closePopup = document.querySelector('.close-popup');
// const nextButton = document.getElementById('nextButton');

// let currentIndex = 0;

// function showImage(index) {
//     if (index >= 0 && index < productImages.length) {
//         popupContent.src = productImages[index].src;
//         currentIndex = index;
//     }
// }

// productImages.forEach((image, index) => {
//     image.addEventListener('click', () => {
//         showImage(index);
//         imagePopup.style.display = 'block';
//     });
// });

// closePopup.addEventListener('click', () => {
//     imagePopup.style.display = 'none';
// });

// nextButton.addEventListener('click', () => {
//     currentIndex++;
//     if (currentIndex >= productImages.length) {
//         currentIndex = 0;
//     }
//     showImage(currentIndex);
// });

// window.addEventListener('click', (e) => {
//     if (e.target === imagePopup) {
//         imagePopup.style.display = 'none';
//     }
// });

// showImage(currentIndex);
