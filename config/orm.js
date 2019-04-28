// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values

var connection = require("./connection.js");

var orm = {

    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, tableInput, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },

    insertOne: function(table, col, val, cb) {
        var queryString = "INSERT INTO ?? (??,??) VALUES (?,?)";
        
        connection.query(queryString, [table, col,"devoured",val,0], function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },

    updateOne:function(table, val, cb) {
        var queryString = "UPDATE ?? SET devoured = 1 where id=?";
    
        connection.query(queryString, [table, val], function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      }
    
};

module.exports = orm;


