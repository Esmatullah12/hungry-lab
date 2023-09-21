const productImages = document.querySelectorAll(".product-image");
const imagePopupContainer = document.querySelector(".image-popup");
const nextImageBtn = document.querySelector(".next-btn")
const backImageBtn = document.querySelector(".back-btn")
const popupImage = document.querySelector(".popup-content")
const closePopupBtn = document.querySelector('.close-popup')
const popupBackground = document.querySelector(".overlay")

var swiper = new Swiper('.swiper', {
    slidesPerView: 4.8,
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

function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
}

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
