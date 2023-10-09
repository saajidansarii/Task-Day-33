// 1. Find all the information about each products
db.info.find();

// 2.Find the product price which are between 400 to 800
db.info.find({ product_price: { $gt: 400, $lt: 800 } });

// 3.Find the product price which are not between 400 to 600
db.info.find({ product_price: { $not: { $lt: 600, $gt: 400 } } });

// 4.List the four product which are grater than 500 in price
db.info.find({ product_price: { $gt: 500 } }, {}, { limit: 4 });

// 5.Find the product name and product material of each products
db.info.find({}, { product_name: 1, product_material: 1 });

// 6.Find the product with a row id of 10
db.info.find({ id: { $eq: "10" } });

// 7.Find only the product name and product material
db.info.find({}, { product_name: 1, product_material: 1, _id: 0 });

// 8.Find all products which contain the value of soft in product material
db.info.find({ product_material: { $regex: "Soft" } });

// 9.Find products which contain product color indigo  and product price 492.00
db.info.find({ product_price: 492, product_color: "indigo" });

// 10.Delete the products which product price value = 47
db.info.deleteOne({ product_price: 47 });
