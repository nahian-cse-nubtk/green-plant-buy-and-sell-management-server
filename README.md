🌿 Green World – Green Plant Buy & Sell (Backend)

This is the backend API for Green World, a plant buying and selling management system.
The API is built using Node.js, Express.js, and MongoDB, providing endpoints for managing plant products, retrieving latest products, and performing CRUD operations.

🚀 Features

Create, read, and delete plant products

Fetch products by seller email

Get the latest 6 products sorted by creation time

Clean and structured REST API

Connected to MongoDB using mongodb native driver

Secure environment configuration using .env

📦 Tech Stack

Node.js

Express.js

MongoDB (Nodejs Driver)

CORS Middleware

dotenv for environment variables

📁 Project Setup & Installation

Follow these steps to run the backend server locally:

1️⃣ Clone the repository
git clone https://github.com/nahian-cse-nubtk/green-plant-buy-and-sell-management-server.git


2️⃣ Install dependencies
npm install

3️⃣ Create a .env file

Inside the project root, create a .env file:

MONGODB_URI=your_mongodb_connection_string
PORT=4000

4️⃣ Start the server
npm start


or with nodemon:

npm run dev

5️⃣ Server Running

If successful, you will see:

The server is running at port 4000
Pinged your deployment. You successfully connected to MongoDB!

🛣️ API Route Summary
Base URL
http://localhost:4000

🌿 Product Routes
1. Get all products
GET /products


Query params:

email (optional) → filter products by seller email

Examples:

All: /products

Seller products: /products?email=john@gmail.com

2. Get single product by ID
GET /products/:id


Returns one product document.

3. Get latest 6 products
GET /latestProducts


Sorted by createdAt (newest first), limit 6.

4. Add new product
POST /products


Body example:

{
  "title": "Money Plant",
  "price": 350,
  "sellerEmail": "demo@mail.com",
  "image": "https://example.com/image.jpg",
  "description": "Air purifying indoor plant."
}


Server automatically adds:

"createdAt": "2025-02-17T09:30:22.123Z"

5. Delete a product
DELETE /products/:id


