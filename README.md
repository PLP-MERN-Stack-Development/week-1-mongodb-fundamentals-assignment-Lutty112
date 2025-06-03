# 📚 PLP Bookstore – MongoDB Project

## 📄 Week 1: MongoDB – Data Layer Fundamentals and Advanced Techniques

This project demonstrates the use of MongoDB for managing a simple bookstore dataset. It includes CRUD operations, advanced queries, aggregation pipelines, and indexing.

---

## 📦 Project Structure

```bash
.
├── insert_books.js   # Script to insert sample book documents
├── queries.js        # All MongoDB queries used in this project
├── README.md         # Project instructions and setup guide
└── screenshots/      # Screenshots showing data, indexes, and execution stats
```

---

## 💠 Setup Instructions

### 1. Install MongoDB

Choose **one** of the following options:

#### 🔹 Option A: MongoDB Community Edition (Local Setup)

* Download and install from [MongoDB Downloads](https://www.mongodb.com/try/download/community)
* Start MongoDB using:

  ```bash
  mongod
  ```

#### 🔹 Option B: MongoDB Atlas (Cloud Setup)

* Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
* Create a free cluster
* Connect using MongoDB URI and MongoDB Compass or `mongosh`

---

### 2. Insert Sample Data

Use the provided `insert_books.js` file to insert documents into a database named `plp_bookstore`.

#### Using `mongosh`:

```bash
mongosh
use plp_bookstore
load("insert_books.js")
```

---

## 🔍 How to Run Queries

1. Open MongoDB Shell (`mongosh`) or MongoDB Compass
2. Switch to the database:

   ```bash
   use plp_bookstore
   ```
3. Copy and paste queries from `queries.js` to test functionality:

   * Basic CRUD
   * Advanced Queries (filtering, projection, pagination)
   * Aggregation Pipelines
   * Index creation and performance analysis

---

## 📁 Files to Review

* **`insert_books.js`** – Sample data of 12 books with fields like `title`, `author`, `genre`, `price`, etc.
* **`queries.js`** – MongoDB queries organized by task:

  * CRUD operations
  * Advanced queries
  * Aggregation pipelines
  * Indexing and `explain()` usage
* **`screenshots/`** – Include:

  * Your books collection in Compass 
  * Index list output
  * Query performance comparison (with and without indexes)

---

## ✅ Submission Checklist

* [x] `insert_books.js` file with inserted documents
* [x] `queries.js` containing all MongoDB queries
* [x] `README.md` file with clear setup instructions
* [x] Screenshot(s) of your MongoDB setup and query execution results
* [x] Pushed to my GitHub Classroom repository

---

## 🙌 Author

Developed as part of the Power Learn Project – MongoDB Week 1 Assignment.
