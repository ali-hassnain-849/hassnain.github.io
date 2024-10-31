// nav button --------------------section 
let menu = document.getElementById("menu-bar")
let navlinks = document.getElementById("nav-links")

menu.addEventListener("click", () => {
    navlinks.classList.toggle("active-links")
})

// clock -----------------------script 
let countdownInterval;

// Yahan aap apna countdown time set karenge (in seconds)
let remainingTime = 5 * 24 * 3600 + 3600; // Example: 5 days + 1 hour = 5*24*3600 + 3600

function startCountdown() {
  countdownInterval = setInterval(() => {
    const days = Math.floor(remainingTime / (24 * 3600));
    const hrs = String(Math.floor((remainingTime % (24 * 3600)) / 3600)).padStart(2, '0');
    const mins = String(Math.floor((remainingTime % 3600) / 60)).padStart(2, '0');
    const secs = String(remainingTime % 60).padStart(2, '0');

    document.getElementById('countdown').textContent = 
      `${days} : ${hrs} : ${mins} : ${secs}`;

    if (remainingTime <= 0) {
      clearInterval(countdownInterval);
      alert('Time’s up!');
    } else {
      remainingTime--;
    }
  }, 1000);
}
window.onload = startCountdown;

// swiper-----------------------------------------------script 
var swiper = new Swiper(".sales-products-container", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".sales-products-container", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true, // Enable looping of slides
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".catogries-products-container", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true, // Enable looping of slides
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
});






// add to cart --------------------------------- section 

// let listproductHTML = document.querySelector(".list-product"); 
// let listproducts = []; 
// let listcartHTML = document.querySelector(".cart-list")
// let iconcartspan = document.querySelector(".product-numbers")
// let carts = [] ;

// const adddatatoHTML = () => {
//   listproductHTML.innerHTML = ''; // Clear previous content

//   if (listproducts.length > 0) {
//     listproducts.forEach((product) => {
//       let newproduct = document.createElement('div');
//       newproduct.dataset.id = product.id;
//       newproduct.classList.add('item');

//       // Use backticks for multi-line HTML strings
//       newproduct.innerHTML = `
        // <div class=" item-container product-item swiper-slide">
        //   <div class="product-image-container">
        //     <div class="product-img">
        //       <img src="${product.image}" alt="">
        //     </div>
        //     <div class="discount-box">
        //       <p>-20%</p>
        //     </div>
        //     <div class="products-icon">
        //       <img src="images/heart.svg" alt="" class="heart">
        //       <img src="images/eye.svg" alt="" class="eye">
        //     </div>
        //     <div class="add-to-cart">
        //       add to cart
        //     </div>
        //   </div>
        //   <div class="product-detail">
        //     <h4>${product.name}</h4>
        //     <div class="price-data">
        //       <span class="latest-price">${product.price}</span>
        //     </div>
        //     <div class="rating">
        //       <div class="star"><img src="images/star.svg" alt=""></div>
        //       <div class="star"><img src="images/star.svg" alt=""></div>
        //       <div class="star"><img src="images/star.svg" alt=""></div>
        //       <div class="star"><img src="images/star.svg" alt=""></div>
        //       <div class="star"><img src="images/star.svg" alt=""></div>
        //       <p>(88)</p>
        //     </div>
        //   </div>
        // </div>
//       `;

//       // Append the new product to the list
//       listproductHTML.appendChild(newproduct);
//     });
//   }
// };
// const initapp = () => {
//   // Get data from JSON
//   fetch('products.json')
//     .then(response => response.json())  // Corrected: `response` and `response.json()`
//     .then(data => {
//       listproducts = data;
//       adddatatoHTML();
//     })
//     .catch(error => console.error('Error fetching products:', error));  // Error handling
// };

// initapp();

// listproductHTML.addEventListener("click", (event) => {
//   let positionclick = event.target;

//   // Check if the clicked element is the 'add-to-cart' button
//   if (positionclick.classList.contains('add-to-cart')) {
//     // Find the closest parent with the 'item' class to get the correct 'data-id'
//     let productDiv = positionclick.closest('.item');

//     if (productDiv && productDiv.dataset.id) {
//       let product_id = productDiv.dataset.id; // Retrieve the data-id
//       addtocart(product_id);
//     }
//   }
// });



// // Initialize carts array from localStorage or set it to an empty array


let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCart = document.querySelector('.icon-cart');
let iconCartSpan = document.querySelector('.product-numbers');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let carttab = document.querySelector('.cartTab');
let products = [];
let cart = [];


iconCart.addEventListener('click', () => {
  carttab.classList.toggle('showcart')
})
closeCart.addEventListener('click', () => {
  carttab.classList.toggle('showcart')
})

console.log(carttab)
 

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})

    const addDataToHTML = () => {
    // remove datas default from HTML

        // add new datas
        if(products.length > 0) // if has data
        {
            products.forEach(product => {
                let newProduct = document.createElement('div');
                newProduct.dataset.id = product.id;
                newProduct.classList.add('item');
                newProduct.innerHTML = 
                `<div class=" item-container product-item swiper-slide">
          <div class="product-image-container">
            <div class="product-img">
              <img src="${product.image}" alt="">
            </div>
            <div class="discount-box">
              <p>-20%</p>
            </div>
            <div class="products-icon">
              <img src="images/heart.svg" alt="" class="heart">
              <img src="images/eye.svg" alt="" class="eye">
            </div>
          </div>
          <div class="product-detail">
            <h4>${product.name}</h4>
            <div class="price-data">
              <span class="latest-price">$${product.price}</span>
            </div>
            <div class="rating">
              <div class="star"><img src="images/star.svg" alt=""></div>
              <div class="star"><img src="images/star.svg" alt=""></div>
              <div class="star"><img src="images/star.svg" alt=""></div>
              <div class="star"><img src="images/star.svg" alt=""></div>
              <div class="star"><img src="images/star.svg" alt=""></div>
              <p>(88)</p>
            </div>
          </div>
        </div>
                <button class=" addCart">Add To Cart</button>`;
                listProductHTML.appendChild(newProduct);
            });
        }
    }
    listProductHTML.addEventListener('click', (event) => {
        let positionClick = event.target;
        if(positionClick.classList.contains('addCart')){
            let id_product = positionClick.parentElement.dataset.id;
            addToCart(id_product);
        }
    })
const addToCart = (product_id) => {
    let positionThisProductInCart = cart.findIndex((value) => value.product_id == product_id);
    if(cart.length <= 0){
        cart = [{
            product_id: product_id,
            quantity: 1
        }];
    }else if(positionThisProductInCart < 0){
        cart.push({
            product_id: product_id,
            quantity: 1
        });
    }else{
        cart[positionThisProductInCart].quantity = cart[positionThisProductInCart].quantity + 1;
    }
    addCartToHTML();
    addCartToMemory();
}
const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
}
const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    if(cart.length > 0){
        cart.forEach(item => {
            totalQuantity = totalQuantity +  item.quantity;
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.dataset.id = item.product_id;

            let positionProduct = products.findIndex((value) => value.id == item.product_id);
            let info = products[positionProduct];
            listCartHTML.appendChild(newItem);
            newItem.innerHTML = `
            <div class="image">
                    <img src="${info.image}">
                </div>
                <div class="name">
                ${info.name}
                </div>
                <div class="totalPrice">$${info.price * item.quantity}</div>
                <div class="quantity">
                    <span class="minus">-</span>
                    <span>${item.quantity}</span>
                    <span class="plus">+</span>
                </div>
            `;
        })
    }
    iconCartSpan.innerText = totalQuantity;
}

listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = 'minus';
        if(positionClick.classList.contains('plus')){
            type = 'plus';
        }
        changeQuantityCart(product_id, type);
    }
})
const changeQuantityCart = (product_id, type) => {
    let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);
    if(positionItemInCart >= 0){
        let info = cart[positionItemInCart];
        switch (type) {
            case 'plus':
                cart[positionItemInCart].quantity = cart[positionItemInCart].quantity + 1;
                break;
        
            default:
                let changeQuantity = cart[positionItemInCart].quantity - 1;
                if (changeQuantity > 0) {
                    cart[positionItemInCart].quantity = changeQuantity;
                }else{
                    cart.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    addCartToHTML();
    addCartToMemory();
}

const initApp = () => {
    // get data product
    fetch('products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        addDataToHTML();

        // get data cart from memory
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'));
            addCartToHTML();
        }
    })
}
initApp();
