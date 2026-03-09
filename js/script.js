
// ADD PRODUCT TO CART //

const button = document.getElementById("add-to-cart");

if (button) {
button.addEventListener("click", () => {
    const product = {
        id: button.dataset.id,
        name: button.dataset.name,
        price: Number(button.dataset.price),
        image: button.dataset.image,
        quantity: 1
    };


let cart = JSON.parse(localStorage.getItem("cart")) || [];

const existingProduct = cart.find(item => item.id === product.id);

if (existingProduct) {
    existingProduct.quantity += 1;
} else {
    cart.push(product);
}

localStorage.setItem("cart", JSON.stringify(cart));
alert("Product added to cart!");

 });
}


// SHOW PRODUCTS IN CART //

const cartContainer = document.getElementById("cart-items");
const subtotalEl = document.getElementById("subtotal");
const totalEl = document.getElementById("total");



if (cartContainer) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let subtotal = 0;

    cart.forEach(item => {
        subtotal += item.price * item.quantity;

        const article = document.createElement("article");
        article.classList.add("cart-item");

        article.innerHTML =`
        <img src="${item.image}" alt="${item.name}" class="cart-img">

            <div class="cart-info">
                <p class= "cart-name">${item.name}</p>
                <p class="cart-meta">Quantity: ${item.quantity}</p>

                <div class="cart-controls">
                    <button class="remove" data-id="${item.id}">Remove</button>
                    </div>
                    </div>

                    <p class="cart-price">${item.price * item.quantity} kr</p>
                    `;

                    cartContainer.appendChild(article);
    });
    

    //REMOVE PRODUCT//

    if (subtotalEl) {
        subtotalEl.textContent = `${subtotal} kr`;
    }
    if (totalEl) {
        totalEl.textContent = `${subtotal} kr` ;
    }

    const removeButtons = document.querySelectorAll(".remove");

    removeButtons.forEach(button =>{
        button.addEventListener("click", () => {
            const productId = button.dataset.id ;

            let cart = JSON.parse(localStorage.getItem("cart")) || [] ;
            cart = cart.filter(item => item.id !== productId) ;

            localStorage.setItem("cart", JSON.stringify(cart));
            location.reload();

        });
    });
}