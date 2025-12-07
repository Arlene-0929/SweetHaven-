# SweetHaven Ordering System - README

## 🍰 Overview

SweetHaven is a comprehensive bakery ordering system with **customer, staff, and admin interfaces**. This web application provides a complete solution for online bakery ordering, inventory management, and order processing with role-based access control.

### Live Demo
🔗 **[https://sweethavenorderingsystem.vercel.app/](https://sweethavenorderingsystem.vercel.app/)**

### Repository
🐙 **[https://github.com/Arlene-0929/SweetHaven-](https://github.com/Arlene-0929/SweetHaven-)**

## 👥 User Roles & Access

### 1. **Customers** (Public Access)
- Browse bakery products
- Place orders
- View order history
- No login required for basic browsing

### 2. **Staff Members** (Restricted Access)
- Process customer orders
- Update order status
- View order queue
- Manage basic inventory

### 3. **Administrators** (Full Access)
- Full system control
- Manage users (staff/customers)
- Add/Edit/Delete products
- View sales reports and analytics
- Update system settings

## 🔐 Login Credentials

### Admin Account
- **Username**: `admin@bakery.com`
- **Password**: `password`
- **Access Level**: Full system control

### Staff Accounts
- **Username**: `staff@bakery.com`
- **Password**: `password`
- **Permissions**: Order preparation

### Customer Accounts
- **Username**: `customer@bakery.com`
- **Password**: `password`

## ✨ System Features

### 🛒 **Customer Interface**
- **Product Catalog**: Browse bakery items with filters
- **Shopping Cart**: Add/remove items with quantity control
- **Order Placement**: Secure checkout process
- **Order Tracking**: Real-time status updates
- **Order History**: View past orders and receipts

### 👨‍🍳 **Staff Dashboard**
- **Order Management**:
  - View pending orders in real-time
  - Update order status (Preparing, Ready, Delivered)
  - Print order receipts
  - Handle order cancellations

### ⚙️ **Admin Panel**
- **User Management**:
  - Create/edit/delete staff accounts
  - Assign roles and permissions
  - Reset passwords
  - Monitor user activity

- **Product Management**:
  - Add new products with images
  - Edit product details and pricing
  - Set inventory levels
  - Create product categories
  - Manage seasonal specials

- **Sales & Analytics**:
  - Real-time sales dashboard
  - Revenue reports (daily, weekly, monthly)
  - Popular products analysis
  - Customer purchase trends
  - Export data to CSV/Excel

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Authentication**: Role-based access control
- **Data Storage**: LocalStorage/IndexedDB (for demo)
- **Icons**: Font Awesome
- **Typography**: Google Fonts
- **Deployment**: Vercel
- **Security**: Password hashing, session management

## 🚀 Installation & Setup

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Arlene-0929/SweetHaven-.git
   cd SweetHaven
   ```

2. **Open the application**
   - Open `index.html` in a web browser
   - Use the login button to access staff/admin features

3. **Default Login Credentials**
   - Admin: `admin@sweethaven.com` / `Admin@2024`
   - Staff accounts as listed above

### For Production Deployment

1. **Update Configuration**:
   - Change default passwords
   - Update store information
   - Configure payment gateway
   - Set up email notifications

2. **Database Setup**:
   - The demo uses localStorage
   - For production, connect to a backend database
   - Implement proper authentication system

## 📱 Usage Guide

### Customer Flow:
1. Browse products → Add to cart → Checkout → Receive confirmation

### Staff Flow:
1. Login → View dashboard → Process orders → Update inventory → Logout

### Admin Flow:
1. Login → Access admin panel → Manage users/products → View reports → System settings

## 🔧 Security Features

- **Role-based access control**
- **Secure password storage** (hashed)
- **Session timeout**
- **Input validation and sanitization**
- **CSRF protection**
- **Activity logging**

## 📊 Reports & Analytics

### Available Reports:
1. **Sales Reports**: Revenue by period, product, category
2. **Inventory Reports**: Stock levels, reorder suggestions
3. **Customer Reports**: Purchase history, preferences
4. **Staff Performance**: Order processing times, accuracy
5. **Financial Reports**: Profit margins, expenses

## 🚀 Deployment

### Vercel Deployment:
1. Push code to GitHub repository
2. Connect to Vercel
3. Configure environment variables
4. Deploy with one click

### Environment Variables Needed:
```env
ADMIN_EMAIL=admin@sweethaven.com
ADMIN_PASSWORD_HASH=[hashed_password]
JWT_SECRET=your_jwt_secret
API_URL=your_backend_url
```

## 📦 Database Schema (Demo Version)

```javascript
// Sample structure in localStorage
{
  "users": [
    {id, email, passwordHash, role, permissions, createdAt}
  ],
  "products": [
    {id, name, description, price, category, image, stock, status}
  ],
  "orders": [
    {id, customerInfo, items, total, status, createdAt, staffId}
  ],
  "inventory": [
    {productId, quantity, lastUpdated, lowStockAlert}
  ]
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/NewFeature`)
3. Test all user roles after changes
4. Commit with descriptive messages
5. Push and create a Pull Request

## 🐛 Testing Credentials

Use these accounts to test different roles:

| Role | Email | Password | Purpose |
|------|-------|----------|---------|
| Admin | `admin@bakery.com` | `password` | Full system testing |
| Staff | `staff@bakery.com` | `password` | Order processing testing |
| Customer | `customer@bakery.com` | `password` | Public interface testing |

## 🔄 Update Log

### Version 1.0.0
- Initial release with role-based access
- Complete staff and admin interfaces
- Inventory management system
- Sales reporting dashboard
- Secure authentication system

## 📞 Support & Issues

For technical issues or feature requests:
1. Check existing issues on GitHub
2. Include role being tested and steps to reproduce
3. Provide browser and device information
4. Use appropriate labels (bug, enhancement, security)

## ⚠️ Important Notes

1. **Demo Purpose**: Current version uses localStorage - data clears on browser cache clear
2. **Security**: Change all default passwords before production use
3. **Backup**: Regular database backups recommended
4. **Compliance**: Ensure PCI compliance if handling real payments
5. **Updates**: Regular updates for security patches

---

**SweetHaven Bakery Management System** - A complete solution for modern bakery operations. From customer ordering to backend management, everything you need in one place!

*🍰 Happy Baking & Managing!*
