document.addEventListener("DOMContentLoaded", function () {
    const checkoutContainer = document.getElementById("checkout-container");
    const checkoutTotal = document.getElementById("checkout-total");
    const placeOrderBtn = document.getElementById("place-order");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let amount = 0;

    function displayCheckoutItems() {
        checkoutContainer.innerHTML = "";
        amount = 0;

        cart.forEach((product, index) => {
            if (!product.quantity || isNaN(product.quantity)) {
                product.quantity = 1;
            }

            const checkoutItem = document.createElement("div");
            checkoutItem.classList.add("checkout-item");
            checkoutItem.innerHTML = `
                <img src="${product.image}" class="checkout-img">
                <div class="product-info">
                    <p class="product-name">${product.name}</p>
                    <p class="product-price">₹${product.price} x 
                        <input type="number" class="quantity-input" data-index="${index}" value="${product.quantity}" min="1">
                    </p>
                    <p>Total: ₹<span class="item-total">${product.price * product.quantity}</span></p>
                    <button class="buy-single" data-index="${index}">Buy</button>
                </div>
            `;
            checkoutContainer.appendChild(checkoutItem);
            amount += product.price * product.quantity;
        });

        checkoutTotal.innerText = `Total: ₹${amount}`;
        addEventListeners();
    }

    function updateCart() {
        amount = 0;
        document.querySelectorAll(".quantity-input").forEach(input => {
            const index = input.getAttribute("data-index");
            const newQuantity = parseInt(input.value);

            if (!isNaN(newQuantity) && newQuantity > 0) {
                cart[index].quantity = newQuantity;
                document.querySelectorAll(".item-total")[index].innerText = cart[index].price * cart[index].quantity;
            }

            amount += cart[index].price * cart[index].quantity;
        });

        checkoutTotal.innerText = `Total: ₹${amount}`;
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    function generateOrderNumber() {
        return `ORD-${Math.floor(Math.random() * 1000000)}`;
    }

    function sendOrderToWhatsApp(orderCart) {
        const phoneNumber = "8105470694";
        const orderNumber = generateOrderNumber();
        let orderMessage = `🛒 *New Order*\n*Order Number: ${orderNumber}*\n`;
        let orderTotal = 0;

        orderCart.forEach(product => {
            orderMessage += `🕯 *${product.name}* x ${product.quantity}\n`;
            orderTotal += product.price * product.quantity;
        });

        orderMessage += `\n💰 *Total:* ₹${orderTotal}\n`;
        orderMessage += `📍 *Delivery Address:* [Enter Delivery Address Here]\n`;

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(orderMessage)}`;
        window.open(whatsappURL, "_blank");
    }

    function addEventListeners() {
        document.querySelectorAll(".quantity-input").forEach(input => {
            input.addEventListener("change", updateCart);
        });

        document.querySelectorAll(".buy-single").forEach(button => {
            button.addEventListener("click", (event) => {
                const index = event.target.getAttribute("data-index");
                sendOrderToWhatsApp([cart[index]]);
            });
        });
    }

    placeOrderBtn.addEventListener("click", () => sendOrderToWhatsApp(cart));

    displayCheckoutItems();
});
