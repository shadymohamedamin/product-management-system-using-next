var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require('mongoose');
const mongodb = require("mongodb");
//var autoIncrement = require('mongoose-auto-increment');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();



const port = 5000;
app.listen(port, () => console.log(`Listening in port ${port}...`));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); 

//app.engine('handlebars', exphbs({defaultLayout: 'home', helpers: { formatIndex }}));

/*mongoose.connect('mongodb://localhost/test_mogo',{useNewUrlParser:true},(err)=>{
if(err)console.log('error');
//else 
console.log('yes');
});*/

/*db.employees.remove({ _id: ObjectId("1") });

ممكن تعمل بقى ابديت وتطرح الباقى
db.employees.updateMany(
  { _id: { $gt: ObjectId("1") } },
  { $set: { _id: { $subtract: ["$_id", 1] } } }
); */

//var mysql=require('mysql');
//var mongodb=require('mongodb');



/*const client = new mongodb.MongoClient("mongodb://localhost:27017/your_new_name_db");
client.connect((err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  // Get the collection
  const collection = client.db("your_new_name_db").collection("users");

  // Update all IDs
  collection.updateMany({}, { $set: { _id: new ObjectID(1) } });
});*/

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/your_new_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  },(err)=>{
  if(err)console.log('errorr');
  else console.log('connected');
});

 
/*const{createPool}=require('mysql');
const pool=createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"test",
    connectionLimit:10
});*/

//pool.query('select * from registration',(err,result,fields)=>{
//    if(err)return console.log(err);
//    else return console.log(result);
//});


/*var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  //if (err) throw err;
  if (err) console.log('error in mysql');
  console.log("Connected!");
  var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) console.log('error in mysql');//throw err;
    console.log("Table created");
  });

  


});*/



/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});*/



app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
