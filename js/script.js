
// LINES 25 AND 97 HAVE BEEN INSPIRED BY CHATGPT //
// LINES 61 TO 76 HAVE BEN INSPIRED FROM YOUTUBE TUTORIAL https://www.youtube.com/watch?v=gXWohFYrI0M //


// ADD PRODUCT TO CART //
const button = document.getElementById("add-to-cart");

if (button) {
button.addEventListener("click", function() {

    // create product object
    const product = {
        id: button.dataset.id,
        name: button.dataset.name,
        price: Number(button.dataset.price),
        image: button.dataset.image,
        quantity: 1
    };


let cart = JSON.parse(localStorage.getItem("cart")) || [];

//check if product already exists
const existingProduct = cart.find(item => item.id === product.id); 

// add new product or increase
if (existingProduct) {
    existingProduct.quantity += 1;
} else {
    cart.push(product);
}

//save data
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

    // loop through items
    cart.forEach(item => {
        subtotal += item.price * item.quantity;

        //create cart item element
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
    
    //update price
    if (subtotalEl) {
        subtotalEl.textContent = `${subtotal} kr`;
    }
    if (totalEl) {
        totalEl.textContent = `${subtotal} kr` ;
    }

    // REMOVE PRODUCT FROM CART//
    const removeButtons = document.querySelectorAll(".remove");

    removeButtons.forEach(button =>{
        button.addEventListener("click", function() {
            const productId = button.dataset.id ;

            let cart = JSON.parse(localStorage.getItem("cart")) || [] ;

            // remove the selected product
            cart = cart.filter(item => item.id !== productId) ; 

            localStorage.setItem("cart", JSON.stringify(cart));
            location.reload();

        });
    });
}