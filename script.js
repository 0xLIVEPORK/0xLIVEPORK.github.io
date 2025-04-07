let cartCount = 0;
let cartItems = [];


document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('click', () => {

    const title = card.getAttribute('data-title');
    const description = card.getAttribute('data-description');
    const price = card.getAttribute('data-price');
    const image = card.getAttribute('data-image');
    

    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('modal-price').textContent = price;
    document.getElementById('modal-image').src = image;

    document.getElementById('product-modal').style.display = 'block';
  });
});


function closeModal() {
  document.getElementById('product-modal').style.display = 'none';
}


function simulateAddToCart() {
  // Get current product details from the modal
  const title = document.getElementById('modal-title').textContent;
  const price = document.getElementById('modal-price').textContent;
  

  cartItems.push({ title, price });
  cartCount = cartItems.length;
  document.getElementById('cart-count').textContent = cartCount;
  
  alert('Product added to cart!');
  closeModal();
}


function openCartModal() {
  const cartList = document.getElementById('cart-items-list');
  cartList.innerHTML = ''; // Clear previous items
  
  // Listing, murag sakto.
  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.title} - ${item.price}`;
    cartList.appendChild(li);
  });
  
  document.getElementById('cart-modal').style.display = 'block';
}

// Close the cart modal
function closeCartModal() {
  document.getElementById('cart-modal').style.display = 'none';
}

// I have no idea what I'm doing, I hate JS
function payCart() {
  let subject = encodeURIComponent("Payment for Cart Items");
  let body = "I would like to pay for the following items:\n";
  cartItems.forEach(item => {
    body += `${item.title} - ${item.price}\n`;
  });
  window.location.href = `mailto:paradigm@example.com?subject=${subject}&body=${encodeURIComponent(body)}`;
}
