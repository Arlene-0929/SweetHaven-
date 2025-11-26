// Application State
let cart = [];
let currentProduct = {};
let currentUser = null;
let orders = [];
let users = [
  { id: 1, email: 'customer@bakery.com', password: 'password', role: 'customer', name: 'Ron Customer' },
  { id: 2, email: 'staff@bakery.com', password: 'password', role: 'staff', name: 'Mayen Staff' },
  { id: 3, email: 'admin@bakery.com', password: 'password', role: 'admin', name: 'Admin User' }
];

let products = [
  // Breads (3 products)
  { id: 1, name: 'Sourdough Loaf', price: 450, image: 'https://raw.githubusercontent.com/Arlene-0929/Sweet-Haven-/refs/heads/main/sourdough.jpg', description: 'Traditional sourdough with a crispy crust and tangy flavor. Made with organic flour and natural starter.', category: 'Breads', rating: 4.8, reviewCount: 124, reviews: [], createdAt: Date.now() - 86400000 * 30, available: true },
  { id: 2, name: 'Baguette', price: 300, image: 'https://c.animaapp.com/mh2tf3mlyHVBcI/img/ai_1.png', description: 'Classic French baguette with a golden crust and soft interior. Perfect for sandwiches or dipping.', category: 'Breads', rating: 4.6, reviewCount: 156, reviews: [], createdAt: Date.now() - 86400000 * 25, available: true },
  { id: 3, name: 'Bagel', price: 380, image: 'https://c.animaapp.com/mh2tf3mlyHVBcI/img/ai_1.png', description: 'Healthy whole wheat bread packed with fiber and nutrients. Perfect for daily consumption.', category: 'Breads', rating: 4.5, reviewCount: 98, reviews: [], createdAt: Date.now() - 86400000 * 22, available: true },

  // Pastries (3 products)
  { id: 4, name: 'Croissant', price: 250, image: 'https://c.animaapp.com/mh2tf3mlyHVBcI/img/ai_2.png', description: 'Buttery, flaky French croissant. Baked fresh every morning with premium European butter.', category: 'Pastries', rating: 4.9, reviewCount: 203, reviews: [], createdAt: Date.now() - 86400000 * 20, available: true },
  { id: 5, name: 'Cinnamon roll', price: 350, image: 'https://c.animaapp.com/mh2tf3mlyHVBcI/img/ai_2.png', description: 'Light choux pastry filled with rich chocolate cream and topped with glossy chocolate glaze.', category: 'Pastries', rating: 4.9, reviewCount: 178, reviews: [], createdAt: Date.now() - 86400000 * 10, available: true },
  { id: 6, name: 'Chocolate Walnut tart', price: 280, image: 'https://c.animaapp.com/mh2tf3mlyHVBcI/img/ai_2.png', description: 'Flaky Danish pastry with sweet cream cheese filling and fruit topping.', category: 'Pastries', rating: 4.7, reviewCount: 145, reviews: [], createdAt: Date.now() - 86400000 * 15, available: true },

  // Cakes (3 products)
  { id: 7, name: 'Black forest cake', price: 200, image: 'https://c.animaapp.com/mh2tf3mlyHVBcI/img/ai_3.png', description: 'Moist vanilla cupcake topped with silky buttercream frosting. Perfect for any celebration.', category: 'Cakes', rating: 4.7, reviewCount: 89, reviews: [], createdAt: Date.now() - 86400000 * 15, available: true },
  { id: 8, name: 'Carrot cake', price: 280, image: 'https://c.animaapp.com/mh2tf3mlyHVBcI/img/ai_3.png', description: 'Rich and decadent chocolate cake with layers of chocolate ganache. A chocolate lover\'s dream.', category: 'Cakes', rating: 4.9, reviewCount: 167, reviews: [], createdAt: Date.now() - 86400000 * 11, available: true },
  { id: 9, name: 'Red Velvet cake', price: 220, image: 'https://c.animaapp.com/mh2tf3mlyHVBcI/img/ai_3.png', description: 'Classic red velvet cupcake with cream cheese frosting. Moist and flavorful.', category: 'Cakes', rating: 4.8, reviewCount: 142, reviews: [], createdAt: Date.now() - 86400000 * 9, available: true },

  // Cookies (3 products)
  { id: 10, name: 'Chocolate Chip Cookies', price: 180, image: 'https://c.animaapp.com/mh2tf3mlyHVBcI/img/ai_2.png', description: 'Classic chocolate chip cookies with gooey chocolate chunks. Soft and chewy.', category: 'Cookies', rating: 4.8, reviewCount: 234, reviews: [], createdAt: Date.now() - 86400000 * 6, available: true },
  { id: 11, name: 'Oatmeal Raisin Cookies', price: 160, image: 'https://c.animaapp.com/mh2tf3mlyHVBcI/img/ai_2.png', description: 'Wholesome oatmeal cookies with plump raisins. A healthy and delicious treat.', category: 'Cookies', rating: 4.5, reviewCount: 156, reviews: [], createdAt: Date.now() - 86400000 * 13, available: true },
  { id: 12, name: 'Swedish thumprint Cookies', price: 190, image: 'https://c.animaapp.com/mh2tf3mlyHVBcI/img/ai_2.png', description: 'Rich chocolate cookies with white and dark chocolate chips. For serious chocolate lovers.', category: 'Cookies', rating: 4.9, reviewCount: 189, reviews: [], createdAt: Date.now() - 86400000 * 4, available: true },

  // Gift Boxes (2 products)
  { id: 13, name: 'Gift Box Deluxe', price: 1800, image: 'https://c.animaapp.com/mh2tf3mlyHVBcI/img/ai_4.png', description: 'Beautifully packaged assortment of our finest pastries and treats. Perfect for gifting.', category: 'Gift Boxes', rating: 5.0, reviewCount: 95, reviews: [], createdAt: Date.now() - 86400000 * 5, available: true },
  { id: 14, name: 'Gift Box Classic', price: 1200, image: 'https://c.animaapp.com/mh2tf3mlyHVBcI/img/ai_4.png', description: 'Elegant gift box with a selection of our popular breads and pastries. Great for any occasion.', category: 'Gift Boxes', rating: 4.8, reviewCount: 78, reviews: [], createdAt: Date.now() - 86400000 * 2, available: true }
];

let currentReviewRating = 0;
let cartPreviewTimeout = null;
let resetPasswordEmail = '';
let resetPasswordCode = '';
let salesChart = null;
let ordersChart = null;
let productsChart = null;

// Load data from localStorage
function loadData() {
  const savedCart = localStorage.getItem('bakeryCart');
  const savedOrders = localStorage.getItem('bakeryOrders');
  const savedUser = localStorage.getItem('bakeryUser');
  const savedProducts = localStorage.getItem('bakeryProducts');
  const savedUsers = localStorage.getItem('bakeryUsers');

  if (savedCart) cart = JSON.parse(savedCart);
  if (savedOrders) orders = JSON.parse(savedOrders);
  if (savedUser) currentUser = JSON.parse(savedUser);
  if (savedProducts) products = JSON.parse(savedProducts);
  if (savedUsers) users = JSON.parse(savedUsers);
}

// Save data to localStorage
function saveData() {
  localStorage.setItem('bakeryCart', JSON.stringify(cart));
  localStorage.setItem('bakeryOrders', JSON.stringify(orders));
  localStorage.setItem('bakeryUser', JSON.stringify(currentUser));
  localStorage.setItem('bakeryProducts', JSON.stringify(products));
  localStorage.setItem('bakeryUsers', JSON.stringify(users));
}

// Toggle mobile menu
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const button = document.getElementById('mobile-menu-button');
  menu.classList.toggle('open');
  const isOpen = menu.classList.contains('open');
  button.setAttribute('aria-expanded', isOpen);
}

// Toggle user menu
function toggleUserMenu() {
  const menu = document.getElementById('user-menu');
  menu.classList.toggle('hidden');
}

// Close user menu when clicking outside
document.addEventListener('click', function (event) {
  const userMenu = document.getElementById('user-menu');
  const userButton = event.target.closest('button[onclick="toggleUserMenu()"]');

  if (!userButton && !userMenu.contains(event.target)) {
    userMenu.classList.add('hidden');
  }
});

// Toggle cart panel
function toggleCart() {
  const panel = document.getElementById('cart-panel');
  const overlay = document.getElementById('cart-overlay');
  panel.classList.toggle('open');
  overlay.classList.toggle('open');

  if (panel.classList.contains('open')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

// Add to cart
function addToCart(name, price) {
  if (currentUser && currentUser.role === 'admin') {
    alert('Access denied. Admins cannot place orders.');
    showAdminDashboard();
    return;
  }

  const existingItem = cart.find((item) => item.name === name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }

  updateCart();
  saveData();
  toggleCart();
}

// Update cart display
function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const cartSubtotal = document.getElementById('cart-subtotal');
  const mobileCartBadge = document.getElementById('mobile-cart-badge');

  if (cart.length === 0) {
    cartItems.innerHTML =
      '<p class="text-gray-700 text-center py-8">Your cart is empty</p>';
    cartCount.textContent = '0';
    cartSubtotal.textContent = '$0.00';
    if (mobileCartBadge) mobileCartBadge.textContent = '0';
    return;
  }

  let totalItems = 0;
  let subtotal = 0;

  cartItems.innerHTML = cart
    .map((item, index) => {
      totalItems += item.quantity;
      subtotal += item.price * item.quantity;

      return `
      <div class="flex items-center justify-between border-b border-gray-300 pb-4">
        <div class="flex-1">
          <h3 class="font-normal text-neutral-foreground mb-1">${item.name}</h3>
          <p class="text-gray-700">₱${item.price.toFixed(2)}</p>
        </div>
        <div class="flex items-center space-x-4">
          <div class="flex items-center space-x-2">
            <button 
              onclick="updateQuantity(${index}, -1)" 
              class="w-8 h-8 flex items-center justify-center bg-gray-200 text-neutral-foreground rounded hover:bg-gray-300 transition-colors duration-200"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span class="text-neutral-foreground w-8 text-center">${item.quantity}</span>
            <button 
              onclick="updateQuantity(${index}, 1)" 
              class="w-8 h-8 flex items-center justify-center bg-gray-200 text-neutral-foreground rounded hover:bg-gray-300 transition-colors duration-200"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <button 
            onclick="removeFromCart(${index})" 
            class="text-gray-500 hover:text-gray-700 transition-colors duration-200"
            aria-label="Remove item"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      </div>
    `;
    })
    .join('');

  cartCount.textContent = totalItems;
  cartSubtotal.textContent = `₱${subtotal.toFixed(2)}`;
  if (mobileCartBadge) mobileCartBadge.textContent = totalItems;
}

// Update quantity
function updateQuantity(index, change) {
  cart[index].quantity += change;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  updateCart();
  saveData();
}

// Remove from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
  saveData();
}

// Open product detail modal
function openProductDetail(name, image, description, price) {
  const product = products.find(p => p.name === name);
  currentProduct = product || { name, image, description, price: parseFloat(price), rating: 0, reviewCount: 0, reviews: [] };

  document.getElementById('modal-title').textContent = name;
  document.getElementById('modal-image').src = image;
  document.getElementById('modal-image').alt = name;
  document.getElementById('modal-description').textContent = description;
  document.getElementById('modal-price').textContent = `₱${price}`;
  document.getElementById('quantity').value = 1;

  // Display rating
  displayProductRating(currentProduct);

  // Display reviews
  displayReviews(currentProduct);

  // Reset review form
  currentReviewRating = 0;
  document.getElementById('review-rating').value = 0;
  document.getElementById('review-text').value = '';
  updateReviewStars();

  const modal = document.getElementById('product-modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

// Display product rating
function displayProductRating(product) {
  const starsContainer = document.getElementById('modal-rating-stars');
  const ratingText = document.getElementById('modal-rating-text');

  const rating = product.rating || 0;
  const reviewCount = product.reviewCount || 0;

  let starsHTML = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      starsHTML += '<span class="text-warning text-xl">★</span>';
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      starsHTML += '<span class="text-warning text-xl">☆</span>';
    } else {
      starsHTML += '<span class="text-gray-300 text-xl">★</span>';
    }
  }

  starsContainer.innerHTML = starsHTML;
  ratingText.textContent = `${rating.toFixed(1)} (${reviewCount} reviews)`;
}

// Display reviews
function displayReviews(product) {
  const reviewsList = document.getElementById('reviews-list');
  const reviews = product.reviews || [];

  if (reviews.length === 0) {
    reviewsList.innerHTML = '<p class="text-gray-700 text-center py-8">No reviews yet. Be the first to review this product!</p>';
    return;
  }

  reviewsList.innerHTML = reviews.map(review => {
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
      starsHTML += i <= review.rating
        ? '<span class="text-warning">★</span>'
        : '<span class="text-gray-300">★</span>';
    }

    return `
      <div class="bg-gray-50 p-4 rounded">
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center">
            <span class="font-normal text-neutral-foreground mr-2">${review.userName}</span>
            <div class="flex">${starsHTML}</div>
          </div>
          <span class="text-sm text-gray-700">${new Date(review.date).toLocaleDateString()}</span>
        </div>
        <p class="text-gray-700">${review.text}</p>
      </div>
    `;
  }).join('');
}

// Set review rating
function setReviewRating(rating) {
  currentReviewRating = rating;
  document.getElementById('review-rating').value = rating;
  updateReviewStars();
}

// Update review stars display
function updateReviewStars() {
  const stars = document.querySelectorAll('.review-star');
  stars.forEach((star, index) => {
    if (index < currentReviewRating) {
      star.classList.remove('text-gray-300');
      star.classList.add('text-warning');
    } else {
      star.classList.remove('text-warning');
      star.classList.add('text-gray-300');
    }
  });
}

// Submit review
function submitReview(event) {
  event.preventDefault();

  if (!currentUser) {
    alert('Please login to submit a review');
    closeProductDetail();
    showLoginModal();
    return;
  }

  const rating = parseInt(document.getElementById('review-rating').value);
  const text = document.getElementById('review-text').value.trim();

  if (rating === 0) {
    alert('Please select a rating');
    return;
  }

  if (!text) {
    alert('Please write a review');
    return;
  }

  const product = products.find(p => p.id === currentProduct.id);
  if (!product) return;

  if (!product.reviews) {
    product.reviews = [];
  }

  const review = {
    id: Date.now(),
    userId: currentUser.id,
    userName: currentUser.name,
    rating: rating,
    text: text,
    date: new Date().toISOString()
  };

  product.reviews.unshift(review);

  // Recalculate average rating
  const totalRating = product.reviews.reduce((sum, r) => sum + r.rating, 0);
  product.rating = totalRating / product.reviews.length;
  product.reviewCount = product.reviews.length;

  saveData();
  displayProductRating(product);
  displayReviews(product);
  renderProductsOnShop();

  // Reset form
  currentReviewRating = 0;
  document.getElementById('review-rating').value = 0;
  document.getElementById('review-text').value = '';
  updateReviewStars();

  alert('Thank you for your review!');
}

// Close product detail modal
function closeProductDetail(event) {
  if (event && event.target.id !== 'product-modal') return;

  const modal = document.getElementById('product-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

// Add to cart from modal
function addToCartFromModal() {
  if (currentUser && currentUser.role === 'admin') {
    alert('Access denied. Admins cannot place orders.');
    showAdminDashboard();
    return;
  }

  const quantity = parseInt(document.getElementById('quantity').value);

  for (let i = 0; i < quantity; i++) {
    addToCart(currentProduct.name, currentProduct.price);
  }

  closeProductDetail();
}

// Show login modal
function showLoginModal() {
  const modal = document.getElementById('login-modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
  document.getElementById('user-menu').classList.add('hidden');

  // Clear form
  document.getElementById('login-email').value = '';
  document.getElementById('login-password').value = '';
}

// Close login modal
function closeLoginModal(event) {
  if (event && event.target.id !== 'login-modal') return;

  const modal = document.getElementById('login-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

// Show signup modal
function showSignupModal() {
  const modal = document.getElementById('signup-modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
  document.getElementById('user-menu').classList.add('hidden');

  // Clear form
  document.getElementById('signup-name').value = '';
  document.getElementById('signup-email').value = '';
  document.getElementById('signup-password').value = '';
  document.getElementById('signup-confirm-password').value = '';
  document.getElementById('signup-phone').value = '';
}

// Close signup modal
function closeSignupModal(event) {
  if (event && event.target.id !== 'signup-modal') return;

  const modal = document.getElementById('signup-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

// Handle signup
function handleSignup(event) {
  event.preventDefault();

  const name = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim().toLowerCase();
  const password = document.getElementById('signup-password').value;
  const confirmPassword = document.getElementById('signup-confirm-password').value;
  const phone = document.getElementById('signup-phone').value.trim();

  // Validation
  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  if (password.length < 8) {
    alert('Password must be at least 8 characters long!');
    return;
  }

  // Strong password validation
  if (!/[A-Z]/.test(password)) {
    alert('Password must contain at least one uppercase letter!');
    return;
  }

  if (!/[0-9]/.test(password)) {
    alert('Password must contain at least one number!');
    return;
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    alert('Password must contain at least one special character!');
    return;
  }

  // Check if email already exists
  const existingUser = users.find(u => u.email.toLowerCase() === email);
  if (existingUser) {
    alert('An account with this email already exists!');
    return;
  }

  // Create new user
  const newUser = {
    id: Date.now(),
    email: email,
    password: password,
    role: 'customer',
    name: name,
    phone: phone,
    address: ''
  };

  users.push(newUser);

  // Auto login the new user
  currentUser = {
    id: newUser.id,
    email: newUser.email,
    role: newUser.role,
    name: newUser.name,
    phone: newUser.phone,
    address: newUser.address
  };

  saveData();
  updateUserInterface();
  closeSignupModal();

  alert(`Welcome to Artisan Bakery, ${name}! Your account has been created successfully.`);
}

// Show forgot password modal
function showForgotPasswordModal() {
  const modal = document.getElementById('forgot-password-modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';

  document.getElementById('forgot-email').value = '';
}

// Close forgot password modal
function closeForgotPasswordModal(event) {
  if (event && event.target.id !== 'forgot-password-modal') return;

  const modal = document.getElementById('forgot-password-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

// Handle forgot password
function handleForgotPassword(event) {
  event.preventDefault();

  const email = document.getElementById('forgot-email').value.trim().toLowerCase();

  const user = users.find(u => u.email.toLowerCase() === email);

  if (!user) {
    alert('No account found with this email address');
    return;
  }

  // Generate 6-digit code
  resetPasswordCode = Math.floor(100000 + Math.random() * 900000).toString();
  resetPasswordEmail = email;

  // In a real app, this would send an email
  alert(`Password reset code: ${resetPasswordCode}\n\n(In a real application, this would be sent to your email)`);

  closeForgotPasswordModal();
  showResetPasswordModal();
}

// Show reset password modal
function showResetPasswordModal() {
  const modal = document.getElementById('reset-password-modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';

  document.getElementById('reset-code').value = '';
  document.getElementById('new-password').value = '';
  document.getElementById('confirm-new-password').value = '';
}

// Close reset password modal
function closeResetPasswordModal(event) {
  if (event && event.target.id !== 'reset-password-modal') return;

  const modal = document.getElementById('reset-password-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

// Handle reset password
function handleResetPassword(event) {
  event.preventDefault();

  const code = document.getElementById('reset-code').value.trim();
  const newPassword = document.getElementById('new-password').value;
  const confirmPassword = document.getElementById('confirm-new-password').value;

  if (code !== resetPasswordCode) {
    alert('Invalid reset code');
    return;
  }

  if (newPassword !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  if (newPassword.length < 8) {
    alert('Password must be at least 8 characters long');
    return;
  }

  const user = users.find(u => u.email.toLowerCase() === resetPasswordEmail);
  if (user) {
    user.password = newPassword;
    saveData();

    closeResetPasswordModal();
    alert('Password reset successfully! You can now login with your new password.');
    showLoginModal();
  }
}

// Handle profile link click (for desktop dropdown)
function handleProfileLinkClick() {
  if (!currentUser) {
    alert('Please login to view your profile');
    showLoginModal();
    return;
  }

  if (currentUser.role === 'admin') {
    alert('Access denied. Admins manage users from the Admin Dashboard.');
    showAdminDashboard();
    return;
  }

  showProfile();
}

// Show profile modal (for customer/staff)
function showProfile() {
  if (!currentUser || currentUser.role === 'admin') {
    alert('Access denied. Admins manage users from the Admin Dashboard.');
    if (currentUser && currentUser.role === 'admin') {
      showAdminDashboard();
    } else {
      showLoginModal();
    }
    return;
  }

  const user = users.find(u => u.id === currentUser.id);
  if (!user) return;

  const modal = document.getElementById('profile-modal');

  document.getElementById('profile-name').value = user.name;
  document.getElementById('profile-email').value = user.email;
  document.getElementById('profile-phone').value = user.phone || '';
  document.getElementById('profile-address').value = user.address || '';

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
  document.getElementById('user-menu').classList.add('hidden');
}

// Close profile
function closeProfile(event) {
  if (event && event.target.id !== 'profile-modal') return;

  const modal = document.getElementById('profile-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

// Update profile
function updateProfile(event) {
  event.preventDefault();

  const name = document.getElementById('profile-name').value.trim();
  const phone = document.getElementById('profile-phone').value.trim();
  const address = document.getElementById('profile-address').value.trim();

  const user = users.find(u => u.id === currentUser.id);
  if (user) {
    user.name = name;
    user.phone = phone;
    user.address = address;

    currentUser.name = name;
    currentUser.phone = phone;
    currentUser.address = address;

    saveData();
    updateUserInterface();

    alert('Profile updated successfully!');
    closeProfile();
  }
}

// Show change password form
function showChangePasswordForm() {
  closeProfile();

  const modal = document.getElementById('change-password-modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';

  document.getElementById('current-password').value = '';
  document.getElementById('change-new-password').value = '';
  document.getElementById('change-confirm-password').value = '';
}

// Close change password
function closeChangePassword(event) {
  if (event && event.target.id !== 'change-password-modal') return;

  const modal = document.getElementById('change-password-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

// Handle change password
function handleChangePassword(event) {
  event.preventDefault();

  const currentPassword = document.getElementById('current-password').value;
  const newPassword = document.getElementById('change-new-password').value;
  const confirmPassword = document.getElementById('change-confirm-password').value;

  const user = users.find(u => u.id === currentUser.id);

  if (!user || user.password !== currentPassword) {
    alert('Current password is incorrect');
    return;
  }

  if (newPassword !== confirmPassword) {
    alert('New passwords do not match');
    return;
  }

  if (newPassword.length < 8) {
    alert('Password must be at least 8 characters long');
    return;
  }

  user.password = newPassword;
  saveData();

  closeChangePassword();
  alert('Password changed successfully!');
}

// Handle login
function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    currentUser = { id: user.id, email: user.email, role: user.role, name: user.name };
    saveData();
    updateUserInterface();
    closeLoginModal();
    alert(`Welcome, ${user.name}!`);

    if (currentUser.role === 'admin') {
      showAdminDashboard();
    }
  } else {
    alert('Invalid email or password');
  }
}

// Toggle password visibility
function togglePasswordVisibility(inputId) {
  const input = document.getElementById(inputId);
  const eye = document.getElementById(inputId + '-eye');

  if (input.type === 'password') {
    input.type = 'text';
    eye.innerHTML = '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>';
  } else {
    input.type = 'password';
    eye.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>';
  }
}

// Validate password strength
function validatePassword() {
  const password = document.getElementById('signup-password').value;

  const lengthCheck = document.getElementById('length-check');
  const uppercaseCheck = document.getElementById('uppercase-check');
  const numberCheck = document.getElementById('number-check');
  const specialCheck = document.getElementById('special-check');

  // Length check
  if (password.length >= 8) {
    lengthCheck.textContent = '✓ At least 8 characters';
    lengthCheck.classList.remove('text-gray-700');
    lengthCheck.classList.add('text-success');
  } else {
    lengthCheck.textContent = '✗ At least 8 characters';
    lengthCheck.classList.remove('text-success');
    lengthCheck.classList.add('text-gray-700');
  }

  // Uppercase check
  if (/[A-Z]/.test(password)) {
    uppercaseCheck.textContent = '✓ One uppercase letter';
    uppercaseCheck.classList.remove('text-gray-700');
    uppercaseCheck.classList.add('text-success');
  } else {
    uppercaseCheck.textContent = '✗ One uppercase letter';
    uppercaseCheck.classList.remove('text-success');
    uppercaseCheck.classList.add('text-gray-700');
  }

  // Number check
  if (/[0-9]/.test(password)) {
    numberCheck.textContent = '✓ One number';
    numberCheck.classList.remove('text-gray-700');
    numberCheck.classList.add('text-success');
  } else {
    numberCheck.textContent = '✗ One number';
    numberCheck.classList.remove('text-success');
    numberCheck.classList.add('text-gray-700');
  }

  // Special character check
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    specialCheck.textContent = '✓ One special character';
    specialCheck.classList.remove('text-gray-700');
    specialCheck.classList.add('text-success');
  } else {
    specialCheck.textContent = '✗ One special character';
    specialCheck.classList.remove('text-success');
    specialCheck.classList.add('text-gray-700');
  }
}

// Update user interface based on login status
function updateUserInterface() {
  const userName = document.getElementById('user-name');
  const loginLink = document.getElementById('login-link');
  const signupLink = document.getElementById('signup-link');
  const logoutLink = document.getElementById('logout-link');
  const profileLink = document.getElementById('profile-link');
  const myOrdersLink = document.getElementById('my-orders-link');
  const staffDashboardLink = document.getElementById('staff-dashboard-link');
  const adminDashboardLink = document.getElementById('admin-dashboard-link');
  const mobileProfileText = document.getElementById('mobile-profile-text');

  // Reset visibility for all links first
  loginLink.classList.remove('hidden');
  signupLink.classList.remove('hidden');
  logoutLink.classList.add('hidden');
  profileLink.classList.add('hidden');
  myOrdersLink.classList.add('hidden');
  staffDashboardLink.classList.add('hidden');
  adminDashboardLink.classList.add('hidden');

  if (currentUser) {
    userName.textContent = currentUser.name;
    loginLink.classList.add('hidden');
    signupLink.classList.add('hidden');
    logoutLink.classList.remove('hidden');

    if (mobileProfileText) {
      mobileProfileText.textContent = currentUser.name.split(' ')[0];
    }

    if (currentUser.role === 'customer') {
      profileLink.classList.remove('hidden');
      myOrdersLink.classList.remove('hidden');
    } else if (currentUser.role === 'staff') {
      staffDashboardLink.classList.remove('hidden');
    } else if (currentUser.role === 'admin') {
      adminDashboardLink.classList.remove('hidden');
      // For admin, the profile link in the dropdown should also lead to admin dashboard
      profileLink.classList.remove('hidden'); // Keep it visible but its action will be handled by handleProfileLinkClick
    }
  } else {
    userName.textContent = 'Guest';
    if (mobileProfileText) {
      mobileProfileText.textContent = 'Profile';
    }
  }
}

// Logout
function logout() {
  currentUser = null;
  saveData();
  updateUserInterface();
  document.getElementById('user-menu').classList.add('hidden');
  alert('You have been logged out');
}

// Proceed to checkout
function proceedToCheckout() {
  if (cart.length === 0) {
    alert('Your cart is empty');
    return;
  }

  if (!currentUser) {
    alert('Please login to proceed with checkout');
    showLoginModal();
    return;
  }

  if (currentUser.role === 'admin') {
    alert('Access denied. Admins cannot place orders.');
    showAdminDashboard();
    return;
  }

  toggleCart();

  const modal = document.getElementById('checkout-modal');
  const checkoutItems = document.getElementById('checkout-items');
  const checkoutTotal = document.getElementById('checkout-total');

  let total = 0;
  checkoutItems.innerHTML = cart.map(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    return `
      <div class="flex justify-between text-neutral-foreground">
        <span>${item.name} x ${item.quantity}</span>
        <span>₱${itemTotal.toFixed(2)}</span>
      </div>
    `;
  }).join('');

  checkoutTotal.textContent = `₱${total.toFixed(2)}`;

  // Reset payment method to COD and show appropriate sections
  const codRadio = document.querySelector('input[name="payment"][value="cod"]');
  if (codRadio) {
    codRadio.checked = true;
    handlePaymentMethodChange('cod');
  }

  // Clear payment fields
  document.getElementById('cod-note').value = '';
  document.getElementById('reference-number').value = '';
  document.getElementById('payment-proof').value = '';
  document.getElementById('payment-proof-preview').classList.add('hidden');

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

// Close checkout modal
function closeCheckout(event) {
  if (event && event.target.id !== 'checkout-modal') return;

  const modal = document.getElementById('checkout-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

// Handle payment method change
function handlePaymentMethodChange(method) {
  const codSection = document.getElementById('cod-note-section');
  const ewalletSection = document.getElementById('ewallet-payment-section');
  const referenceNumber = document.getElementById('reference-number');
  const paymentProof = document.getElementById('payment-proof');

  if (method === 'cod') {
    codSection.classList.remove('hidden');
    ewalletSection.classList.add('hidden');

    // Remove required attribute from e-wallet fields
    if (referenceNumber) referenceNumber.removeAttribute('required');
    if (paymentProof) paymentProof.removeAttribute('required');
  } else if (method === 'gcash') {
    codSection.classList.add('hidden');
    ewalletSection.classList.remove('hidden');

    // Add required attribute to e-wallet fields
    if (referenceNumber) referenceNumber.setAttribute('required', 'required');
    if (paymentProof) paymentProof.setAttribute('required', 'required');

    // Update payment amount
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const paymentAmount = document.getElementById('payment-amount');

    if (paymentAmount) {
      paymentAmount.textContent = `₱${total.toFixed(2)}`;
    }
  }
}

// Complete order
function completeOrder(event) {
  event.preventDefault();

  const name = document.getElementById('delivery-name').value;
  const phone = document.getElementById('delivery-phone').value;
  const address = document.getElementById('delivery-address').value;
  const notes = document.getElementById('delivery-notes').value;
  const payment = document.querySelector('input[name="payment"]:checked').value;

  // Payment-specific data
  let paymentDetails = {
    method: payment
  };

  if (payment === 'cod') {
    const codNote = document.getElementById('cod-note').value.trim();
    paymentDetails.codNote = codNote;
    paymentDetails.paymentStatus = 'To be paid upon delivery';
  } else if (payment === 'gcash') {
    const referenceNumber = document.getElementById('reference-number').value.trim();
    const paymentProofFile = document.getElementById('payment-proof').files[0];

    if (!referenceNumber) {
      alert('Please enter the reference number');
      return;
    }

    if (!paymentProofFile) {
      alert('Please upload proof of payment');
      return;
    }

    // Read the payment proof image
    const reader = new FileReader();
    reader.onload = function (e) {
      paymentDetails.referenceNumber = referenceNumber;
      paymentDetails.paymentProof = e.target.result;
      paymentDetails.paymentStatus = 'Pending verification';

      createOrder(name, phone, address, notes, paymentDetails);
    };
    reader.readAsDataURL(paymentProofFile);
    return; // Wait for file reading to complete
  }

  createOrder(name, phone, address, notes, paymentDetails);
}

// Create order helper function
function createOrder(name, phone, address, notes, paymentDetails) {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const order = {
    id: Date.now(),
    userId: currentUser.id,
    userName: currentUser.name,
    items: [...cart],
    total: total,
    deliveryInfo: { name, phone, address, notes },
    payment: paymentDetails,
    status: 'pending',
    date: new Date().toISOString()
  };

  orders.push(order);
  cart = [];
  saveData();
  updateCart();
  closeCheckout();

  let message = 'Order placed successfully! You can track your order status in "My Orders".';

  if (paymentDetails.method === 'cod') {
    message += '\n\nPayment: Cash on Delivery\nStatus: To be paid upon delivery';
  } else if (paymentDetails.method === 'gcash') {
    message += `\n\nPayment: GCash\nReference: ${paymentDetails.referenceNumber}\nStatus: Pending verification`;
  }

  alert(message);
}

// Show my orders
function showMyOrders() {
  if (!currentUser) {
    alert('Please login to view your orders');
    showLoginModal();
    return;
  }

  if (currentUser.role === 'admin') {
    alert('Access denied. Admins manage orders from the Admin Dashboard.');
    showAdminDashboard();
    return;
  }

  const modal = document.getElementById('my-orders-modal');
  renderCustomerOrders('all');

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
  document.getElementById('user-menu').classList.add('hidden');
}

// Render customer orders
function renderCustomerOrders(filterStatus = 'all') {
  const ordersList = document.getElementById('orders-list');
  let userOrders = orders.filter(order => order.userId === currentUser.id);

  if (filterStatus !== 'all') {
    userOrders = userOrders.filter(order => order.status === filterStatus);
  }

  // Sort by date (newest first)
  userOrders.sort((a, b) => new Date(b.date) - new Date(a.date));

  if (userOrders.length === 0) {
    ordersList.innerHTML = '<p class="text-gray-700 text-center py-8">No orders found</p>';
  } else {
    ordersList.innerHTML = userOrders.map(order => {
      const payment = order.payment || { method: 'cash' };
      const paymentMethod = typeof payment === 'string' ? payment : payment.method;

      return `
      <div class="bg-gray-50 p-6 rounded">
        <div class="flex justify-between items-start mb-4">
          <div>
            <h3 class="font-headline font-medium text-xl text-neutral-foreground">Order #${order.id}</h3>
            <p class="text-gray-700">${new Date(order.date).toLocaleString()}</p>
          </div>
          <span class="px-4 py-2 rounded ${getStatusColor(order.status)} text-white font-normal">
            ${formatStatus(order.status)}
          </span>
        </div>
        <div class="space-y-2 mb-4">
          ${order.items.map(item => `
            <div class="flex justify-between text-neutral-foreground">
              <span>${item.name} x ${item.quantity}</span>
              <span>₱${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          `).join('')}
        </div>
        <div class="border-t border-gray-300 pt-4">
          <div class="flex justify-between items-center mb-4">
            <span class="text-lg text-neutral-foreground font-normal">Total:</span>
            <span class="text-2xl font-headline font-medium text-primary">₱${order.total.toFixed(2)}</span>
          </div>
        </div>
        <div class="mt-4 text-sm text-gray-700">
          <p><strong>Delivery to:</strong> ${order.deliveryInfo.name}</p>
          <p>${order.deliveryInfo.address}</p>
          <p><strong>Phone:</strong> ${order.deliveryInfo.phone}</p>
          ${order.deliveryInfo.notes ? `<p><strong>Notes:</strong> ${order.deliveryInfo.notes}</p>` : ''}
        </div>
        <div class="mt-4 p-3 bg-neutral rounded border border-gray-300">
          <p class="text-sm font-normal text-neutral-foreground mb-1">Payment Information</p>
          <p class="text-sm text-gray-700">
            <strong>Method:</strong> ${formatPaymentMethod(paymentMethod)}
          </p>
          ${payment.paymentStatus ? `
            <p class="text-sm text-gray-700">
              <strong>Status:</strong> ${payment.paymentStatus}
            </p>
          ` : ''}
          ${payment.codNote ? `
            <p class="text-sm text-gray-700">
              <strong>Note:</strong> ${payment.codNote}
            </p>
          ` : ''}
          ${payment.referenceNumber ? `
            <p class="text-sm text-gray-700">
              <strong>Reference:</strong> ${payment.referenceNumber}
            </p>
          ` : ''}
          ${payment.paymentProof ? `
            <button
              onclick="viewPaymentProof('${payment.paymentProof}')"
              class="mt-2 text-primary hover:underline text-sm"
            >
              View Payment Proof
            </button>
          ` : ''}
        </div>
        ${order.status === 'pending' ? `
          <div class="mt-4">
            <button
              onclick="cancelOrder(${order.id})"
              class="w-full px-6 py-3 bg-gray-500 text-white font-normal rounded hover:bg-gray-600 transition-colors duration-200"
            >
              Cancel Order
            </button>
          </div>
        ` : ''}
      </div>
    `;
    }).join('');
  }
}

// Format payment method for display
function formatPaymentMethod(method) {
  const methodMap = {
    'cod': 'Cash on Delivery (COD)',
    'gcash': 'GCash',
    'card': 'Credit/Debit Card',
    'cash': 'Cash on Delivery'
  };
  return methodMap[method] || method;
}

// View payment proof
function viewPaymentProof(imageData) {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex items-center justify-center p-4';
  modal.onclick = function (e) {
    if (e.target === modal) {
      document.body.removeChild(modal);
      document.body.style.overflow = '';
    }
  };

  modal.innerHTML = `
    <div class="bg-neutral rounded max-w-3xl w-full p-8">
      <div class="flex justify-between items-center mb-4">
        <h3 class="font-headline font-medium text-2xl text-neutral-foreground">Payment Proof</h3>
        <button
          onclick="this.closest('.fixed').remove(); document.body.style.overflow = '';"
          class="p-2 hover:bg-gray-100 rounded transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <img src="${imageData}" alt="Payment proof" class="w-full h-auto rounded" />
    </div>
  `;

  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
}

// Filter customer orders
function filterCustomerOrders(status) {
  renderCustomerOrders(status);
}

// Cancel order (customer)
function cancelOrder(orderId) {
  if (!confirm('Are you sure you want to cancel this order?')) {
    return;
  }

  const order = orders.find(o => o.id === orderId);
  if (order && order.status === 'pending') {
    order.status = 'cancelled';
    saveData();
    renderCustomerOrders(document.getElementById('customer-order-filter').value);
    alert('Order cancelled successfully');
  } else {
    alert('This order cannot be cancelled');
  }
}

// Close my orders modal
function closeMyOrders(event) {
  if (event && event.target.id !== 'my-orders-modal') return;

  const modal = document.getElementById('my-orders-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

// Show staff dashboard
function showStaffDashboard() {
  if (!currentUser || currentUser.role !== 'staff') {
    alert('Access denied');
    return;
  }

  const modal = document.getElementById('staff-dashboard-modal');
  renderStaffOrders('all');

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
  document.getElementById('user-menu').classList.add('hidden');
}

// Render staff orders
function renderStaffOrders(filterStatus = 'all') {
  const ordersList = document.getElementById('staff-orders-list');
  let filteredOrders = [...orders];

  if (filterStatus !== 'all') {
    filteredOrders = filteredOrders.filter(order => order.status === filterStatus);
  }

  // Sort by date (newest first)
  filteredOrders.sort((a, b) => new Date(b.date) - new Date(a.date));

  if (filteredOrders.length === 0) {
    ordersList.innerHTML = '<p class="text-gray-700 text-center py-8">No orders found</p>';
  } else {
    ordersList.innerHTML = filteredOrders.map(order => {
      const payment = order.payment || { method: 'cash' };
      const paymentMethod = typeof payment === 'string' ? payment : payment.method;

      return `
      <div class="bg-gray-50 p-6 rounded">
        <div class="flex justify-between items-start mb-4">
          <div class="flex-1">
            <h3 class="font-headline font-medium text-xl text-neutral-foreground">Order #${order.id}</h3>
            <p class="text-gray-700">Customer: ${order.userName}</p>
            <p class="text-gray-700">${new Date(order.date).toLocaleString()}</p>
          </div>
          <div class="flex flex-col gap-2">
            <select 
              onchange="updateOrderStatus(${order.id}, this.value, 'staff')"
              class="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              ${order.status === 'cancelled' ? 'disabled' : ''}
            >
              <option value="pending" ${order.status === 'pending' ? 'selected' : ''}>Pending</option>
              <option value="preparing" ${order.status === 'preparing' ? 'selected' : ''}>Preparing</option>
              <option value="ready" ${order.status === 'ready' ? 'selected' : ''}>Ready</option>
              <option value="out-for-delivery" ${order.status === 'out-for-delivery' ? 'selected' : ''}>Out for Delivery</option>
              <option value="completed" ${order.status === 'completed' ? 'selected' : ''}>Completed</option>
              <option value="cancelled" ${order.status === 'cancelled' ? 'selected' : ''}>Cancelled</option>
            </select>
          </div>
        </div>
        <div class="space-y-2 mb-4">
          ${order.items.map(item => `
            <div class="flex justify-between text-neutral-foreground">
              <span>${item.name} x ${item.quantity}</span>
              <span>₱${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          `).join('')}
        </div>
        <div class="border-t border-gray-300 pt-4">
          <div class="flex justify-between items-center mb-4">
            <span class="text-lg text-neutral-foreground font-normal">Total:</span>
            <span class="text-2xl font-headline font-medium text-primary">₱${order.total.toFixed(2)}</span>
          </div>
          <div class="text-sm text-gray-700 mb-4">
            <p><strong>Delivery to:</strong> ${order.deliveryInfo.name}</p>
            <p>${order.deliveryInfo.address}</p>
            <p><strong>Phone:</strong> ${order.deliveryInfo.phone}</p>
            ${order.deliveryInfo.notes ? `<p><strong>Notes:</strong> ${order.deliveryInfo.notes}</p>` : ''}
          </div>
          <div class="p-3 bg-neutral rounded border border-gray-300">
            <p class="text-sm font-normal text-neutral-foreground mb-1">Payment Information</p>
            <p class="text-sm text-gray-700">
              <strong>Method:</strong> ${formatPaymentMethod(paymentMethod)}
            </p>
            ${payment.paymentStatus ? `
              <p class="text-sm text-gray-700">
                <strong>Status:</strong> ${payment.paymentStatus}
              </p>
            ` : ''}
            ${payment.codNote ? `
              <p class="text-sm text-gray-700">
                <strong>COD Note:</strong> ${payment.codNote}
              </p>
            ` : ''}
            ${payment.referenceNumber ? `
              <p class="text-sm text-gray-700">
                <strong>Reference:</strong> ${payment.referenceNumber}
              </p>
            ` : ''}
            ${payment.paymentProof ? `
              <button
                onclick="viewPaymentProof('${payment.paymentProof}')"
                class="mt-2 text-primary hover:underline text-sm"
              >
                View Payment Proof
              </button>
            ` : ''}
          </div>
        </div>
      </div>
    `;
    }).join('');
  }
}

// Filter staff orders
function filterStaffOrders(status) {
  renderStaffOrders(status);
}

// Close staff dashboard modal
function closeStaffDashboard(event) {
  if (event && event.target.id !== 'staff-dashboard-modal') return;

  const modal = document.getElementById('staff-dashboard-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

// Update order status
function updateOrderStatus(orderId, newStatus, source = 'staff') {
  const order = orders.find(o => o.id === orderId);
  if (order) {
    order.status = newStatus;
    saveData();

    if (source === 'staff') {
      renderStaffOrders(document.getElementById('staff-order-filter').value);
    } else if (source === 'admin') {
      renderAdminOrders(document.getElementById('admin-order-filter').value);
    }

    alert('Order status updated successfully');
  }
}

// Show admin dashboard
function showAdminDashboard() {
  if (!currentUser || currentUser.role !== 'admin') {
    alert('Access denied');
    return;
  }

  const modal = document.getElementById('admin-dashboard-modal');

  // Switch to dashboard tab by default
  switchAdminTab('dashboard');

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
  document.getElementById('user-menu').classList.add('hidden');
}

// Switch admin tabs
function switchAdminTab(tab) {
  // Hide all tabs
  document.querySelectorAll('.admin-tab-content').forEach(content => {
    content.classList.add('hidden');
  });

  // Remove active state from all tab buttons
  document.querySelectorAll('[id^="admin-tab-"]').forEach(button => {
    button.classList.remove('border-primary', 'text-neutral-foreground');
    button.classList.add('border-transparent', 'text-gray-700');
  });

  // Show selected tab
  if (tab === 'dashboard') {
    document.getElementById('admin-dashboard-tab').classList.remove('hidden');
    document.getElementById('admin-tab-dashboard').classList.add('border-primary', 'text-neutral-foreground');
    document.getElementById('admin-tab-dashboard').classList.remove('border-transparent', 'text-gray-700');
    renderAdminDashboard();
  } else if (tab === 'products') {
    document.getElementById('admin-products-tab').classList.remove('hidden');
    document.getElementById('admin-tab-products').classList.add('border-primary', 'text-neutral-foreground');
    document.getElementById('admin-tab-products').classList.remove('border-transparent', 'text-gray-700');
    renderAdminMenu();
  } else if (tab === 'orders') {
    document.getElementById('admin-orders-tab').classList.remove('hidden');
    document.getElementById('admin-tab-orders').classList.add('border-primary', 'text-neutral-foreground');
    document.getElementById('admin-tab-orders').classList.remove('border-transparent', 'text-gray-700');
    filterAdminOrders();
  } else if (tab === 'users') {
    document.getElementById('admin-users-tab').classList.remove('hidden');
    document.getElementById('admin-tab-users').classList.add('border-primary', 'text-neutral-foreground');
    document.getElementById('admin-tab-users').classList.remove('border-transparent', 'text-gray-700');
    filterAdminUsers();
  } else if (tab === 'reports') {
    document.getElementById('admin-reports-tab').classList.remove('hidden');
    document.getElementById('admin-tab-reports').classList.add('border-primary', 'text-neutral-foreground');
    document.getElementById('admin-tab-reports').classList.remove('border-transparent', 'text-gray-700');
    renderQuickStats();
  }
}

// Render admin dashboard
function renderAdminDashboard() {
  // Calculate stats
  const totalSales = orders.reduce((sum, order) => sum + order.total, 0);
  const totalOrders = orders.length;
  const totalCustomers = users.filter(u => u.role === 'customer').length;
  const pendingOrders = orders.filter(o => o.status === 'pending').length;

  document.getElementById('total-sales').textContent = `₱${totalSales.toFixed(2)}`;
  document.getElementById('total-orders').textContent = totalOrders;
  document.getElementById('total-customers').textContent = totalCustomers;
  document.getElementById('pending-orders').textContent = pendingOrders;

  // Render charts
  renderSalesChart();
  renderOrdersChart();
  renderProductsChart();
  renderRecentOrders();
}

// Render sales chart
function renderSalesChart() {
  const ctx = document.getElementById('salesChart');
  if (!ctx) return;

  // Destroy existing chart
  if (salesChart) {
    salesChart.destroy();
  }

  // Calculate sales by month (last 6 months)
  const months = [];
  const salesData = [];

  for (let i = 5; i >= 0; i--) {
    const date = new Date();
    date.setMonth(date.getMonth() - i);
    const monthName = date.toLocaleString('default', { month: 'short' });
    months.push(monthName);

    const monthSales = orders.filter(order => {
      const orderDate = new Date(order.date);
      return orderDate.getMonth() === date.getMonth() &&
        orderDate.getFullYear() === date.getFullYear();
    }).reduce((sum, order) => sum + order.total, 0);

    salesData.push(monthSales);
  }

  salesChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: months,
      datasets: [{
        label: 'Sales (₱)',
        data: salesData,
        borderColor: 'hsl(35, 85%, 52%)',
        backgroundColor: 'hsla(35, 85%, 52%, 0.1)',
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function (value) {
              return '₱' + value;
            }
          }
        }
      }
    }
  });
}

// Render orders chart
function renderOrdersChart() {
  const ctx = document.getElementById('ordersChart');
  if (!ctx) return;

  // Destroy existing chart
  if (ordersChart) {
    ordersChart.destroy();
  }

  const statusCounts = {
    pending: 0,
    preparing: 0,
    ready: 0,
    'out-for-delivery': 0,
    completed: 0,
    cancelled: 0
  };

  orders.forEach(order => {
    statusCounts[order.status]++;
  });

  ordersChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Pending', 'Preparing', 'Ready', 'Out for Delivery', 'Completed', 'Cancelled'],
      datasets: [{
        data: [
          statusCounts.pending,
          statusCounts.preparing,
          statusCounts.ready,
          statusCounts['out-for-delivery'],
          statusCounts.completed,
          statusCounts.cancelled
        ],
        backgroundColor: [
          'hsl(25, 90%, 50%)',
          'hsl(35, 85%, 52%)',
          'hsl(145, 45%, 40%)',
          'hsl(210, 100%, 50%)',
          'hsl(0, 0%, 50%)',
          'hsl(0, 0%, 30%)'
        ]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

// Render products chart
function renderProductsChart() {
  const ctx = document.getElementById('productsChart');
  if (!ctx) return;

  // Destroy existing chart
  if (productsChart) {
    productsChart.destroy();
  }

  // Count product sales
  const productSales = {};

  orders.forEach(order => {
    order.items.forEach(item => {
      if (productSales[item.name]) {
        productSales[item.name] += item.quantity;
      } else {
        productSales[item.name] = item.quantity;
      }
    });
  });

  // Get top 5 products
  const sortedProducts = Object.entries(productSales)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const labels = sortedProducts.map(p => p[0]);
  const data = sortedProducts.map(p => p[1]);

  productsChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Units Sold',
        data: data,
        backgroundColor: 'hsl(35, 85%, 52%)'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1
          }
        }
      }
    }
  });
}

// Render recent orders
function renderRecentOrders() {
  const recentOrdersDiv = document.getElementById('recent-orders');
  if (!recentOrdersDiv) return;

  const recentOrders = [...orders]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  if (recentOrders.length === 0) {
    recentOrdersDiv.innerHTML = '<p class="text-gray-700 text-center py-4">No orders yet  </p>';
    return;
  }

  recentOrdersDiv.innerHTML = recentOrders.map(order => `
    <div class="flex justify-between items-center p-3 bg-neutral rounded">
      <div class="flex-1">
        <p class="font-normal text-neutral-foreground">Order #${order.id}</p>
        <p class="text-sm text-gray-700">${order.userName}</p>
      </div>
      <div class="text-right">
        <p class="font-normal text-neutral-foreground">₱${order.total.toFixed(2)}</p>
        <span class="text-xs px-2 py-1 rounded ${getStatusColor(order.status)} text-white">
          ${formatStatus(order.status)}
        </span>
      </div>
    </div>
  `).join('');
}

// Filter admin orders
function filterAdminOrders() {
  const searchTerm = document.getElementById('admin-order-search')?.value.toLowerCase() || '';
  const filterStatus = document.getElementById('admin-order-filter')?.value || 'all';
  const filterDate = document.getElementById('admin-order-date')?.value || '';

  let filteredOrders = [...orders];

  // Filter by search term
  if (searchTerm) {
    filteredOrders = filteredOrders.filter(order =>
      order.id.toString().includes(searchTerm) ||
      order.userName.toLowerCase().includes(searchTerm)
    );
  }

  // Filter by status
  if (filterStatus !== 'all') {
    filteredOrders = filteredOrders.filter(order => order.status === filterStatus);
  }

  // Filter by date
  if (filterDate) {
    filteredOrders = filteredOrders.filter(order => {
      const orderDate = new Date(order.date).toISOString().split('T')[0];
      return orderDate === filterDate;
    });
  }

  // Sort by date (newest first)
  filteredOrders.sort((a, b) => new Date(b.date) - new Date(a.date));

  renderAdminOrders(filteredOrders);
}

// Render admin orders
function renderAdminOrders(filteredOrders) {
  const ordersList = document.getElementById('admin-orders-list');

  if (filteredOrders.length === 0) {
    ordersList.innerHTML = '<p class="text-gray-700 text-center py-8">No orders found</p>';
  } else {
    ordersList.innerHTML = filteredOrders.map(order => {
      const payment = order.payment || { method: 'cash' };
      const paymentMethod = typeof payment === 'string' ? payment : payment.method;

      return `
      <div class="bg-gray-50 p-6 rounded">
        <div class="flex justify-between items-start mb-4">
          <div class="flex-1">
            <h3 class="font-headline font-medium text-xl text-neutral-foreground">Order #${order.id}</h3>
            <p class="text-gray-700">Customer: ${order.userName}</p>
            <p class="text-gray-700">${new Date(order.date).toLocaleString()}</p>
          </div>
          <div class="flex flex-col gap-2">
            <select 
              onchange="updateOrderStatus(${order.id}, this.value, 'admin')"
              class="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="pending" ${order.status === 'pending' ? 'selected' : ''}>Pending</option>
              <option value="preparing" ${order.status === 'preparing' ? 'selected' : ''}>Preparing</option>
              <option value="ready" ${order.status === 'ready' ? 'selected' : ''}>Ready</option>
              <option value="out-for-delivery" ${order.status === 'out-for-delivery' ? 'selected' : ''}>Out for Delivery</option>
              <option value="completed" ${order.status === 'completed' ? 'selected' : ''}>Completed</option>
              <option value="cancelled" ${order.status === 'cancelled' ? 'selected' : ''}>Cancelled</option>
            </select>
            <button
              onclick="editOrder(${order.id})"
              class="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-secondary transition-colors duration-200"
            >
              Edit
            </button>
            <button
              onclick="deleteOrder(${order.id})"
              class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors duration-200"
            >
              Delete
            </button>
          </div>
        </div>
        <div class="space-y-2 mb-4">
          ${order.items.map(item => `
            <div class="flex justify-between text-neutral-foreground">
              <span>${item.name} x ${item.quantity}</span>
              <span>₱${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          `).join('')}
        </div>
        <div class="border-t border-gray-300 pt-4">
          <div class="flex justify-between items-center mb-4">
            <span class="text-lg text-neutral-foreground font-normal">Total:</span>
            <span class="text-2xl font-headline font-medium text-primary">₱${order.total.toFixed(2)}</span>
          </div>
          <div class="text-sm text-gray-700 mb-4">
            <p><strong>Delivery to:</strong> ${order.deliveryInfo.name}</p>
            <p>${order.deliveryInfo.address}</p>
            <p><strong>Phone:</strong> ${order.deliveryInfo.phone}</p>
            ${order.deliveryInfo.notes ? `<p><strong>Notes:</strong> ${order.deliveryInfo.notes}</p>` : ''}
          </div>
          <div class="p-3 bg-neutral rounded border border-gray-300">
            <p class="text-sm font-normal text-neutral-foreground mb-1">Payment Information</p>
            <p class="text-sm text-gray-700">
              <strong>Method:</strong> ${formatPaymentMethod(paymentMethod)}
            </p>
            ${payment.paymentStatus ? `
              <p class="text-sm text-gray-700">
                <strong>Status:</strong> ${payment.paymentStatus}
              </p>
            ` : ''}
            ${payment.codNote ? `
              <p class="text-sm text-gray-700">
                <strong>COD Note:</strong> ${payment.codNote}
              </p>
            ` : ''}
            ${payment.referenceNumber ? `
              <p class="text-sm text-gray-700">
                <strong>Reference:</strong> ${payment.referenceNumber}
              </p>
            ` : ''}
            ${payment.paymentProof ? `
              <button
                onclick="viewPaymentProof('${payment.paymentProof}')"
                class="mt-2 text-primary hover:underline text-sm"
              >
                View Payment Proof
              </button>
            ` : ''}
          </div>
        </div>
      </div>
    `;
    }).join('');
  }
}


// Edit order (admin)
function editOrder(orderId) {
  const order = orders.find(o => o.id === orderId);
  if (!order) return;

  const newName = prompt('Delivery Name:', order.deliveryInfo.name);
  const newPhone = prompt('Phone:', order.deliveryInfo.phone);
  const newAddress = prompt('Address:', order.deliveryInfo.address);
  const newNotes = prompt('Special Instructions:', order.deliveryInfo.notes || '');

  if (newName && newPhone && newAddress) {
    order.deliveryInfo.name = newName;
    order.deliveryInfo.phone = newPhone;
    order.deliveryInfo.address = newAddress;
    order.deliveryInfo.notes = newNotes;
    saveData();
    renderAdminOrders(document.getElementById('admin-order-filter').value);
    alert('Order updated successfully');
  }
}

// Delete order (admin)
function deleteOrder(orderId) {
  if (!confirm('Are you sure you want to delete this order? This action cannot be undone.')) {
    return;
  }

  const index = orders.findIndex(o => o.id === orderId);
  if (index !== -1) {
    orders.splice(index, 1);
    saveData();
    renderAdminOrders(document.getElementById('admin-order-filter').value);
    alert('Order deleted successfully');
  }
}

// Filter admin products
function filterAdminProducts() {
  const searchTerm = document.getElementById('admin-product-search')?.value.toLowerCase() || '';
  const category = document.getElementById('admin-product-category')?.value || 'all';

  const filtered = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm);
    const matchesCategory = category === 'all' || product.category === category;
    return matchesSearch && matchesCategory;
  });

  renderAdminMenu(filtered);
}

// Render admin menu
function renderAdminMenu(productsToRender = products) {
  const menuList = document.getElementById('admin-menu-list');

  if (productsToRender.length === 0) {
    menuList.innerHTML = '<p class="text-gray-700 text-center py-8">No products found</p>';
    return;
  }

  menuList.innerHTML = productsToRender.map(product => `
    <div class="bg-gray-50 p-4 rounded flex flex-col md:flex-row items-start md:items-center gap-4 shadow-sm">
      <img
        src="${product.image}"
        alt="${product.name}"
        class="w-full md:w-24 h-48 md:h-24 object-cover rounded"
      />
      <div class="flex-1 w-full">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <h4 class="font-normal text-neutral-foreground text-lg">${product.name}</h4>
            <p class="text-gray-700">₱${product.price.toFixed(2)} - ${product.category}</p>
            <p class="text-sm text-gray-700 mt-1">Rating: ${(product.rating || 0).toFixed(1)} ⭐ (${product.reviewCount || 0} reviews)</p>
          </div>
          <div class="flex gap-2 w-full md:w-auto">
            <button
              onclick="toggleProductAvailability(${product.id})"
              class="flex-1 md:flex-none px-4 py-2 ${product.available !== false ? 'bg-success' : 'bg-gray-500'} text-white rounded hover:opacity-80 transition-opacity duration-200 text-sm"
            >
              ${product.available !== false ? 'Available' : 'Out of Stock'}
            </button>
            <button
              onclick="showEditProductModal(${product.id})"
              class="flex-1 md:flex-none px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-secondary transition-colors duration-200 text-sm"
            >
              Edit
            </button>
            <button
              onclick="deleteProduct(${product.id})"
              class="flex-1 md:flex-none px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors duration-200 text-sm"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// Toggle product availability
function toggleProductAvailability(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    product.available = product.available === false ? true : false;
    saveData();
    filterAdminProducts();
    alert(`Product ${product.available ? 'marked as available' : 'marked as out of stock'}`);
  }
}

// Filter admin users
function filterAdminUsers() {
  const searchTerm = document.getElementById('admin-user-search')?.value.toLowerCase() || '';
  const roleFilter = document.getElementById('admin-user-role')?.value || 'all';

  const filtered = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm) ||
      user.email.toLowerCase().includes(searchTerm);
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  renderAdminUsers(filtered);
}

// Render admin users
function renderAdminUsers(usersToRender = users) {
  const usersList = document.getElementById('admin-users-list');

  if (usersToRender.length === 0) {
    usersList.innerHTML = '<p class="text-gray-700 text-center py-8">No users found</p>';
    return;
  }

  usersList.innerHTML = usersToRender.map(user => `
    <div class="bg-gray-50 p-4 rounded flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-sm">
      <div class="flex-1">
        <h4 class="font-normal text-neutral-foreground text-lg">${user.name}</h4>
        <p class="text-gray-700">${user.email}</p>
        <p class="text-sm text-gray-700 mt-1">Role: <span class="font-normal">${user.role.charAt(0).toUpperCase() + user.role.slice(1)}</span></p>
      </div>
      <div class="flex gap-2 w-full md:w-auto">
        <select 
          onchange="updateUserRole(${user.id}, this.value)"
          class="flex-1 md:flex-none px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="customer" ${user.role === 'customer' ? 'selected' : ''}>Customer</option>
          <option value="staff" ${user.role === 'staff' ? 'selected' : ''}>Staff</option>
          <option value="admin" ${user.role === 'admin' ? 'selected' : ''}>Admin</option>
        </select>
        <button
          onclick="resetUserPassword(${user.id})"
          class="px-4 py-2 bg-warning text-white rounded hover:opacity-80 transition-opacity duration-200 text-sm"
          title="Reset Password"
        >
          Reset
        </button>
        <button
          onclick="deactivateUser(${user.id})"
          class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors duration-200 text-sm"
          title="Deactivate User"
        >
          Deactivate
        </button>
      </div>
    </div>
  `).join('');
}

// Show add staff modal
function showAddStaffModal() {
  const modal = document.getElementById('add-staff-modal');

  // Clear form
  document.getElementById('staff-name').value = '';
  document.getElementById('staff-email').value = '';
  document.getElementById('staff-password').value = '';
  document.getElementById('staff-role').value = 'staff';

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

// Close add staff modal
function closeAddStaffModal(event) {
  if (event && event.target.id !== 'add-staff-modal') return;

  const modal = document.getElementById('add-staff-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

// Handle add staff
function handleAddStaff(event) {
  event.preventDefault();

  const name = document.getElementById('staff-name').value.trim();
  const email = document.getElementById('staff-email').value.trim().toLowerCase();
  const password = document.getElementById('staff-password').value;
  const role = document.getElementById('staff-role').value;

  // Check if email already exists
  const existingUser = users.find(u => u.email.toLowerCase() === email);
  if (existingUser) {
    alert('An account with this email already exists!');
    return;
  }

  // Create new staff user
  const newUser = {
    id: Date.now(),
    email: email,
    password: password,
    role: role,
    name: name,
    phone: '',
    address: ''
  };

  users.push(newUser);
  saveData();
  filterAdminUsers();
  closeAddStaffModal();

  alert(`${role.charAt(0).toUpperCase() + role.slice(1)} account created successfully!`);
}

// Reset user password
function resetUserPassword(userId) {
  const user = users.find(u => u.id === userId);
  if (!user) return;

  const newPassword = prompt(`Reset password for ${user.name}?\n\nEnter new password (min 8 characters):`);

  if (newPassword && newPassword.length >= 8) {
    user.password = newPassword;
    saveData();
    alert('Password reset successfully!');
  } else if (newPassword) {
    alert('Password must be at least 8 characters long');
  }
}

// Deactivate user
function deactivateUser(userId) {
  const user = users.find(u => u.id === userId);
  if (!user) return;

  if (user.id === currentUser.id) {
    alert('You cannot deactivate your own account!');
    return;
  }

  if (confirm(`Are you sure you want to deactivate ${user.name}'s account?`)) {
    const index = users.findIndex(u => u.id === userId);
    if (index !== -1) {
      users.splice(index, 1);
      saveData();
      filterAdminUsers();
      alert('User account deactivated successfully');
    }
  }
}

// Render quick stats
function renderQuickStats() {
  const quickStats = document.getElementById('quick-stats');

  const today = new Date();
  const todayOrders = orders.filter(order => {
    const orderDate = new Date(order.date);
    return orderDate.toDateString() === today.toDateString();
  });

  const todaySales = todayOrders.reduce((sum, order) => sum + order.total, 0);
  const avgOrderValue = orders.length > 0 ? orders.reduce((sum, order) => sum + order.total, 0) / orders.length : 0;
  const completedOrders = orders.filter(o => o.status === 'completed').length;

  quickStats.innerHTML = `
    <div class="bg-neutral p-4 rounded border border-gray-300">
      <p class="text-gray-700 text-sm mb-1">Today's Sales</p>
      <p class="text-2xl font-headline font-medium text-primary">₱${todaySales.toFixed(2)}</p>
    </div>
    <div class="bg-neutral p-4 rounded border border-gray-300">
      <p class="text-gray-700 text-sm mb-1">Average Order Value</p>
      <p class="text-2xl font-headline font-medium text-primary">₱${avgOrderValue.toFixed(2)}</p>
    </div>
    <div class="bg-neutral p-4 rounded border border-gray-300">
      <p class="text-gray-700 text-sm mb-1">Completed Orders</p>
      <p class="text-2xl font-headline font-medium text-primary">${completedOrders}</p>
    </div>
  `;
}

// Generate daily sales report
function generateDailySalesReport() {
  const today = new Date();
  const todayOrders = orders.filter(order => {
    const orderDate = new Date(order.date);
    return orderDate.toDateString() === today.toDateString();
  });

  const todaySales = todayOrders.reduce((sum, order) => sum + order.total, 0);

  const reportWindow = window.open('', '_blank');
  reportWindow.document.write(`
    <html>
      <head>
        <title>Daily Sales Report - ${today.toLocaleDateString()}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h1 { color: #d97706; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
          th { background-color: #d97706; color: white; }
          .total { font-weight: bold; font-size: 1.2em; margin-top: 20px; }
          @media print { button { display: none; } }
        </style>
      </head>
      <body>
        <h1>Artisan Bakery - Daily Sales Report</h1>
        <p><strong>Date:</strong> ${today.toLocaleDateString()}</p>
        <p><strong>Total Orders:</strong> ${todayOrders.length}</p>
        <p class="total"><strong>Total Sales:</strong> ₱${todaySales.toFixed(2)}</p>
        
        <h2>Orders</h2>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Items</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${todayOrders.map(order => `
              <tr>
                <td>#${order.id}</td>
                <td>${order.userName}</td>
                <td>${order.items.map(item => `${item.name} (${item.quantity})`).join(', ')}</td>
                <td>₱${order.total.toFixed(2)}</td>
                <td>${formatStatus(order.status)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        
        <button onclick="window.print()" style="margin-top: 20px; padding: 10px 20px; background: #d97706; color: white; border: none; border-radius: 5px; cursor: pointer;">Print Report</button>
      </body>
    </html>
  `);
  reportWindow.document.close();
}

// Generate popular products report
function generatePopularProductsReport() {
  const productSales = {};

  orders.forEach(order => {
    order.items.forEach(item => {
      if (productSales[item.name]) {
        productSales[item.name].quantity += item.quantity;
        productSales[item.name].revenue += item.price * item.quantity;
      } else {
        productSales[item.name] = {
          quantity: item.quantity,
          revenue: item.price * item.quantity
        };
      }
    });
  });

  const sortedProducts = Object.entries(productSales)
    .sort((a, b) => b[1].quantity - a[1].quantity)
    .slice(0, 10);

  const reportWindow = window.open('', '_blank');
  reportWindow.document.write(`
    <html>
      <head>
        <title>Popular Products Report</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h1 { color: #d97706; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
          th { background-color: #d97706; color: white; }
          @media print { button { display: none; } }
        </style>
      </head>
      <body>
        <h1>Artisan Bakery - Popular Products Report</h1>
        <p><strong>Generated:</strong> ${new Date().toLocaleString()}</p>
        
        <h2>Top 10 Products by Sales</h2>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Product Name</th>
              <th>Units Sold</th>
              <th>Total Revenue</th>
            </tr>
          </thead>
          <tbody>
            ${sortedProducts.map((product, index) => `
              <tr>
                <td>${index + 1}</td>
                <td>${product[0]}</td>
                <td>${product[1].quantity}</td>
                <td>₱${product[1].revenue.toFixed(2)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        
        <button onclick="window.print()" style="margin-top: 20px; padding: 10px 20px; background: #d97706; color: white; border: none; border-radius: 5px; cursor: pointer;">Print Report</button>
      </body>
    </html>
  `);
  reportWindow.document.close();
}

// Generate monthly summary report
function generateMonthlySummaryReport() {
  const today = new Date();
  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  const monthOrders = orders.filter(order => {
    const orderDate = new Date(order.date);
    return orderDate >= firstDay && orderDate <= lastDay;
  });

  const monthSales = monthOrders.reduce((sum, order) => sum + order.total, 0);
  const completedOrders = monthOrders.filter(o => o.status === 'completed').length;

  const reportWindow = window.open('', '_blank');
  reportWindow.document.write(`
    <html>
      <head>
        <title>Monthly Summary Report - ${today.toLocaleDateString('default', { month: 'long', year: 'numeric' })}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h1 { color: #d97706; }
          .summary { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 20px 0; }
          .summary-card { border: 1px solid #ddd; padding: 15px; border-radius: 5px; }
          .summary-card h3 { margin: 0 0 10px 0; color: #666; }
          .summary-card p { font-size: 1.5em; font-weight: bold; color: #d97706; margin: 0; }
          @media print { button { display: none; } }
        </style>
      </head>
      <body>
        <h1>Artisan Bakery - Monthly Summary</h1>
        <p><strong>Period:</strong> ${firstDay.toLocaleDateString()} - ${lastDay.toLocaleDateString()}</p>
        
        <div class="summary">
          <div class="summary-card">
            <h3>Total Orders</h3>
            <p>${monthOrders.length}</p>
          </div>
          <div class="summary-card">
            <h3>Completed Orders</h3>
            <p>${completedOrders}</p>
          </div>
          <div class="summary-card">
            <h3>Total Revenue</h3>
            <p>₱${monthSales.toFixed(2)}</p>
          </div>
        </div>
        
        <button onclick="window.print()" style="margin-top: 20px; padding: 10px 20px; background: #d97706; color: white; border: none; border-radius: 5px; cursor: pointer;">Print Report</button>
      </body>
    </html>
  `);
  reportWindow.document.close();
}

// Generate customer report
function generateCustomerReport() {
  const customers = users.filter(u => u.role === 'customer');
  const customerStats = customers.map(customer => {
    const customerOrders = orders.filter(o => o.userId === customer.id);
    const totalSpent = customerOrders.reduce((sum, order) => sum + order.total, 0);
    return {
      name: customer.name,
      email: customer.email,
      orders: customerOrders.length,
      totalSpent: totalSpent
    };
  }).sort((a, b) => b.totalSpent - a.totalSpent);

  const reportWindow = window.open('', '_blank');
  reportWindow.document.write(`
    <html>
      <head>
        <title>Customer Report</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h1 { color: #d97706; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
          th { background-color: #d97706; color: white; }
          @media print { button { display: none; } }
        </style>
      </head>
      <body>
        <h1>Artisan Bakery - Customer Report</h1>
        <p><strong>Generated:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Total Customers:</strong> ${customers.length}</p>
        
        <h2>Customer Statistics</h2>
        <table>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Total Orders</th>
              <th>Total Spent</th>
            </tr>
          </thead>
          <tbody>
            ${customerStats.map(customer => `
              <tr>
                <td>${customer.name}</td>
                <td>${customer.email}</td>
                <td>${customer.orders}</td>
                <td>₱${customer.totalSpent.toFixed(2)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        
        <button onclick="window.print()" style="margin-top: 20px; padding: 10px 20px; background: #d97706; color: white; border: none; border-radius: 5px; cursor: pointer;">Print Report</button>
      </body>
    </html>
  `);
  reportWindow.document.close();
}

// Close admin dashboard modal
function closeAdminDashboard(event) {
  if (event && event.target.id !== 'admin-dashboard-modal') return;

  const modal = document.getElementById('admin-dashboard-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

// Update user role
function updateUserRole(userId, newRole) {
  const user = users.find(u => u.id === userId);
  if (user) {
    user.role = newRole;
    saveData();
    filterAdminUsers();
    alert('User role updated successfully');
  }
}

// Show add product modal
function showAddProductModal() {
  const modal = document.getElementById('add-product-modal');

  // Clear form
  document.getElementById('product-name').value = '';
  document.getElementById('product-price').value = '';
  document.getElementById('product-category').value = '';
  document.getElementById('product-description').value = '';
  document.getElementById('product-image').value = '';
  document.getElementById('image-preview-container').classList.add('hidden');

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

// Close add product modal
function closeAddProductModal(event) {
  if (event && event.target.id !== 'add-product-modal') return;

  const modal = document.getElementById('add-product-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

// Handle add product
function handleAddProduct(event) {
  event.preventDefault();

  const name = document.getElementById('product-name').value.trim();
  const price = parseFloat(document.getElementById('product-price').value);
  const category = document.getElementById('product-category').value;
  const description = document.getElementById('product-description').value.trim();
  const imageFile = document.getElementById('product-image').files[0];

  if (imageFile) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const newProduct = {
        id: Date.now(),
        name,
        price,
        category,
        description,
        image: e.target.result,
        rating: 0,
        reviewCount: 0,
        reviews: [],
        createdAt: Date.now()
      };

      products.push(newProduct);
      saveData();
      renderAdminMenu();
      applyFilters();
      closeAddProductModal();
      alert('Product added successfully!');
    };
    reader.readAsDataURL(imageFile);
  } else {
    // Use default image if no image uploaded
    const newProduct = {
      id: Date.now(),
      name,
      price,
      category,
      description,
      image: 'https://c.animaapp.com/mh2tf3mlyHVBcI/img/ai_1.png',
      rating: 0,
      reviewCount: 0,
      reviews: [],
      createdAt: Date.now()
    };

    products.push(newProduct);
    saveData();
    renderAdminMenu();
    applyFilters();
    closeAddProductModal();
    alert('Product added successfully!');
  }
}

// Show edit product modal
function showEditProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('edit-product-modal');

  // Fill form with current product data
  document.getElementById('edit-product-id').value = product.id;
  document.getElementById('edit-product-name').value = product.name;
  document.getElementById('edit-product-price').value = product.price;
  document.getElementById('edit-product-category').value = product.category;
  document.getElementById('edit-product-description').value = product.description;
  document.getElementById('edit-current-image').src = product.image;
  document.getElementById('edit-product-image').value = '';
  document.getElementById('edit-image-preview-container').classList.add('hidden');

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

// Close edit product modal
function closeEditProductModal(event) {
  if (event && event.target.id !== 'edit-product-modal') return;

  const modal = document.getElementById('edit-product-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

// Handle edit product
function handleEditProduct(event) {
  event.preventDefault();

  const productId = parseInt(document.getElementById('edit-product-id').value);
  const product = products.find(p => p.id === productId);

  if (!product) return;

  const name = document.getElementById('edit-product-name').value.trim();
  const price = parseFloat(document.getElementById('edit-product-price').value);
  const category = document.getElementById('edit-product-category').value;
  const description = document.getElementById('edit-product-description').value.trim();
  const imageFile = document.getElementById('edit-product-image').files[0];

  if (imageFile) {
    const reader = new FileReader();
    reader.onload = function (e) {
      product.name = name;
      product.price = price;
      product.category = category;
      product.description = description;
      product.image = e.target.result;

      saveData();
      renderAdminMenu();
      applyFilters();
      closeEditProductModal();
      alert('Product updated successfully!');
    };
    reader.readAsDataURL(imageFile);
  } else {
    // Keep existing image
    product.name = name;
    product.price = price;
    product.category = category;
    product.description = description;

    saveData();
    renderAdminMenu();
    applyFilters();
    closeEditProductModal();
    alert('Product updated successfully!');
  }
}

// Delete product
function deleteProduct(productId) {
  if (confirm('Are you sure you want to delete this product?')) {
    const index = products.findIndex(p => p.id === productId);
    if (index !== -1) {
      products.splice(index, 1);
      saveData();
      renderAdminMenu();
      applyFilters();
      alert('Product deleted successfully');
    }
  }
}

// Render products on shop page
function renderProductsOnShop(filteredProducts = null) {
  const shopSection = document.getElementById('product-grid');
  const productCount = document.getElementById('product-count');
  if (!shopSection) return;

  const productsToRender = filteredProducts || products;

  if (productCount) {
    productCount.textContent = `Showing ${productsToRender.length} product${productsToRender.length !== 1 ? 's' : ''}`;
  }

  if (productsToRender.length === 0) {
    shopSection.innerHTML = '<div class="col-span-full text-center py-16"><p class="text-gray-700 text-lg">No products found matching your criteria.</p></div>';
    return;
  }

  shopSection.innerHTML = productsToRender.map(product => {
    let starsHTML = '';
    const rating = product.rating || 0;
    for (let i = 1; i <= 5; i++) {
      starsHTML += i <= Math.floor(rating)
        ? '<span class="text-warning">★</span>'
        : '<span class="text-gray-300">★</span>';
    }

    return `
    <article
      class="bg-neutral rounded overflow-hidden hover:scale-105 transition-transform duration-200 cursor-pointer"
      onclick="openProductDetail('${product.name.replace(/'/g, "\\'")}', '${product.image}', '${product.description.replace(/'/g, "\\'")}', '${product.price.toFixed(2)}')"
    >
      <img
        src="${product.image}"
        srcset="${product.image} 1x, ${product.image} 2x"
        alt="${product.name}"
        loading="lazy"
        class="w-full h-56 object-cover"
      />
      <div class="p-6">
        <h3
          class="font-headline font-medium text-xl text-neutral-foreground mb-2"
        >
          ${product.name}
        </h3>
        <div class="flex items-center mb-2">
          <div class="flex mr-2">${starsHTML}</div>
          <span class="text-sm text-gray-700">(${product.reviewCount || 0})</span>
        </div>
        <p class="text-gray-700 mb-4">
          ${product.description.substring(0, 50)}${product.description.length > 50 ? '...' : ''}
        </p>
        <div class="flex items-center justify-between">
          <span
            class="text-2xl font-headline font-medium text-primary"
            >₱${product.price.toFixed(2)}</span
          >
          <button
            onclick="event.stopPropagation(); addToCart('${product.name.replace(/'/g, "\\'")}', ${product.price})"
            class="px-6 py-3 bg-primary text-primary-foreground font-normal rounded hover:bg-secondary transition-colors duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  `;
  }).join('');
}

// Apply filters and sorting
function applyFilters() {
  const searchTerm = document.getElementById('search').value.toLowerCase();
  const sortBy = document.getElementById('sort-by').value;
  const priceRange = document.getElementById('price-filter').value;

  // Get selected categories
  const categoryCheckboxes = document.querySelectorAll('.category-filter:checked');
  const selectedCategories = Array.from(categoryCheckboxes).map(cb => cb.value);

  // Filter products
  let filtered = products.filter(product => {
    // Search filter
    const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm);

    // Category filter
    const matchesCategory = selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    // Price filter
    let matchesPrice = true;
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      matchesPrice = product.price >= min && product.price <= max;
    }

    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort products
  switch (sortBy) {
    case 'price-low':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      break;
    case 'newest':
      filtered.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
      break;
    default:
      // Default sorting (by id)
      filtered.sort((a, b) => a.id - b.id);
  }

  renderProductsOnShop(filtered);
}

// Clear all filters
function clearFilters() {
  document.getElementById('search').value = '';
  document.getElementById('sort-by').value = 'default';
  document.getElementById('price-filter').value = 'all';

  const categoryCheckboxes = document.querySelectorAll('.category-filter');
  categoryCheckboxes.forEach(cb => cb.checked = false);

  applyFilters();
}

// Show cart preview on hover
function showCartPreview() {
  clearTimeout(cartPreviewTimeout);

  const preview = document.getElementById('cart-preview');
  const previewItems = document.getElementById('cart-preview-items');
  const previewTotal = document.getElementById('cart-preview-total');

  if (cart.length === 0) {
    previewItems.innerHTML = '<p class="text-gray-700 text-center py-4">Your cart is empty</p>';
    previewTotal.textContent = '₱0.00';
  } else {
    let total = 0;
    previewItems.innerHTML = cart.map(item => {
      total += item.price * item.quantity;
      return `
        <div class="flex justify-between items-center text-sm">
          <span class="text-neutral-foreground">${item.name} x ${item.quantity}</span>
          <span class="text-gray-700">₱${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      `;
    }).join('');
    previewTotal.textContent = `₱${total.toFixed(2)}`;
  }

  preview.classList.remove('hidden');
}

// Hide cart preview
function hideCartPreview() {
  cartPreviewTimeout = setTimeout(() => {
    const preview = document.getElementById('cart-preview');
    preview.classList.add('hidden');
  }, 300);
}

// Image preview for add product
document.addEventListener('DOMContentLoaded', function () {
  const productImageInput = document.getElementById('product-image');
  if (productImageInput) {
    productImageInput.addEventListener('change', function (e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          document.getElementById('image-preview').src = e.target.result;
          document.getElementById('image-preview-container').classList.remove('hidden');
        };
        reader.readAsDataURL(file);
      } else {
        document.getElementById('image-preview-container').classList.add('hidden');
      }
    });
  }

  const editProductImageInput = document.getElementById('edit-product-image');
  if (editProductImageInput) {
    editProductImageInput.addEventListener('change', function (e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          document.getElementById('edit-image-preview').src = e.target.result;
          document.getElementById('edit-image-preview-container').classList.remove('hidden');
        };
        reader.readAsDataURL(file);
      } else {
        document.getElementById('edit-image-preview-container').classList.add('hidden');
      }
    });
  }

  // Payment proof preview
  const paymentProofInput = document.getElementById('payment-proof');
  if (paymentProofInput) {
    paymentProofInput.addEventListener('change', function (e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          document.getElementById('payment-proof-image').src = e.target.result;
          document.getElementById('payment-proof-preview').classList.remove('hidden');
        };
        reader.readAsDataURL(file);
      } else {
        document.getElementById('payment-proof-preview').classList.add('hidden');
      }
    });
  }
});

// Format status for display
function formatStatus(status) {
  const statusMap = {
    'pending': 'PENDING',
    'preparing': 'PREPARING',
    'ready': 'READY',
    'out-for-delivery': 'OUT FOR DELIVERY',
    'completed': 'COMPLETED',
    'cancelled': 'CANCELLED'
  };
  return statusMap[status] || status.toUpperCase();
}

// Get status color
function getStatusColor(status) {
  const colors = {
    pending: 'bg-warning',
    preparing: 'bg-primary',
    ready: 'bg-success',
    'out-for-delivery': 'bg-blue-500',
    completed: 'bg-gray-500',
    cancelled: 'bg-gray-700'
  };
  return colors[status] || 'bg-gray-500';
}

// Mobile bottom navigation
function setActiveNav(nav) {
  // Remove active class from all nav items
  document.querySelectorAll('.mobile-bottom-nav-item').forEach(item => {
    item.classList.remove('active');
  });

  // Add active class to selected nav item
  const activeItem = document.getElementById(`mobile-nav-${nav}`);
  if (activeItem) {
    activeItem.classList.add('active');
  }
}

// Handle mobile profile click
function handleMobileProfile() {
  if (!currentUser) {
    showLoginModal();
  } else if (currentUser.role === 'admin') {
    showAdminDashboard();
  } else {
    showProfile();
  }
}

// Update active nav on scroll
let lastScrollSection = 'home';

function updateActiveNavOnScroll() {
  const sections = ['hero', 'shop'];
  const scrollPosition = window.scrollY + 100;

  for (const sectionId of sections) {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        const navName = sectionId === 'hero' ? 'home' : sectionId;
        if (lastScrollSection !== navName) {
          setActiveNav(navName);
          lastScrollSection = navName;
        }
        break;
      }
    }
  }
}

// Add scroll listener for mobile nav
if (window.innerWidth < 768) {
  window.addEventListener('scroll', updateActiveNavOnScroll);
}

// Initialize
loadData();
updateCart();
updateUserInterface();
applyFilters();
setActiveNav('home');
