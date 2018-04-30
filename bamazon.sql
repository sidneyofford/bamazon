DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  item_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL
  
);

INSERT INTO products (product_name, price, stock_quantity)
VALUES ("adidas", 89.99, 100);

INSERT INTO products (product_name, price, stock_quantity)
VALUES ("nike", 135.99, 120);

INSERT INTO products (product_name, price, stock_quantity)
VALUES ("vans", 58.99, 75);

INSERT INTO products (product_name, price, stock_quantity)
VALUES ("puma", 67.99, 75);

INSERT INTO products (product_name, price, stock_quantity)
VALUES ("new balance", 70.99, 40);

INSERT INTO products (product_name, price, stock_quantity)
VALUES ("diadora", 42.99, 25);

INSERT INTO products (product_name, price, stock_quantity)
VALUES ("reebok", 98.99, 80);

INSERT INTO products (product_name, price, stock_quantity)
VALUES ("converse", 71.99, 55);

INSERT INTO products (product_name, price, stock_quantity)
VALUES ("sperry", 82.99, 11);

INSERT INTO products (product_name, price, stock_quantity)
VALUES ("asics", 49.99, 15);


connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  createProduct();
});

