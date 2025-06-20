# 🛒 Product API

The **Product API** is a lightweight, RESTful service built using **Node.js**, **Express**, and **MongoDB Atlas** to perform CRUD operations on a product inventory. This project is perfect for beginners looking to learn API development, database integration, and deployment using modern technologies.

---

## 🚀 Live Deployment

- 🔗 API Base URL: [https://product-api-slik.onrender.com](https://product-api-slik.onrender.com)
- 🌐 GitHub Repository: [Product-API](https://github.com/its-kanii/Product-API)

---

## 📦 Tech Stack

- **Backend Framework:** Node.js with Express
- **Database:** MongoDB Atlas (cloud-based NoSQL)
- **ODM:** Mongoose
- **Deployment Platform:** Render
- **Tools Used:** Postman, curl

---

## 🧱 Project Structure

```
Product-API/
├── app.js
├── .env
├── models/
│   └── item.js
├── controllers/
│   └── itemController.js
├── routes/
│   └── itemRoutes.js
└── package.json
```

---

## 📄 API Endpoints

- ### GET /api/items
  Fetch all products.

- ### POST /api/items
  Add a new product.
  
  **Body:** `{ "name": "Mouse", "quantity": 3 }`

- ### PUT /api/items/:id
  Update a product by ID.
  
  **Body:** `{ "name": "Mouse", "quantity": 5 }`

- ### DELETE /api/items/:id
  Delete a product by ID.

---

## 🛠️ Getting Started

### Prerequisites
- Node.js and npm installed
- MongoDB Atlas account

### 1. Clone the Repo
```bash
git clone https://github.com/its-kanii/Product-API.git
cd Product-API
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure MongoDB Connection
Create a `.env` file in the root directory:
```
PORT=8000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/itemdb?retryWrites=true&w=majority
```

### 4. Start the Server
```bash
npm run dev
```
Visit `http://localhost:8000/api/items` to test.

---

## 🧪 Testing with curl

### Get All Items
```bash
curl http://localhost:8000/api/items
```

### Create Item
```bash
curl -X POST -H "Content-Type: application/json" -d "{"name":"Charger","quantity":2}" http://localhost:8000/api/items
```

### Update Item
```bash
curl -X PUT -H "Content-Type: application/json" -d "{"name":"Mouse","quantity":5}" http://localhost:8000/api/items/YOUR_ITEM_ID
```

### Delete Item
```bash
curl -X DELETE http://localhost:8000/api/items/YOUR_ITEM_ID
```

---

## ☁️ Deploy on Render

1. Push code to GitHub.
2. Login to [Render](https://render.com).
3. Create new Web Service → Connect GitHub repo.
4. Set build command: `npm install`
5. Set start command: `node app.js`
6. Add environment variable `MONGO_URI` and deploy.

---

## 👩‍💻 Author

**Kanimozhi K**  
Data Science & Full Stack Enthusiast  
- [GitHub](https://github.com/its-kanii)
- [LinkedIn](https://linkedin.com/in/kanimozhi-kathirvel)

---

## 📜 License

This project is licensed under the MIT License.
