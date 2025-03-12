document.addEventListener("DOMContentLoaded", function () {
    const candlesContainer = document.getElementById("candles-container");

    // Sample Candle Product List
    const candles = [
        {
            name: "Jumbo Bubble Candle ",
            price: 400,
            image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\bubble-candle-soya-wax-pack-2-japanese-cherry-blossom-onearth-sustainable-candles-fragrances-brown-living-831187.webp"
        },
        {
            name: "Cup Cake Candles",
            price: 500,
            image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\13bb56406d6c5f0cb047c871c746f11a.jpg"
        },
        {
            name: "Glass Jar Candle",
            price: 700,
            image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\jar2.webp"
        },
        {
            name: "Jumbo Bubble Candle",
            price: 600,
            image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\51T49vbKG1L._AC_UF350,350_QL80_.jpg"
        },
        {
            name: "Flowral Jar Candle",
            price: 400,
            image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\360_F_1137213010_OGoEq8Jbp8JTYIxG63JNvw8Slkj23wW8.jpg"
        },
        {
            name: "Spiral Pillar Candles",
            price: 500,
            image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\fancy-pillar-candles.jpg"
        },
        {
            name: "Coin Candles",
            price: 700,
            image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\images.jpg"
        },
        {
            name: "Tinted Jar Candle",
            price: 600,
            image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\istockphoto-1784591768-612x612.webp"
        },
        {
            name: "Floating Candle",
            price: 400,
            image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\il_fullxfull.5207244507_dhsd.webp"
        },
        {
            name: "Strawberry Cake Candle",
            price: 500,
            image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\il_570xN.5356774966_hfbf.avif"
        },
        {
            name: "Delight in a cup ",
            price: 700,
            image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\Delicate-Glass-Jar-Dessert-Candles-for-Festive-Party.avif"
        },
        {
            name: "Classic Pillar Candle",
            price: 600,
            image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\images (2).jpg"
        }
    ];

    // Display Candles
    function displayCandles() {
        candlesContainer.innerHTML = "";
        candles.forEach((candle, index) => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");
            productCard.innerHTML = `
                <img src="${candle.image}" alt="${candle.name}">
                <p class="product-name">${candle.name}</p>
                <p class="product-price">₹${candle.price}</p>
                <div class="button-container">
                    <button class="btn add-to-cart" data-index="${index}">Add to Cart</button>
                    <button class="btn buy-now" data-index="${index}">Buy Now</button>
                </div>
            `;
            candlesContainer.appendChild(productCard);
        });

        addEventListeners();
    }

    function addEventListeners() {
        document.querySelectorAll(".add-to-cart").forEach(button => {
            button.addEventListener("click", (event) => {
                const index = event.target.getAttribute("data-index");
                addToCart(candles[index]);
            });
        });

        document.querySelectorAll(".buy-now").forEach(button => {
            button.addEventListener("click", (event) => {
                const index = event.target.getAttribute("data-index");
                buyNow(candles[index]);
            });
        });
    }

    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let existingItem = cart.find(item => item.name === product.name);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${product.name} added to cart!`);
    }

    function buyNow(product) {
        let order = [product];
        sendOrderToWhatsApp(order);
    }

    function sendOrderToWhatsApp(orderCart) {
        const phoneNumber = "8105476094";
        let orderMessage = "🕯 *New Candle Order* %0A";
        let orderTotal = 0;

        orderCart.forEach(product => {
            orderMessage += `✨ *${product.name}* - ₹${product.price} x ${product.quantity} = ₹${product.price * product.quantity}%0A`;
            orderTotal += product.price * product.quantity;
        });
        orderMessage += `%0A💰 *Total:* ₹${orderTotal}`;

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(orderMessage)}`;
        window.open(whatsappURL, "_blank");
    }

    displayCandles();
});