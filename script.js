const productImages = document.querySelectorAll(".product-image");
const imagePopupContainer = document.querySelector(".image-popup");
const nextImageBtn = document.querySelector(".next-btn")
const backImageBtn = document.querySelector(".back-btn")
const popupImage = document.querySelector(".popup-content")
const closePopupBtn = document.querySelector('.close-popup')
const popupBackground = document.querySelector(".overlay")
const menuBtn = document.querySelector(".menu-btn")
const navbar = document.querySelector(".navbar")
const navbarMenu = document.querySelector('.navbar-menu')


menuBtn.addEventListener("click", () =>{
    navbar.style.border = "none"
    navbar.style.boxShadow = "none"
    navbar.style.backgroundColor = "transparent"
    navbarMenu.style.display = "none"

})

menuBtn.addEventListener("mouseover", () =>{
    navbar.style.border = "0.5px solid gray"
    navbar.style.boxShadow = "rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px"
    navbar.style.backgroundColor = "white"
    navbarMenu.style.display = "block"
})

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
