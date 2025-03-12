document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");
    const productsList = document.getElementById("products-list");

    // Sample Product List
    const products = [
        { name: "Ceramic Jar Candle Gift Set ", price: 1200, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\hanna-balan-YasQvzPbGOQ-unsplash.jpg" },
        { name: "Lamp Wax Melts", price: 800, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\rn-image_picker_lib_temp_7c41f30d-1192-45c4-b93c-0612171aa38b.webp" },
        { name: "Classic Jar Candle", price: 700, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\il_570xN.1758290818_iqkf.webp" },
        { name: "Floral Soy Candle", price: 450, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\images (1).jpg" },
        { name: "Wax melts Gift Set", price: 2100, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\images (3).jpg" },
        { name: "Mini Candle Trio", price: 1200, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\Slide1_bbfb51ae-9af2-4e87-bc14-a10947be43f9.webp" },
        { name: "Mini Heart Overload Candle", price: 800, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\alina-parache-SWYUM7CDRYU-unsplash.jpg" },
        { name: "Black Beauty", price: 1600, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\HL8A1601_23ecf9ac-1e1b-4857-b08e-bacc27688735_5000x.webp" },
        { name: "Decor Jar Candle", price: 1800, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\download (11).jpg"},
        { name: "Mini Cake Candle Gift Set", price: 1050, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\d924c398009819a8352680f80e0eb9ad.jpg" },
        { name: "Jumbo Bubble Candle Gift Set", price: 2400, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\images (7).jpg" },
        { name: "Pastle Jar Candle Gift Set", price: 2400, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\il_570xN.4835230340_mfp8.webp" },
        { name: "Jumbo Bubble Candle", price: 600, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\bubble-candle-soya-wax-pack-2-japanese-cherry-blossom-onearth-sustainable-candles-fragrances-brown-living-831187.webp" },
        { name: "Cupcake Candle Gift Set", price: 800, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\13bb56406d6c5f0cb047c871c746f11a.jpg" },
        { name: "Glass Jar Candle", price: 700, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\jar2.webp" },
        { name: "Jumbo Scented  Candle", price: 600, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\51T49vbKG1L._AC_UF350,350_QL80_.jpg" },
        { name: "Flowral Jar Candle", price: 700, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\360_F_1137213010_OGoEq8Jbp8JTYIxG63JNvw8Slkj23wW8.jpg" },
        { name: "Spiral Pillar Candles", price: 900, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\fancy-pillar-candles.jpg" },
        { name: "Coin Candles", price: 200, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\images.jpg" },
        { name: "Tinted Jar Candle", price: 600, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\istockphoto-1784591768-612x612.webp" },
        { name: "Floating Candle", price: 400, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\il_fullxfull.5207244507_dhsd.webp" },
        { name: "Strawberry Cake Candle", price: 500, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\il_570xN.5356774966_hfbf.avif" },
        { name: "Delight in a Cup", price: 700, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\Delicate-Glass-Jar-Dessert-Candles-for-Festive-Party.avif" },
        { name: "Classic Block Candle", price: 600, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\images (2).jpg" },
        { name: "Rose scented Candle", price: 1200, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\PeonyPillarGiftBox_750x.webp" },
        { name: "Be My Valentine wax melt", price: 900, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\Heart-Shaped-Wax-melt-Warmer-Lifestyle.jpg" },
        { name: "Pastle Jar candles Gift Set", price: 2200, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\il_570xN.4835230340_mfp8.webp" },
        { name: "Jumbo bubble candle set", price: 1200, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\tm16p_512.webp" },
        { name: "Christmas Candle pack", price: 2800, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\WinterFloralCollectionSquare_333ce865-7423-4361-80f8-9d7a046a7c4a_1080x.webp" },
        { name: "pillar candle", price: 1200, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\pexels-valeriya-1123256.jpg" },
        { name: "coin candle", price: 500, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\pexels-pixabay-33197.jpg" },
        { name: "Floating Candles", price: 700, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\img-6122-7bed6a8c-de48-4f99-8b0a-b20ee09208a2-500x500.webp" },
        { name: "Flowral Block candles", price: 1500, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\51PY0r7Lw1L._AC_UF1000,1000_QL80_.jpg" },
        { name: "Custom text candles", price: 800, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\65412e9e80b4b30cbe7e8d8b-ju-39-s-favors-10-piece-set-of.jpg" },
        { name: "Dome wax melt", price: 1000, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\images (18).jpg" },
        { name: "Square wax melt", price: 1000, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\images (15).jpg" },
        { name: "Jar candles", price: 200, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\no-revisions-CU8ujrbkvCM-unsplash.jpg" },
        { name: "pillar candles", price: 1500, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\images (14).jpg" },
        { name: "Classic wax melt", price: 900, image: "C:\\Users\\UIBS\\Desktop\\PROJECT\\PROJECT IMAGES\\download (6).jpg" }
    ];

    // Display Products
    function displayProducts(filter = "") {
        productsList.innerHTML = "";
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(filter.toLowerCase())
        );

        filteredProducts.forEach((product, index) => {
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
            productsList.appendChild(productCard);
        });

        if (filteredProducts.length === 0) {
            productsList.innerHTML = "<p>No products found</p>";
        }

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

    // Search functionality
    searchBtn.addEventListener("click", () => {
        const query = searchInput.value.trim();
        displayProducts(query);
    });

    searchInput.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            displayProducts(searchInput.value.trim());
        }
    });

    displayProducts(); // Load all products on page load
});