// Slideshow Functionality
let slides = document.querySelectorAll(".slide");
let currentIndex = 0;

document.querySelector(".next").addEventListener("click", () => {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
});

document.querySelector(".prev").addEventListener("click", () => {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    slides[currentIndex].classList.add("active");
});

// Pop-up for Customization
let popup = document.getElementById("popup");
let customizeBtn = document.querySelector(".customize-btn");
let closeBtn = document.querySelector(".close");
let confirmBtn = document.querySelector(".confirm");

// Show popup when clicking the Customize button
customizeBtn.addEventListener("click", () => {
    popup.style.display = "block";
});

// Close popup when clicking the X button
closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

// Redirect to another page when clicking Confirm
confirmBtn.addEventListener("click", () => {
    window.location.href = "customize.html"; // Change this to your target page
});

// Close popup when clicking outside the box
window.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const product = this.closest(".product");
            const productName = product.querySelector("h3").textContent;
            const productPrice = product.querySelector("p").textContent;
            const productImage = product.querySelector("img").src;

            const cartItem = { name: productName, price: productPrice, image: productImage };

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            cart.push(cartItem);

            localStorage.setItem("cart", JSON.stringify(cart));

            alert("Item added to cart!");
        });
    });
});