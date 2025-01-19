/* 
███████╗██████╗░░█████╗░███╗░░██╗████████╗  ███████╗███╗░░██╗██████╗░
██╔════╝██╔══██╗██╔══██╗████╗░██║╚══██╔══╝  ██╔════╝████╗░██║██╔══██╗
█████╗░░██████╔╝██║░░██║██╔██╗██║░░░██║░░░  █████╗░░██╔██╗██║██║░░██║
██╔══╝░░██╔══██╗██║░░██║██║╚████║░░░██║░░░  ██╔══╝░░██║╚████║██║░░██║
██║░░░░░██║░░██║╚█████╔╝██║░╚███║░░░██║░░░  ███████╗██║░╚███║██████╔╝
╚═╝░░░░░╚═╝░░╚═╝░╚════╝░╚═╝░░╚══╝░░░╚═╝░░░  ╚══════╝╚═╝░░╚══╝╚═════╝░*/

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
});

const products = [
    { id: 1, name: "grapes (2 kg)", price: 145.0, image: "f1.jpg" },
    { id: 2, name: "Mango (1 kg)", price: 130.0, image: "f2.jpg" },
    { id: 3, name: "plum(2 .4 kg) ", price: 288.0, image: "f3.jpg" },
    { id: 4, name: "Guava(1 kg)", price: 70.0, image: "f4.jpg" },
    { id: 5, name: "Apple ( 1 kg)", price: 145.0, image: "f5.jpg" },
    { id: 6, name: "WaterMelon(1kg)", price: 130.0, image: "f6.jpg" },
    { id: 7, name: "pear (2 kg)", price: 420.0, image: "f7.jpg" },
    { id: 8, name: "Cherry (1 kg)", price: 650.0, image: "f8.jpg" },
    { id: 9, name: "Strawberry(1kg)", price: 480.0, image: "f9.jpg" },
    { id: 10, name: "Damson (1 kg)", price: 110.0, image: "f10.jpg" },
    { id: 11, name: "DragonFruit(1kg)", price: 150.0, image: "f11.jpg" },
    { id: 12, name: "BlueBerry(1kg)", price: 255.0, image: "f12.jpg" },


  ];


  let cart = [];

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const totalPriceEl = document.getElementById("total-price");
  

  function displayProducts() {
    products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(productDiv);
    });
  }
  
  function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    cart.push(product);
    updateCart();
  }

  function updateCart() {
    cartItems.innerHTML = " <p class='me'> Platform Fee : ₹3 , Delivery Charges🚀: ₹20 </p>";
    let total = 23;
  
    cart.forEach((item, index) => {
      const cartItem = document.createElement("div");
      cartItem.innerHTML = `
        ${item.name} - ₹${item.price.toFixed(2)}
        <button onclick="removeFromCart(${index})">Cancel</button>
      `;
      cartItems.appendChild(cartItem);
      total += item.price;
    });
  
    totalPriceEl.textContent = `Total:₹${total.toFixed(2)}`;
  }

  function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
  }

  displayProducts()
  displayProduct()
  
/*
███████╗███╗░░██╗██████╗░
██╔════╝████╗░██║██╔══██╗
█████╗░░██╔██╗██║██║░░██║
██╔══╝░░██║╚████║██║░░██║
███████╗██║░╚███║██████╔╝
╚══════╝╚═╝░░╚══╝╚═════╝░*/