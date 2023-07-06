const express = require("express") ;
const adminRoute = require("./routes/adminRoute");

// express app 
const app = express();

// register view engine
app.set('view engine', 'ejs') ;

// listen to requests
const server = app.listen(3001) ;

//  this MD must be used before post data from form would be submitted
app.use(express.urlencoded({extended : true}));

// middleware & static files
app.use(express.static('public')); //anything placed in the public(e.g images and css) will now be available to display

// using express router.
app.use('/admin', adminRoute);
