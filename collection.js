document.addEventListener("DOMContentLoaded", function () {
    const collectionContainer = document.getElementById("collection-container");

    // Sample Product List
    const products = [
        {
            name: "  Rose scented Candle",
            price: 1200,
            image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\PeonyPillarGiftBox_750x.webp"
        },
        {
            name: "Elegant wax melt",
            price: 2500,
            image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\Heart-Shaped-Wax-melt-Warmer-Lifestyle.jpg"
        },
        {
            name: "Pillar Jar  candles Gift Set",
            price: 3200,
            image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\il_570xN.4835230340_mfp8.webp"
        },
        {
            name: "Jumbo bubble candle set",
            price: 1500,
            image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\tm16p_512.webp"
        },
        {
            name: "Christmas Candle pack",
            price: 2800,
            image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\WinterFloralCollectionSquare_333ce865-7423-4361-80f8-9d7a046a7c4a_1080x.webp"
        },
        {
            name: "pillar candle",
            price: 1200,
            image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\pexels-valeriya-1123256.jpg"
        },
        {
            name: "coin candle",
            price:500,
            image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\pexels-pixabay-33197.jpg"
        },
        {
            name: "Floating Candles",
            price: 700,
            image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\img-6122-7bed6a8c-de48-4f99-8b0a-b20ee09208a2-500x500.webp"
        },
        {
            name: "Flowral Bolck candles",
            price: 1500,
            image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\51PY0r7Lw1L._AC_UF1000,1000_QL80_.jpg"
        },
        {
            name: "Custom text candles",
            price: 2800,
            image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\65412e9e80b4b30cbe7e8d8b-ju-39-s-favors-10-piece-set-of.jpg"
        },
        {
            name: "Dome wax melt",
            price: 1200,
            image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\images (18).jpg"
        },
        {
            name: "Square wax melt",
            price: 2500,
            image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\images (15).jpg"
        },
        {
            name: "Jar candles",
            price: 3200,
            image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\no-revisions-CU8ujrbkvCM-unsplash.jpg"
        },
        {
            name: "pillar candles",
            price: 1500,
            image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\images (14).jpg"
        },
        {
            name: "Classic wax melt",
            price: 2800,
            image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\download (6).jpg"
        }
    ];

    // Display Products
    function displayProducts() {
        collectionContainer.innerHTML = "";
        products.forEach((product, index) => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <p class="product-name">${product.name}</p>
                <p class="product-price">₹${product.price}</p>
                <div class="button-container">
                    <button class="btn add-to-cart" data-index="${index}">Add to Cart</button>
                    <button class="btn buy-now" data-index="${index}">Buy Now</button>
                </div>
            `;
            collectionContainer.appendChild(productCard);
        });

        addEventListeners();
    }

    function addEventListeners() {
        document.querySelectorAll(".add-to-cart").forEach(button => {
            button.addEventListener("click", (event) => {
                const index = event.target.getAttribute("data-index");
                addToCart(products[index]);
            });
        });

        document.querySelectorAll(".buy-now").forEach(button => {
            button.addEventListener("click", (event) => {
                const index = event.target.getAttribute("data-index");
                buyNow(products[index]);
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
        let orderMessage = "🛍 *New Order* %0A";
        let orderTotal = 0;

        orderCart.forEach(product => {
            orderMessage += `📌 *${product.name}* - ₹${product.price} x ${product.quantity} = ₹${product.price * product.quantity}%0A`;
            orderTotal += product.price * product.quantity;
        });
        orderMessage += `%0A💰 *Total:* ₹${orderTotal}`;

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(orderMessage)}`;
        window.open(whatsappURL, "_blank");
    }

    displayProducts();
});