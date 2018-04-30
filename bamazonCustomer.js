// dependency for inquirer npm package
var inquirer = require("inquirer");
var mysql = require("mysql");


// Connection to mysql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // my username
  user: "root",

  // my password & Database
  password: "",
  database: "bamazon"
});


// Connect to the database
connection.connect(function(err) {
    if (err) throw err;
    displayProducts();
})

// * --  Display All products
var displayProducts = function() {
  var query = 'SELECT * FROM products'
  connection.query(query, function(err, res) {
      for (var i = 0; i < res.length; i++) {
          console.log("Item ID: " + res[i].itemID + " || Product: " + res[i].productName + "|| Price: " + res[i].price + " || Stock: " + res[i].stockQuantity);
      }
      checkOut();
    })
};

var checkOut = function() {
    inquirer.prompt([{
        name: "ProductID",
        type: "input",
        message: "What is the ID of the product you would like to buy?",
        
        validate: function(value) {
            if (isNaN(value) == false) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        name: "Quantity",
        type: "input",
        message: "How many would you like to buy?",
        validate: function(value) {
            if (isNaN(value) == false) {
                return true;
            } else {
                return false;
            }
        }
    }]).then(function(answer) {

        var query = 'SELECT * FROM Products WHERE itemID=' + answer.Quantity;
        connection.query(query, function(err, res) {
          if (answer.Quantity <= res) {
            for (var i = 0; i < res.length; i++) {
                console.log("We currently have " + res[i].stockQuantity + " " + res[i].productName + ".");
                console.log("We apologize, but your order of "+ res[i].stockQuantity + " " + res[i].productName + "exceeds current stock.");
              }
            } else {
              console.log("Not enough stock on hand.");
            }
            displayProducts();
        })
    })
};