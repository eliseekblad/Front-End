
// ADD PRODUCT TO CART //

const button = document.getElementById("add-to-cart");

button.addEventListener("click", () => {
    const product = {
        id: button.dataset.id,
        name: button.dataset.name,
        price: Number(button.dataset.price),
        image: button.dataset.image,
        quantity: 1
    };


let cart = JSON.parse(localStorage.getItem("cart")) || [];

const existingProduct = cart.find(item=> item.id === product.id);

if (existingProduct) {
    existingProduct.quantity += 1;
} else {
    cart.push(product);
}

localStorage.setItem("cart", JSON.stringify(cart));
alert("Product added to cart!");

});


// SHOW PRODUCTS IN CART //

const cartContainer = document.getElementById("cart-items");

if (cartContainer) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.forEach(item => {
        const article = document.createElement("article");
        article.classList.add("cart-item");

        article.innerHTML =`
        <img src="${item.image}" alt="${item.name}" class="cart-img">

            <div class="cart-info">
                <p class= "cart-name">${item.name}</p>
                <p class="cart-meta">Quantity: ${item.quantity}</p>

                <div class="cart-controls">
                    <button class="remove">Remove</button>
                    </div>
                    </div>

                    <p class="cart-price">${item.price * item.quantity} kr</p>
                    `;

                    cartContainer.appendChild(article);
    });
    }