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

### 📘 Product Routes
Method	Endpoint	Description
GET	/products	Get all products OR filter by seller email (?email=)
GET	/products/:id	Get a single product by its ID
GET	/latestProducts	Get last 6 added products (sorted by createdAt)
POST	/products	Add a new product (auto-adds createdAt timestamp)
DELETE	/products/:id	Delete a product by ID
🔍 Query Filtering
Get products by seller email:
GET /products?email=seller@example.com

🧪 Example Product Object
{
  "title": "Golden Money Plant",
  "shortDescription": "Low maintenance indoor plant",
  "description": "Perfect for indoor decoration and air purification.",
  "price": 350,
  "image": "https://example.com/plant.jpg",
  "sellerEmail": "test@gmail.com",
  "createdAt": "2025-01-20T10:00:00.000Z"
}
