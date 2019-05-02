// Import MySQL connection.
var connection = require("../config/connection.js");


//set up ORM with callback methods
var orm = {
  selectAll: function(table,callback) {
    var queryString = "SELECT * FROM " + table;

    connection.query(queryString, function(err, result) {
      // if (err) {
      //   throw err;
      // }
      callback(result);
    });
  },
  insertOne: function(table,data, callback) {
    console.log(data);
    var qry = "INSERT INTO burgers (burger_name, devoured) VALUES (?,?)";
    connection.query(qry, [data.burger_name, data.devoured], function(err,result) {
      callback(result);
    });
  },
  updateOne: function(table,data1,id, callback) {
    console.log(data1);
    var qry = "UPDATE burgers SET ? WHERE ?"
    console.log({id});
    connection.query(qry, [data1, {id:id}], function(err,result) {
      if (err) throw err;
      callback(result);
    });
  }
};


module.exports = orm;