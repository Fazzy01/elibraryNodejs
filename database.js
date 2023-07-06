var mysql = require('mysql') ;
 
var conn = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: null,
   database: "nodejsElibrary"
});

conn.connect(function(err){
   if(err){
       console.log(err);
   }
   else{
       // console.log("database connected");
   }
});

module.exports = conn ; 