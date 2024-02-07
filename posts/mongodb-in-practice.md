---
title: "Introduction to MongoDB"
subtitle: "Learn the basics of MongoDB, a flexible and easily scalable NoSQL database, as well as the differences between NoSQL and Relational databases."
date: "2024-01-04"
color: '#7dd3fc'
---

# What is MongoDB?

MongoDB is a database. More specifically, a document-oriented one. We call it a NoSQL database and it's designed for scalability.

The data model is based on collections and documents. This means that a collection is a grouping of documents. A important concept is that MongoDB allows documents in the same collection to have different fields.

## Key Concepts

- A record in a collection is typically represented in BSON format.
- A collection is a grouping of MongoDB documents, as said before. They are analogous to tables in relational databases.
- A database is a container for collections, and MongoDB can host multiple databases on the same server.

### NoSQL vs. Relational Databases

It is very important to know the differences between MongoDB and MySQL, for example. A relational database (RDBMS) has structured data with a fixed schema. You need to follow the predefined columns and data types.

In a NoSQL database, for example, you can have flexibilty, considering you have no obligatory schema. Changes to the schema can be complex, so if you want flexibility, NoSQL databases are definitely better.

Relational databases uses SQL language for querying, while in a NoSQL database the languages vary. MongoDB uses a JavaScript-based query language.

Relational databases are well-suited for complex queries and transactions, and ACID (Atomicity, Consistency, Isolation, Durability) properties are essential. NoSQL databases, on the other hand, are suited for large amounts of unstructured or semi-structured data, with a high read and write scalability.

**Relational Databases examples:**
- MySQL, PostgreSQL, Oracle, SQL Server.
**NoSQL Databases examples:**
- MongoDB, Cassandra, Couchbase, Redis.

### MongoDB Basics

Now that you know about the key features, here is a MongoDB basic guide created by ChatGPT.

1. **Installation:**
    
    - Download MongoDB: MongoDB Download Center
    - Install and follow instructions based on your operating system.
2. **Starting MongoDB:**
    
    - Start MongoDB server: `mongod`
    - Connect to MongoDB: `mongo`

#### Database Operations:

3. **Create/Use Database:**
    
    - Create a new database: `use mydatabase`
4. **Collection Operations:**
    
    - Create a collection: `db.createCollection("mycollection")`
    - Show collections: `show collections`
    - Drop a collection: `db.mycollection.drop()`

#### Document Operations:

5. **Insert Documents:**
    
    - Insert a single document: `db.mycollection.insertOne({ key: "value" })`
    - Insert multiple documents: `db.mycollection.insertMany([{...}, {...}])`
6. **Query Documents:**
    
    - Find all documents: `db.mycollection.find()`
    - Find with a condition: `db.mycollection.find({ key: "value" })`
7. **Update Documents:**
    
    - Update a document: `db.mycollection.updateOne({ key: "value" }, { $set: { newKey: "newValue" } })`
    - Update multiple documents: `db.mycollection.updateMany({ key: "value" }, { $set: { newKey: "newValue" } })`
8. **Delete Documents:**
    
    - Delete a document: `db.mycollection.deleteOne({ key: "value" })`
    - Delete multiple documents: `db.mycollection.deleteMany({ key: "value" })`

#### Indexing:

9. **Create Index:**
    - Create a single-field index: `db.mycollection.createIndex({ key: 1 })`

#### Aggregation:

10. **Aggregation Pipeline:**
    - Use the aggregation pipeline for complex queries: `db.mycollection.aggregate([{ $match: { key: "value" } }, { $group: { _id: "$key", count: { $sum: 1 } } }])`

#### Miscellaneous:

11. **Exit MongoDB Shell:**
    
    - Exit the MongoDB shell: `quit()` or `exit`
12. **MongoDB Atlas:**
    
    - MongoDB's cloud service for hosting MongoDB databases: MongoDB Atlas

Remember to replace "mydatabase" and "mycollection" with your actual database and collection names. This cheat sheet covers basic operations; MongoDB has many more advanced features and options. Refer to the [MongoDB documentation](https://www.mongodb.com/docs/) for detailed information.