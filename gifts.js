document.addEventListener("DOMContentLoaded", function () {
    const giftsList = document.getElementById("gifts-list");

    let gifts = [
        { name: "Ceramic Candle set  ", price: 400, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\hanna-balan-YasQvzPbGOQ-unsplash.jpg" },
        { name: "Luxury Wax Melts", price: 500, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\rn-image_picker_lib_temp_7c41f30d-1192-45c4-b93c-0612171aa38b.webp" },
        { name: "Classic Jar Candle", price: 700, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\il_570xN.1758290818_iqkf.webp" },
        { name: "Floral Soy Candle", price: 450, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\images (1).jpg" },
        { name: "Wax Melts Gift Set", price: 1200, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\images (3).jpg" },
        { name: "Mini Candle Trio", price: 600, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\Slide1_bbfb51ae-9af2-4e87-bc14-a10947be43f9.webp" },
        { name: "Mini Heart Overload Candle", price: 400, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\alina-parache-SWYUM7CDRYU-unsplash.jpg" },
        { name: "Black Beauty", price: 500, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\HL8A1601_23ecf9ac-1e1b-4857-b08e-bacc27688735_5000x.webp" },
        { name: "Decor Jar Candle", price: 700, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\istockphoto-2163373239-1024x1024.jpg"},
        { name: "Mini Cake Candle Gift Set", price: 450, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\d924c398009819a8352680f80e0eb9ad.jpg" },
        { name: "Jumbo Bubble Candle Gift Set", price: 1200, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\images (7).jpg" },
        { name: "Pastle Jar Candles Gift set ", price: 600, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\il_570xN.4835230340_mfp8.webp" }
     ];

    function displayGifts() {
        giftsList.innerHTML = "";
        gifts.forEach((gift, index) => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");

            productCard.innerHTML = `
                <img src="${gift.image}" alt="${gift.name}">
                <h3>${gift.name}</h3>
                <p>₹${gift.price}</p>
                <div class="button-container">
                    <button class="btn add-to-cart" data-index="${index}">Add to Cart</button>
                    <button class="btn buy-now" data-index="${index}">Buy Now</button>
                </div>
            `;

            giftsList.appendChild(productCard);
        });

        addEventListeners();
    }

    function addToCart(index) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let product = gifts[index];

        let existingItem = cart.find(item => item.name === product.name);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${product.name} added to cart!`);
    }

    function buyNow(index) {
        let product = gifts[index];
        let phoneNumber = "8105476094";
        let message = `🛍 Order: ${product.name} - ₹${product.price}`;

        let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, "_blank");
    }

    function addEventListeners() {
        document.querySelectorAll(".add-to-cart").forEach(button => {
            button.addEventListener("click", event => {
                addToCart(event.target.getAttribute("data-index"));
            });
        });

        document.querySelectorAll(".buy-now").forEach(button => {
            button.addEventListener("click", event => {
                buyNow(event.target.getAttribute("data-index"));
            });
        });
    }

    displayGifts();
});