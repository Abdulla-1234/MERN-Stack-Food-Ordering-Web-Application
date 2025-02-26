# MERN-Stack-Food-Ordering-Web-Application

![MERN Stack Food Ordering Web Application](https://github.com/user-attachments/assets/cfbd245a-911c-4223-9596-74eabe0f3e3e)

## Overview
This is a **full-stack food ordering web application** built using the **MERN (MongoDB, Express.js, React.js, Node.js) stack**. The platform allows users to browse a variety of food items, place orders, manage their cart, and make payments. Admins can manage the menu, track orders, and view user activities.

---

## Features
✅ User Authentication (Login/Signup)  
✅ Browse Food Items with Categories  
✅ Add to Cart & Checkout  
✅ Online Payment Integration  
✅ Order Tracking System  
✅ Admin Panel for Managing Products & Orders  
✅ Responsive UI (Mobile-Friendly)  

---

## Tech Stack
- **Frontend:** React.js, Redux, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB, Mongoose  
- **Authentication:** JWT (JSON Web Token)  
- **Payments:** Stripe/Razorpay *(mention the one used)*  
- **Deployment:** AWS/Heroku/Vercel *(mention if deployed)*  

---

## Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Abdulla-1234/MERN-Stack-Food-Ordering-Web-Application.git
cd MERN-Stack-Food-Ordering-Web-Application
```

### 2️⃣ Install dependencies
#### Install server-side dependencies
```bash
cd backend
npm install
```

#### Install client-side dependencies
```bash
cd ../frontend
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the `backend` directory and add the following:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_key  # if using Stripe
```

### 4️⃣ Start the application
#### Start Backend
```bash
cd backend
npm run dev
```

#### Start Frontend
```bash
cd frontend
npm start
```

---

## Project Structure
```
📂 MERN-Stack-Food-Ordering-Web-Application
 ├── 📂 admin
 ├── 📂 backend        # Express.js API  
 ├── 📂 frontend       # React.js Frontend  
 ├── 📄 .env           # Environment Variables  
 ├── 📄 package.json   # Project Dependencies  
 ├── 📄 README.md      # Project Documentation  
```

---

## API Endpoints
| Method | Endpoint       | Description             |
|--------|---------------|-------------------------|
| GET    | `/api/foods`  | Fetch all food items   |
| POST   | `/api/orders` | Place an order         |
| GET    | `/api/orders` | Get user orders        |
| POST   | `/api/login`  | User authentication    |

---

## Screenshots
*(Add UI screenshots here for better visualization)*  

---

## Contributing
We welcome contributions! If you’d like to improve this project, follow these steps:  
1. **Fork the repository**  
2. **Create a new branch:** `git checkout -b feature-branch`  
3. **Commit your changes:** `git commit -m "Add new feature"`  
4. **Push to the branch:** `git push origin feature-branch`  
5. **Create a Pull Request**  
