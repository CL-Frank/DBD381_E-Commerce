# 🛒 E-Commerce NoSQL Backend Project

A simple, modular MongoDB backend system designed using **Mongoose** and **Node.js**, built to simulate a basic e-commerce platform. This project includes database schema definitions, CRUD test operations, and a clean project structure to support learning, testing, and future backend API development.

---

## 📌 Overview

This project showcases the use of MongoDB with Mongoose for modeling and interacting with NoSQL data in an e-commerce context. The system supports:

- Product listings
- Customer information
- Order processing
- Product reviews

Each of these is implemented as a Mongoose schema and is tested using modular scripts that demonstrate full CRUD (Create, Read, Update, Delete) operations with clear before/after outputs.

---

## 👨‍💻 Authors

- **Caydan Frank 578131** — Project Developer  
- **Charmaine Mkhabela 601395** — Research & Evaluation  
- **Hermanus Jacobus Bantjes 601427** — Testing & Documentation

---

## 🗂️ Project Structure

```
DBD381_E-Commerce/
├── .env                      # Environment variables (MongoDB URI, DB name)
├── .gitignore                # Ignored files (e.g. node_modules, .env)
├── index.js                  # Main entry to run all CRUD tests
├── package.json              # Project configuration and scripts
├── config/
│   └── db.js                 # Optional shared DB connection (used in app servers)
├── scripts/
│   ├── populate.js           # Seed file to insert sample data
│   └── crud/
│       ├── create.js         # Adds one doc to each collection
│       ├── read.js           # Reads specific docs
│       ├── update.js         # Updates one doc in each collection
│       ├── delete.js         # Deletes one doc from each collection
│       └── utils.js          # Connection + model loader for CRUD scripts
├── src/
│   └── models/               # Mongoose schema definitions
│       ├── Product.js
│       ├── User.js
│       ├── Order.js
│       └── Review.js
```

---

## 🧰 Requirements

- Node.js v16+
- MongoDB Atlas or Local MongoDB instance
- Internet connection (if using MongoDB Atlas)

---

## ⚙️ Setup Instructions

1. **Clone or Extract the repository**
   If downloaded as a `.zip`, extract and open the `DBD381_E-Commerce` folder.

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root with:
   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net
   MONGODB_DBNAME=ecommerce
   ```

4. **Populate the database**
   ```bash
   npm run populate
   ```

5. **Run full CRUD test suite**
   ```bash
   npm start
   ```

---

## 🧪 Testing

Each script prints out clear `console.table()` views of the document state **before and after** changes, allowing for transparent, human-readable testing.

- `npm run populate` populates the database with sample data
- `npm start` runs: create → read → update → delete

---

## 📈 Future Extensions

- Add Express.js routes (API layer)
- Integrate validation and error handling
- Add user authentication
- Implement frontend UI

---

## 📄 License

MIT License – free to use and modify.
