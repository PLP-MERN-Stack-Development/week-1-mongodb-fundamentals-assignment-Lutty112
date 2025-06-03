// Task 2: MongoDB Queries to fulfill the CRUD tasks:
// i. Find all books in a specific genre
     db.books.find({ genre: "Fiction" });

// ii. Find books published after a certain year
     db.books.find({ published_year: { $gt: 1950 } });

// iii.Find books by a specific author
     db.books.find({ author: "George Orwell" });

// iv. Update the price of a specific book
     db.books.updateOne(
       { title: "1984" },
       { $set: { price: 13.99 } }
     );

// v. Delete a book by its title
     db.books.deleteOne({ title: "Moby Dick" });


// Task 3: Advanced Queries:
// i. Find books that are both in stock and published after 2010
    db.books.find({
       in_stock: true,
       published_year: { $gt: 2010 }
    });

// ii. Use projection to return only the title, author, and price fields
    db.books.find( {},
         { _id: 0, title: 1, author: 1, price: 1 }
      );

// iii. Sort books by price (ascending)
    db.books.find().sort({ price: 1 });

// iv. Sort books by published year (descending)
    db.books.find().sort({ price: -1 });

// v. Pagination using limit() and skip() 5 books per page
// Assumin Page 1
    db.books.find().limit(5);

// Assuming Page 2
    db.books.find().skip(5).limit(5);


// Task 4: Aggregation Pipeline
// i. Average Price of Books by Genre
    db.books.aggregate([
      { $group: { _id: "$genre", avg_price: { $avg: "$price" } } }
     ]);

// ii. Author with the Most Books
    db.books.aggregate([
      { $group: { _id: "$author", book_count: { $sum: 1 } } },
      { $sort: { book_count: -1 } },
      { $limit: 1 }
    ]);

// iii. Group Books by Publication Decade and Count
      db.books.aggregate([
  { $group: { decade: {
        $concat: [
          { $toString: { $multiply: [{ $floor: { $divide: ["$published_year", 10] } }, 10] } },
          "s" ]
                 }
           }
  },
  { $group: { _id: "$decade", book_count: { $sum: 1 } } }
]);


// Task 5: Indexing
// i. Create an Index on the title Field
      db.books.createIndex({ title: 1 });

// ii. Create a compound index on "author" and "published_year"
     db.books.createIndex({ author: 1, published_year: -1 });

// iii. Use explain to show performance
// Before index (optional)
// db.books.dropIndex({ title: 1 });
// db.books.find({ title: "1984" }).explain("executionStats");

// After index
db.books.find({ title: "1984" }).explain("executionStats");

// Query using compound index
db.books.find({
  author: "George Orwell",
  published_year: { $gte: 1900 }
}).sort({ published_year: -1 }).explain("executionStats");

